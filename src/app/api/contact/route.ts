import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { full_name, phone, email, company_name, service, requirements } = body

    // Validate required fields
    if (!full_name || !phone || !email || !service) {
      return NextResponse.json(
        { error: 'Full name, phone, email and service are required.' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    const { error } = await supabaseAdmin.from('leads').insert({
      full_name: full_name.trim(),
      phone: phone.trim(),
      email: email.trim().toLowerCase(),
      company_name: company_name?.trim() || null,
      service,
      requirements: requirements?.trim() || null,
    })

    if (error) throw error

    return NextResponse.json({ success: true, message: 'Enquiry received!' }, { status: 201 })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json(
      { error: 'Failed to submit enquiry. Please try again.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100)

    if (error) throw error
    return NextResponse.json({ leads: data })
  } catch (err) {
    console.error('Leads fetch error:', err)
    return NextResponse.json({ error: 'Failed to fetch leads.' }, { status: 500 })
  }
}
