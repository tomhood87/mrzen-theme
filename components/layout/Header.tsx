import Link from "next/link"
import { getMenu, getSiteSettings } from "@/lib/api"

export default async function Header() {
  const [menuItems, settings] = await Promise.all([getMenu("main-menu"), getSiteSettings()])
  const siteName = settings?.name || "Site Name"

  return (
    <header id="header-layout-one" className="mz-header">
      <div className="mz-header__logo">
        <Link href="/">
          {settings?.logo?.src ? (
            <img
              src={settings.logo.src}
              alt={siteName}
              style={{ height: "40px", width: "auto" }}
            />
          ) : (
            <span style={{ fontWeight: 700, fontSize: "1.125rem" }}>{siteName}</span>
          )}
        </Link>
      </div>
      <nav className="d-none d-lg-block mb-3">
        <ul className="mz-list mz-list--menu">
          {menuItems.map(item => {
            const href = item.slug ?? item.path
            if (!href) return null

            return (
              <li key={href} className="mz-link">
                <Link href={href}>{item.title}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
