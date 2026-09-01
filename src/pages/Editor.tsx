import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuth } from '../context/AuthContext'

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export default function Editor() {
  const { id } = useParams<{ id: string }>()
  const { user, loading: authLoading } = useAuth()
  const navigate = useNavigate()
  const isEditing = Boolean(id)

  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [coverImageUrl, setCoverImageUrl] = useState('')
  const [category, setCategory] = useState('')
  const [author, setAuthor] = useState('')
  const [published, setPublished] = useState(false)
  const [loading, setLoading] = useState(isEditing)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!authLoading && !user) navigate('/login')
  }, [user, authLoading, navigate])

  useEffect(() => {
    if (!id || !user) return
    async function loadPost() {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .maybeSingle()

      if (error || !data) {
        setError('Could not load post')
        setLoading(false)
        return
      }
      if (data.user_id !== user!.id) {
        setError('You do not have permission to edit this post')
        setLoading(false)
        return
      }
      setTitle(data.title)
      setSlug(data.slug)
      setExcerpt(data.excerpt)
      setContent(data.content)
      setCoverImageUrl(data.cover_image_url)
      setCategory(data.category)
      setAuthor(data.author)
      setPublished(data.published)
      setLoading(false)
    }
    loadPost()
  }, [id, user])

  function handleTitleChange(value: string) {
    setTitle(value)
    if (!isEditing || slug === slugify(title)) {
      setSlug(slugify(value))
    }
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    if (!user) return

    if (!title.trim()) {
      setError('Title is required')
      return
    }

    setSaving(true)
    setError(null)

    const finalSlug = slug.trim() || slugify(title)
    const payload = {
      title: title.trim(),
      slug: finalSlug,
      excerpt: excerpt.trim(),
      content: content.trim(),
      cover_image_url: coverImageUrl.trim(),
      category: category.trim() || 'General',
      author: author.trim() || 'Admin',
      published,
    }

    if (isEditing && id) {
      const { error } = await supabase
        .from('blog_posts')
        .update(payload)
        .eq('id', id)
      if (error) {
        setError(error.message)
        setSaving(false)
        return
      }
    } else {
      const { error } = await supabase
        .from('blog_posts')
        .insert(payload)
      if (error) {
        setError(error.message)
        setSaving(false)
        return
      }
    }

    navigate('/dashboard')
  }

  if (authLoading || loading) {
    return <div className="min-h-screen flex items-center justify-center text-slate-400">Loading...</div>
  }

  if (!user) return null

  return (
    <div className="min-h-screen">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/dashboard" className="text-sm font-medium text-slate-600 hover:text-primary-700 transition-colors">
            ← Dashboard
          </Link>
          <h1 className="text-lg font-bold text-slate-900">
            {isEditing ? 'Edit Post' : 'New Post'}
          </h1>
          <div className="w-20" />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10">
        <form onSubmit={handleSave} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Title *</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
              placeholder="Enter post title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Slug (URL)</label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all font-mono text-sm"
              placeholder="auto-generated-from-title"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Category</label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                placeholder="e.g. News, Tutorials"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Author</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                placeholder="Author name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Cover Image URL</label>
            <input
              type="url"
              value={coverImageUrl}
              onChange={(e) => setCoverImageUrl(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Excerpt</label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={2}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
              placeholder="A short summary shown on the blog listing"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={16}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-y font-serif text-base leading-relaxed"
              placeholder="Write your post content here..."
            />
          </div>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
              className="w-5 h-5 rounded border-slate-300 text-primary-600 focus:ring-primary-200"
            />
            <span className="text-sm font-medium text-slate-700">
              Publish immediately {published ? '(visible to everyone)' : '(saved as draft)'}
            </span>
          </label>

          {error && (
            <div className="text-sm text-error-600 bg-error-500/10 rounded-lg px-4 py-3">
              {error}
            </div>
          )}

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-2.5 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors disabled:opacity-50"
            >
              {saving ? 'Saving...' : isEditing ? 'Update Post' : 'Create Post'}
            </button>
            <Link
              to="/dashboard"
              className="px-6 py-2.5 rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-50 font-medium transition-colors"
            >
              Cancel
            </Link>
          </div>
        </form>
      </main>
    </div>
  )
}
