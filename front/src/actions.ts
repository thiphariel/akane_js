'use server'

import { Resend } from 'resend'
import config from './config'

export async function apiCall(endpoint: string, params?: string) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  }

  const request = await fetch(
    `${config.api}/api/${endpoint}${params ?? ''}`,
    options,
  )
  return await request.json()
}

export async function email(data: FormData) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const name = data.get('name')
  const email = data.get('email')
  const message = data.get('message')

  return await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: "Contact from Akane's commission's form",
    html: `${name} just send : <p>${message}</p>`,
  })
}
