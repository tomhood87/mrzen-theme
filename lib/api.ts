export type MenuItem = {
  title: string
  slug: string
}

export type SiteSettings = {
  name?: string
  logo?: {
    src?: string
  }
}

const API_BASE = process.env.NEXT_PUBLIC_THEME_API_BASE?.replace(/\/$/, "") ?? ""

async function fetchFromThemeApi<T>(path: string): Promise<T | null> {
  const url = `${API_BASE}${path}`

  try {
    const res = await fetch(url, { next: { revalidate: 60 } })
    if (!res.ok) {
      console.warn(`Theme API responded with ${res.status} for ${path}`)
      return null
    }

    return (await res.json()) as T
  } catch (error) {
    console.warn(`Theme API request failed for ${path}`, error)
    return null
  }
}

export async function getMenu(): Promise<MenuItem[]> {
  const data = await fetchFromThemeApi<Record<string, MenuItem>>("/api/menu")
  if (!data) return []
  return Object.values(data).filter(item => item.slug !== "/")
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return fetchFromThemeApi<SiteSettings>("/api/site-settings")
}
