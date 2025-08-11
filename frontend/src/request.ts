import { reactive } from 'vue'

export default async function request(method: 'get' | 'post', path: string, params: any) {
  try {
    const url = new URL(`http://localhost:3000${path}`)
    const options: RequestInit = {
      method: method.toUpperCase(),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    }

    if (method === 'get') {
      Object.entries(params || {}).forEach(([key, value]) => {
        url.searchParams.append(key, String(value))
      })
    } else {
      options.body = JSON.stringify(params)
    }

    const response = await fetch(url.toString(), options)
    const data = await response.json()
    return reactive(data)
  } catch (error) {
    console.log(error)
  }
}
