export const callApi = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const response = await fetch(url, options)

  if (!response.ok) {
    throw new Error(`Something went wrong. Status code: ${response.status}`)
  }

  const data: unknown = await response.json()

  return data as T
}


