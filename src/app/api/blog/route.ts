import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const slug = searchParams.get('slug')
    const limit = parseInt(searchParams.get('limit') || '10')

    if (slug) {
      const { data, error } = await supabaseAdmin
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .single()

      if (error) throw error
      return NextResponse.json({ post: data })
    }

    const { data, error } = await supabaseAdmin
      .from('blog_posts')
      .select('id, title, slug, excerpt, cover_prompt, published_at, author')
      .order('published_at', { ascending: false })
      .limit(limit)

    if (error) throw error
    return NextResponse.json({ posts: data })
  } catch (err) {
    console.error('Blog API error:', err)
    return NextResponse.json({ error: 'Failed to fetch blog posts.' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { title, slug, excerpt, content, cover_prompt, author } = body

    if (!title || !slug || !excerpt || !content || !cover_prompt || !author) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    const { data, error } = await supabaseAdmin
      .from('blog_posts')
      .insert({
        title,
        slug,
        excerpt,
        content,
        cover_prompt,
        author,
        published_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) throw error
    return NextResponse.json({ post: data }, { status: 201 })
  } catch (err) {
    console.error('Blog insert error:', err)
    return NextResponse.json({ error: 'Failed to create blog post.' }, { status: 500 })
  }
}
