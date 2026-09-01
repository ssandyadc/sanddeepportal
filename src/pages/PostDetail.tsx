import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase, type BlogPost } from '../lib/supabase'

export default function PostDetail() {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    async function loadPost() {
      if (!slug) return
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .maybeSingle()

      if (error || !data) {
        setNotFound(true)
      } else {
        setPost(data)
      }
      setLoading(false)
    }
    loadPost()
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-400">
        Loading...
      </div>
    )
  }

  if (notFound || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-slate-700">Post not found</h1>
        <Link to="/" className="text-primary-600 hover:text-primary-700 font-medium">
          ← Back to blog
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 h-16 flex items-center">
          <Link to="/" className="text-sm font-medium text-slate-600 hover:text-primary-700 transition-colors">
            ← Back to blog
          </Link>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-4 py-12">
        {post.category && (
          <span className="inline-block text-xs font-semibold text-accent-600 bg-accent-50 px-2.5 py-1 rounded-full mb-4">
            {post.category}
          </span>
        )}
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <span className="font-medium text-slate-700">{post.author}</span>
          <span>•</span>
          <span>{new Date(post.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>

        {post.cover_image_url && (
          <img
            src={post.cover_image_url}
            alt={post.title}
            className="w-full rounded-xl mb-8 object-cover max-h-96"
          />
        )}

        {post.excerpt && (
          <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium border-l-4 border-primary-300 pl-4">
            {post.excerpt}
          </p>
        )}

        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed whitespace-pre-wrap">
          {post.content}
        </div>
      </article>
    </div>
  )
}
