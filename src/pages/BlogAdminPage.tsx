import { useState, useEffect, useRef } from 'react';
import { Plus, CreditCard as Edit2, Trash2, Eye, EyeOff, LogOut, Save, X, CheckCircle, AlertCircle, Upload, Image as ImageIcon } from 'lucide-react';

const ADMIN_SECRET = 'gemportalassist2026';
const CATEGORIES = ['Product News', 'GeM Updates', 'Tips & Tricks', 'Policy Changes', 'General'];

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image_url: string;
  category: string;
  published: boolean;
  published_at: string | null;
  created_at: string;
}

type FormState = Omit<BlogPost, 'id' | 'created_at' | 'published_at'> & { published: boolean };

const emptyForm = (): FormState => ({
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  cover_image_url: '',
  category: 'General',
  published: false,
});

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80);
}

function apiUrl(path = '') {
  const base = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/blog-admin`;
  return path ? `${base}/${path}` : base;
}

function apiHeaders() {
  return {
    'Content-Type': 'application/json',
    'X-Admin-Secret': ADMIN_SECRET,
    Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
  };
}

type Toast = { type: 'success' | 'error'; message: string };

function uploadUrl() {
  return `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/blog-upload`;
}

export default function BlogAdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [creating, setCreating] = useState(false);
  const [form, setForm] = useState<FormState>(emptyForm());
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<Toast | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (authed) fetchPosts();
  }, [authed]);

  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 3500);
      return () => clearTimeout(t);
    }
  }, [toast]);

  function showToast(type: Toast['type'], message: string) {
    setToast({ type, message });
  }

  async function fetchPosts() {
    setLoading(true);
    try {
      const res = await fetch(apiUrl(), { headers: apiHeaders() });
      const data = await res.json();
      setPosts(Array.isArray(data) ? data : []);
    } catch {
      showToast('error', 'Failed to load posts');
    } finally {
      setLoading(false);
    }
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (password === ADMIN_SECRET) {
      setAuthed(true);
      setPasswordError('');
    } else {
      setPasswordError('Incorrect password. Try again.');
    }
  }

  function startCreate() {
    setForm(emptyForm());
    setCreating(true);
    setEditing(null);
  }

  function startEdit(post: BlogPost) {
    setForm({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      cover_image_url: post.cover_image_url,
      category: post.category,
      published: post.published,
    });
    setEditing(post);
    setCreating(false);
  }

  function cancelForm() {
    setCreating(false);
    setEditing(null);
    setForm(emptyForm());
  }

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm(prev => {
      const updated = { ...prev, [key]: value };
      if (key === 'title' && !editing) {
        updated.slug = slugify(value as string);
      }
      return updated;
    });
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      const res = await fetch(uploadUrl(), {
        method: 'POST',
        headers: {
          'X-Admin-Secret': ADMIN_SECRET,
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: fd,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Upload failed');
      updateField('cover_image_url', data.url);
      showToast('success', 'Image uploaded!');
    } catch {
      showToast('error', 'Image upload failed. Try again.');
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  }

  async function savePost() {
    if (!form.title.trim() || !form.content.trim()) {
      showToast('error', 'Title and content are required.');
      return;
    }
    setSaving(true);
    try {
      if (editing) {
        const res = await fetch(apiUrl(editing.id), {
          method: 'PUT',
          headers: apiHeaders(),
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error('Update failed');
        showToast('success', 'Post updated!');
      } else {
        const res = await fetch(apiUrl(), {
          method: 'POST',
          headers: apiHeaders(),
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error('Create failed');
        showToast('success', 'Post created!');
      }
      cancelForm();
      await fetchPosts();
    } catch {
      showToast('error', 'Failed to save. Please try again.');
    } finally {
      setSaving(false);
    }
  }

  async function togglePublish(post: BlogPost) {
    try {
      const res = await fetch(apiUrl(post.id), {
        method: 'PUT',
        headers: apiHeaders(),
        body: JSON.stringify({ published: !post.published }),
      });
      if (!res.ok) throw new Error();
      showToast('success', post.published ? 'Post unpublished.' : 'Post published!');
      await fetchPosts();
    } catch {
      showToast('error', 'Failed to update status.');
    }
  }

  async function deletePost(post: BlogPost) {
    setDeletingId(post.id);
    try {
      const res = await fetch(apiUrl(post.id), {
        method: 'DELETE',
        headers: apiHeaders(),
      });
      if (!res.ok) throw new Error();
      showToast('success', 'Post deleted.');
      await fetchPosts();
    } catch {
      showToast('error', 'Failed to delete post.');
    } finally {
      setDeletingId(null);
    }
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-800 flex items-center justify-center px-4 pt-16">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm">
          <div className="text-center mb-6">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Edit2 size={24} className="text-blue-700" />
            </div>
            <h1 className="text-xl font-black text-gray-900">Blog Admin</h1>
            <p className="text-sm text-gray-500 mt-1">Gem Portal Assist</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-1">Admin Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter password"
                autoFocus
              />
              {passwordError && (
                <p className="text-red-500 text-xs mt-1">{passwordError}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2.5 rounded-xl transition-colors"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Toast */}
      {toast && (
        <div className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-xl shadow-lg text-sm font-semibold transition-all ${
          toast.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
        }`}>
          {toast.type === 'success' ? <CheckCircle size={17} /> : <AlertCircle size={17} />}
          {toast.message}
        </div>
      )}

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-black text-gray-900">Blog Admin</h1>
            <p className="text-sm text-gray-500 mt-0.5">{posts.length} total posts</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={startCreate}
              className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-4 py-2 rounded-xl text-sm transition-colors"
            >
              <Plus size={16} /> New Post
            </button>
            <button
              onClick={() => setAuthed(false)}
              className="flex items-center gap-2 text-gray-500 hover:text-gray-700 text-sm font-medium border border-gray-200 px-3 py-2 rounded-xl transition-colors"
            >
              <LogOut size={15} /> Sign Out
            </button>
          </div>
        </div>

        {/* Post Form */}
        {(creating || editing) && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-black text-gray-900">{editing ? 'Edit Post' : 'New Post'}</h2>
              <button onClick={cancelForm} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="text-xs font-bold text-gray-600 uppercase tracking-wide block mb-1">Title *</label>
                <input
                  type="text"
                  value={form.title}
                  onChange={e => updateField('title', e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Post title..."
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-600 uppercase tracking-wide block mb-1">Slug</label>
                <input
                  type="text"
                  value={form.slug}
                  onChange={e => updateField('slug', e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                  placeholder="auto-generated-from-title"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-600 uppercase tracking-wide block mb-1">Category</label>
                <select
                  value={form.category}
                  onChange={e => updateField('category', e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="text-xs font-bold text-gray-600 uppercase tracking-wide block mb-1">Cover Image</label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  className="hidden"
                  onChange={handleImageUpload}
                />
                {form.cover_image_url ? (
                  <div className="relative group rounded-xl overflow-hidden border border-gray-200 h-44">
                    <img src={form.cover_image_url} alt="Cover" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={uploading}
                        className="flex items-center gap-2 bg-white text-gray-900 font-bold text-sm px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <Upload size={15} /> {uploading ? 'Uploading...' : 'Replace'}
                      </button>
                      <button
                        type="button"
                        onClick={() => updateField('cover_image_url', '')}
                        className="flex items-center gap-2 bg-red-600 text-white font-bold text-sm px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                      >
                        <X size={15} /> Remove
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploading}
                    className="w-full h-32 border-2 border-dashed border-gray-300 hover:border-blue-400 rounded-xl flex flex-col items-center justify-center gap-2 text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    {uploading ? (
                      <>
                        <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                        <span className="text-sm font-medium">Uploading...</span>
                      </>
                    ) : (
                      <>
                        <ImageIcon size={24} />
                        <span className="text-sm font-medium">Click to upload cover image</span>
                        <span className="text-xs">JPG, PNG, WebP up to 5MB</span>
                      </>
                    )}
                  </button>
                )}
              </div>
              <div className="md:col-span-2">
                <label className="text-xs font-bold text-gray-600 uppercase tracking-wide block mb-1">Excerpt</label>
                <textarea
                  value={form.excerpt}
                  onChange={e => updateField('excerpt', e.target.value)}
                  rows={2}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Short summary shown on listing page..."
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-xs font-bold text-gray-600 uppercase tracking-wide block mb-1">
                  Content * <span className="normal-case font-normal text-gray-400">(supports ## Headings, - bullet lists)</span>
                </label>
                <textarea
                  value={form.content}
                  onChange={e => updateField('content', e.target.value)}
                  rows={14}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y font-mono"
                  placeholder="Write your post content here...&#10;&#10;## Section Heading&#10;&#10;Paragraph text here.&#10;&#10;- Bullet point one&#10;- Bullet point two"
                />
              </div>
              <div className="md:col-span-2 flex items-center gap-3">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <div
                    onClick={() => updateField('published', !form.published)}
                    className={`w-11 h-6 rounded-full transition-colors flex items-center px-0.5 ${
                      form.published ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                      form.published ? 'translate-x-5' : 'translate-x-0'
                    }`} />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">
                    {form.published ? 'Published' : 'Draft'}
                  </span>
                </label>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-5 pt-5 border-t border-gray-100">
              <button
                onClick={cancelForm}
                className="px-5 py-2 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={savePost}
                disabled={saving}
                className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white font-bold px-5 py-2 rounded-xl text-sm transition-colors"
              >
                <Save size={15} />
                {saving ? 'Saving...' : 'Save Post'}
              </button>
            </div>
          </div>
        )}

        {/* Posts List */}
        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white rounded-2xl h-20 animate-pulse border border-gray-100" />
            ))}
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg font-medium">No posts yet</p>
            <p className="text-sm mt-1">Click "New Post" to publish your first article.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {posts.map(post => (
              <div key={post.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4 flex items-center gap-4">
                {post.cover_image_url && (
                  <img src={post.cover_image_url} alt="" className="w-14 h-14 rounded-xl object-cover shrink-0 hidden sm:block" />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      post.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {post.published ? 'Published' : 'Draft'}
                    </span>
                    <span className="text-xs text-gray-400 bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-medium">
                      {post.category}
                    </span>
                  </div>
                  <p className="font-bold text-gray-900 text-sm truncate">{post.title}</p>
                  <p className="text-xs text-gray-400 font-mono truncate">/blog/{post.slug}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => togglePublish(post)}
                    title={post.published ? 'Unpublish' : 'Publish'}
                    className={`p-2 rounded-lg transition-colors ${
                      post.published
                        ? 'text-green-600 hover:bg-green-50'
                        : 'text-gray-400 hover:bg-gray-100'
                    }`}
                  >
                    {post.published ? <Eye size={16} /> : <EyeOff size={16} />}
                  </button>
                  <button
                    onClick={() => startEdit(post)}
                    className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => deletePost(post)}
                    disabled={deletingId === post.id}
                    className="p-2 rounded-lg text-red-500 hover:bg-red-50 transition-colors disabled:opacity-40"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}