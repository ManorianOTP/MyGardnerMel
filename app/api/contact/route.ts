import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactFormSchema } from '@/lib/validations/contact'
import { ZodError } from 'zod'

// Lazy initialization to avoid errors during build time
let resend: Resend | null = null

function getResend() {
  if (!resend) {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      throw new Error('RESEND_API_KEY is not configured')
    }
    resend = new Resend(apiKey)
  }
  return resend
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const validatedData = contactFormSchema.parse(body)

    // Simple honeypot check (add hidden field in form)
    if (body.website) {
      return NextResponse.json(
        { success: true }, // Return success to fool bots
        { status: 200 }
      )
    }

    // Send email
    const { data, error } = await getResend().emails.send({
      from: process.env.EMAIL_FROM || 'noreply@mygardenermel.com',
      to: process.env.EMAIL_TO || 'mygardenermel@gmail.com',
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        ${validatedData.phone ? `<p><strong>Phone:</strong> ${validatedData.phone}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
      `,
    })

    if (error) {
      console.error('Email send error:', error)
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)

    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.issues },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
}
