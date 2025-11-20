import { NextResponse } from "next/server"

const SITE_SETTINGS = {
  name: "MRZen Site",
  logo: {
    src: ""
  }
}

export async function GET() {
  return NextResponse.json(SITE_SETTINGS)
}
