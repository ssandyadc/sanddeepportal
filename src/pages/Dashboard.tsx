import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase, type BlogPost } from '../lib/supabase'
import { useAuth } from '../context/AuthContext'

export default function Dashboard() {
  const { user, signOut, loading } = useAuth()
  const navigate = useNavigate()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loadingPosts, setLoadingPosts] = useState(true)

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login')
    }
  }, [user, loading, navigate])

  useEffect(() => {
    async function loadPosts() {
      if (!user) return
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

      if (!error && data) {
        setPosts(data)
      }
      setLoadingPosts(false)
    }
    loadPosts()
  }, [user])

  async function handleDelete(id: string) {
    if (!confirm('Are you sure you want to delete this post?')) return
    const { error } = await supabase.from('blog_posts').delete().eq('id', id)
    if (!error) {
      setPosts((prev) => prev.filter((p) => p.id !== id))
    }
  }

  async function togglePublish(post: BlogPost) {
    const { data, error } = await supabase
      .from('blog_posts')
      .update({ published: !post.published })
      .eq('id', post.id)
      .select()
      .maybeSingle()

    if (!error && data) {
      setPosts((prev) => prev.map((p) => (p.id === post.id ? data : p)))
    }
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-slate-400">Loading...</div>
  }

  if (!user) return null

  return (
    <div className="min-h-screen">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tight text-primary-700">
            Gem Blog
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm font-medium text-slate-600 hover:text-primary-700 transition-colors">
              View Blog
            </Link>
            <button
              onClick={() => signOut()}
              className="text-sm font-medium text-slate-600 hover:text-error-600 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Your Posts</h1>
            <p className="text-sm text-slate-500 mt-1">Signed in as {user.email}</p>
          </div>
          <Link
            to="/editor"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium px-5 py-2.5 rounded-lg transition-colors"
          >
            <span className="text-lg leading-none">+</span> New Post
          </Link>
        </div>

        {loadingPosts ? (
          <div className="text-center py-12 text-slate-400">Loading your posts...</div>
        ) : posts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-slate-200">
            <p className="text-slate-500 mb-4">You haven't written any posts yet.</p>
            <Link
              to="/editor"
              className="inline-block text-primary-600 hover:text-primary-700 font-medium"
            >
              Write your first post →
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-6 py-3">Title</th>
                  <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-6 py-3">Status</th>
                  <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-6 py-3">Date</th>
                  <th className="text-right text-xs font-semibold text-slate-500 uppercase tracking-wide px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <Link
                        to={`/post/${post.slug}`}
                        className="font-medium text-slate-900 hover:text-primary-700 transition-colors"
                      >
                        {post.title || 'Untitled'}
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      {post.published ? (
                        <span className="inline-flex items-center text-xs font-medium text-success-600 bg-success-500/10 px-2.5 py-1 rounded-full">
                          Published
                        </span>
                      ) : (
                        <span className="inline-flex items-center text-xs font-medium text-warning-500 bg-warning-500/10 px-2.5 py-1 rounded-full">
                          Draft
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      {new Date(post.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <button
                          onClick={() => togglePublish(post)}
                          className="text-xs font-medium text-slate-600 hover:text-primary-700 transition-colors"
                        >
                          {post.published ? 'Unpublish' : 'Publish'}
                        </button>
                        <Link
                          to={`/editor/${post.id}`}
                          className="text-xs font-medium text-slate-600 hover:text-primary-700 transition-colors"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="text-xs font-medium text-slate-600 hover:text-error-600 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  )
}
