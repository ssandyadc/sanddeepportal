import { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Tag, Clock, Search, ChevronRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

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

interface BlogPageProps {
  onNavigate: (page: string) => void;
  initialSlug?: string;
}

const CATEGORIES = ['All', 'Product News', 'GeM Updates', 'Tips & Tricks', 'Policy Changes', 'General'];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function readingTime(content: string) {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function renderContent(content: string) {
  return content.split('\n').map((line, i) => {
    if (line.startsWith('## ')) {
      return <h2 key={i} className="text-xl font-bold text-gray-900 mt-8 mb-3">{line.slice(3)}</h2>;
    }
    if (line.startsWith('### ')) {
      return <h3 key={i} className="text-lg font-bold text-gray-800 mt-6 mb-2">{line.slice(4)}</h3>;
    }
    if (line.startsWith('**') && line.endsWith('**')) {
      return <p key={i} className="font-bold text-gray-900 my-2">{line.slice(2, -2)}</p>;
    }
    if (line.startsWith('- ')) {
      return <li key={i} className="ml-5 text-gray-700 my-1 list-disc">{line.slice(2)}</li>;
    }
    if (line.trim() === '') {
      return <div key={i} className="h-3" />;
    }
    return <p key={i} className="text-gray-700 leading-relaxed my-2">{line}</p>;
  });
}

export default function BlogPage({ onNavigate, initialSlug }: BlogPageProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (initialSlug && posts.length > 0) {
      const post = posts.find(p => p.slug === initialSlug);
      if (post) setSelectedPost(post);
    }
  }, [initialSlug, posts]);

  async function fetchPosts() {
    setLoading(true);
    const { data } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('published_at', { ascending: false });
    setPosts(data ?? []);
    setLoading(false);
  }

  function openPost(post: BlogPost) {
    setSelectedPost(post);
    window.history.pushState(null, '', `/blog/${post.slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function backToList() {
    setSelectedPost(null);
    window.history.pushState(null, '', '/blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const filtered = posts.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    return matchSearch && matchCat;
  });

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-3xl mx-auto px-4 py-10">
          <button
            onClick={backToList}
            className="flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium mb-8 group transition-colors"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </button>

          {selectedPost.cover_image_url && (
            <img
              src={selectedPost.cover_image_url}
              alt={selectedPost.title}
              className="w-full h-64 md:h-80 object-cover rounded-2xl mb-8 shadow-md"
            />
          )}

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
              {selectedPost.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400">
              <Calendar size={13} />
              {formatDate(selectedPost.published_at ?? selectedPost.created_at)}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400">
              <Clock size={13} />
              {readingTime(selectedPost.content)} min read
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-6">
            {selectedPost.title}
          </h1>

          <div className="prose max-w-none bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            {renderContent(selectedPost.content)}
          </div>

          <div className="mt-10 bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-6 text-white">
            <p className="font-bold text-lg mb-1">Need help with GeM Portal?</p>
            <p className="text-blue-200 text-sm mb-4">Our experts can guide you from registration to your first order.</p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-amber-500 hover:bg-amber-400 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-800 to-blue-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="bg-amber-400 text-amber-900 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
            GEM Portal Blog
          </span>
          <h1 className="text-3xl md:text-5xl font-black mt-4 mb-4 leading-tight">
            Latest News &amp; Updates
          </h1>
          <p className="text-blue-200 text-base md:text-lg max-w-xl mx-auto">
            Daily product news, GeM policy updates, seller tips and more — stay ahead of the curve.
          </p>

          {/* Search */}
          <div className="relative mt-8 max-w-md mx-auto">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm backdrop-blur"
            />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Category filter */}
        <div className="flex gap-2 flex-wrap mb-8">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-blue-700 text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white rounded-2xl h-72 animate-pulse border border-gray-100" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <Tag size={40} className="mx-auto mb-4 opacity-30" />
            <p className="text-lg font-medium">No posts found</p>
            <p className="text-sm mt-1">Try a different search or category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, idx) => (
              <article
                key={post.id}
                onClick={() => openPost(post)}
                className={`bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer group ${
                  idx === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {post.cover_image_url ? (
                  <img
                    src={post.cover_image_url}
                    alt={post.title}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-44 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <span className="text-blue-400 text-3xl font-black opacity-30">GPA</span>
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-50 text-blue-700 text-xs font-bold px-2.5 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Calendar size={11} />
                      {formatDate(post.published_at ?? post.created_at)}
                    </span>
                  </div>
                  <h2 className="font-black text-gray-900 text-base leading-snug mb-2 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock size={11} />
                      {readingTime(post.content)} min read
                    </span>
                    <span className="text-blue-600 text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more <ChevronRight size={13} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
