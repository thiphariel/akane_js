const config = {
  api: 'http://localhost:1337',
}

export default config

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
