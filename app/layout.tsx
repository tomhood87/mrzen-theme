import type { Metadata } from "next"
import type { ReactNode } from "react"
import "./globals.scss"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "MRZen Theme",
  description: "Next.js version of the MRZen theme layer"
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="mz-layout-default mrzen-default-layout">
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
