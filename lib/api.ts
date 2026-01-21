export type MenuItem = {
  title: string
  slug?: string
  path?: string
}

export type SiteSettings = {
  name?: string
  logo?: {
    src?: string
  }
}

const API_BASE = process.env.NEXT_PUBLIC_THEME_API_BASE?.replace(/\/$/, "") ?? ""

function buildApiUrl(path: string): string {
  // Always return an absolute URL; Node's fetch rejects relative URLs.
  if (API_BASE) return `${API_BASE}${path}`
  const origin = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "http://localhost:3000"
  return new URL(path, origin).toString()
}

async function fetchFromThemeApi<T>(path: string): Promise<T | null> {
  const url = buildApiUrl(path)

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

type ApiMenuResponse =
  | MenuItem[]
  | {
      items?: MenuItem[]
      [key: string]: MenuItem | MenuItem[] | undefined
    }
  | Record<string, MenuItem>

export async function getMenu(menuSlug: string): Promise<MenuItem[]> {
  const data = await fetchFromThemeApi<ApiMenuResponse>(`/api/menu?slug=${encodeURIComponent(menuSlug)}`)
  console.log(data)
  if (!data) return []

  if (Array.isArray(data)) return data

  if (typeof data === "object") {
    const list = Array.isArray((data as { items?: MenuItem[] }).items)
      ? (data as { items?: MenuItem[] }).items
      : Array.isArray((data as Record<string, MenuItem[]>)[menuSlug])
        ? (data as Record<string, MenuItem[]>)[menuSlug]
        : null
    if (list) return list

    return Object.values(data as Record<string, MenuItem>).filter(item => item.slug !== "/")
  }

  return []
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return fetchFromThemeApi<SiteSettings>("/api/site-settings")
}
