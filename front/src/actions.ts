'use server'

import config from './config'

export async function apiCall(endpoint: string, params?: string) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  }

  const request = await fetch(
    `${config.api}/api/${endpoint}${params ?? ''}`,
    options
  )
  return await request.json()
}
