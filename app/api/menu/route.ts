import { NextResponse, type NextRequest } from "next/server"

type MenuItem = { title: string; slug: string }

const MENUS: Record<string, MenuItem[]> = {
  "main-menu": [
    { title: "Home", slug: "/" },
    { title: "Blog", slug: "/blog" },
    { title: "About", slug: "/about" }
  ]
}

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug") || "main-menu"
  const menu = MENUS[slug] || MENUS["main-menu"] || []
  return NextResponse.json({ items: menu })
}
