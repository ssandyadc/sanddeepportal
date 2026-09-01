import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase, type BlogPost } from '../lib/supabase'
import { useAuth } from '../context/AuthContext'

export default function Home() {
  const { user, signOut } = useAuth()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadPosts() {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })

      if (!error && data) {
        setPosts(data)
      }
      setLoading(false)
    }
    loadPosts()
  }, [])

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tight text-primary-700">
            Gem Blog
          </Link>
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-sm font-medium text-slate-600 hover:text-primary-700 transition-colors"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => signOut()}
                  className="text-sm font-medium text-slate-600 hover:text-error-600 transition-colors"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-lg transition-colors"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 pt-16 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
          Insights, News & Stories
        </h1>
        <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
          Welcome to the Gem Blog — a place for the latest updates and articles.
        </p>
      </section>

      {/* Posts */}
      <main className="max-w-5xl mx-auto px-4 pb-20">
        {loading ? (
          <div className="text-center py-20 text-slate-400">Loading posts...</div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">No posts yet.</p>
            {user && (
              <Link
                to="/dashboard"
                className="inline-block mt-4 text-primary-600 hover:text-primary-700 font-medium"
              >
                Go to Dashboard to write your first post →
              </Link>
            )}
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group"
              >
                {post.cover_image_url && (
                  <Link to={`/post/${post.slug}`}>
                    <img
                      src={post.cover_image_url}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </Link>
                )}
                <div className="p-6">
                  {post.category && (
                    <span className="inline-block text-xs font-semibold text-accent-600 bg-accent-50 px-2.5 py-1 rounded-full mb-3">
                      {post.category}
                    </span>
                  )}
                  <h2 className="text-lg font-bold text-slate-900 leading-snug mb-2">
                    <Link to={`/post/${post.slug}`} className="hover:text-primary-700 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  {post.excerpt && (
                    <p className="text-sm text-slate-500 line-clamp-3 mb-4">{post.excerpt}</p>
                  )}
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{new Date(post.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-400">
        Gem Blog © 2026
      </footer>
    </div>
  )
}
