import { NextResponse, type NextRequest } from "next/server"

const MENUS = {
  "main-menu": [
    { title: "Home", slug: "/" },
    { title: "Blog", slug: "/blog" },
    { title: "About", slug: "/about" }
  ]
} satisfies Record<string, { title: string; slug: string }[]>

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug") || "main-menu"
  const menu = MENUS[slug] || MENUS["main-menu"] || []
  return NextResponse.json({ items: menu })
}
