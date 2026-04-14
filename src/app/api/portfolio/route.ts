import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const category = searchParams.get('category')

    let query = supabaseAdmin
      .from('portfolio_items')
      .select('*')
      .order('created_at', { ascending: false })

    if (category && category !== 'All') {
      query = query.eq('category', category)
    }

    const { data, error } = await query

    if (error) throw error
    return NextResponse.json({ items: data })
  } catch (err) {
    console.error('Portfolio API error:', err)
    return NextResponse.json({ error: 'Failed to fetch portfolio.' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { title, category, image_prompt, description } = body

    if (!title || !category || !image_prompt) {
      return NextResponse.json(
        { error: 'Title, category and image_prompt are required.' },
        { status: 400 }
      )
    }

    const { data, error } = await supabaseAdmin
      .from('portfolio_items')
      .insert({ title, category, image_prompt, description })
      .select()
      .single()

    if (error) throw error
    return NextResponse.json({ item: data }, { status: 201 })
  } catch (err) {
    console.error('Portfolio insert error:', err)
    return NextResponse.json({ error: 'Failed to create portfolio item.' }, { status: 500 })
  }
}
