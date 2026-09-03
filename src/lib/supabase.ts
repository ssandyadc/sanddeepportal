import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
})

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  cover_image_url: string
  category: string
  author: string
  published: boolean
  user_id: string
  created_at: string
  updated_at: string
}

export type BlogPostInput = Omit<BlogPost, 'id' | 'user_id' | 'created_at' | 'updated_at'>

export async function submitLead(data: {
  name: string;
  phone: string;
  email?: string;
  business_type?: string;
  message?: string;
  source?: string;
}) {
  return supabase.from('leads').insert(data);
}
