import { NextResponse } from "next/server"

const MENU = {
  home: { title: "Home", slug: "/" },
  blog: { title: "Blog", slug: "/blog" },
  about: { title: "About", slug: "/about" }
}

export async function GET() {
  return NextResponse.json(MENU)
}
