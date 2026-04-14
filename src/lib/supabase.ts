import { createClient, SupabaseClient } from '@supabase/supabase-js'

let _supabase: SupabaseClient | null = null
let _supabaseAdmin: SupabaseClient | null = null

export function getSupabase(): SupabaseClient {
  if (!_supabase) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    if (!url || !key) throw new Error('Missing Supabase public env vars')
    _supabase = createClient(url, key)
  }
  return _supabase
}

export function getSupabaseAdmin(): SupabaseClient {
  if (!_supabaseAdmin) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY
    if (!url || !key) throw new Error('Missing Supabase admin env vars')
    _supabaseAdmin = createClient(url, key)
  }
  return _supabaseAdmin
}

// Convenience aliases used by API routes
export const supabaseAdmin = {
  from: (...args: Parameters<SupabaseClient['from']>) => getSupabaseAdmin().from(...args),
}

export type Lead = {
  id?: string
  full_name: string
  phone: string
  email: string
  company_name?: string
  service: string
  requirements?: string
  created_at?: string
}

export type PortfolioItem = {
  id: string
  title: string
  category: string
  image_prompt: string
  description?: string
  created_at?: string
}

export type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  cover_prompt: string
  published_at: string
  author: string
}

export type Testimonial = {
  id: string
  name: string
  company: string
  rating: number
  review: string
  avatar_prompt: string
}
