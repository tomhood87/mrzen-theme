/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useContext, useEffect, useState, type ReactNode, type CSSProperties } from "react"
import { ThemeTokensContext } from "../providers/ThemeProviders"
import type { LayoutProps } from "../types/theme"
// @ts-ignore
import { getMenu, type MenuItem } from "../../lib/api"

type ShellProps = { children: ReactNode; tone?: "default" | "muted" }

const containerStyle = {
  maxWidth: "1600px",
  margin: "0 auto",
  padding: "2.5rem 1.5rem"
} satisfies CSSProperties

const navLinkStyle = {
  color: "var(--mrzen-muted)",
  textDecoration: "none",
  fontSize: "0.95rem"
} satisfies CSSProperties

const badgeStyle = {
  display: "inline-block",
  padding: "0.35rem 0.8rem",
  borderRadius: "999px",
  border: "1px solid var(--mrzen-border)",
  background: "rgba(255,255,255,0.04)",
  color: "var(--mrzen-muted)",
  fontSize: "0.8rem",
  letterSpacing: "0.06em",
  textTransform: "uppercase"
} satisfies CSSProperties

function Shell({ children, tone = "default" }: ShellProps) {
  const tokens = useContext(ThemeTokensContext)

  const headerStyle: CSSProperties = {
    borderBottom: `1px solid ${tokens.border}`,
    background: "#FFF",
    position: "sticky",
    top: 0,
    backdropFilter: "blur(10px)",
    zIndex: 1
  }

  const containerStyle = {
    maxWidth: "100%",
    padding: "0",
    margin: "0"
  }

  return (
    <div>
      <header style={headerStyle}>
        <div style={{ ...containerStyle, padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", gap: "1rem", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "10px",
                background: `linear-gradient(145deg, ${tokens.accent}, #4bd0f7)`,
                boxShadow: "0 10px 30px rgba(78, 227, 195, 0.25)"
              }}
            />
            <div>
              <div style={{ color: "var(--mrzen-text)", fontWeight: 700, letterSpacing: "0.02em" }}>MRZen</div>
              <div style={{ color: "var(--mrzen-muted)", fontSize: "0.85rem" }}>Framework theme</div>
            </div>
          </div>
          <nav style={{ display: "flex", gap: "1rem" }}>
            <a href="#pages" style={navLinkStyle}>
              Pages
            </a>
            <a href="#blocks" style={navLinkStyle}>
              Blocks
            </a>
            <a href="#contact" style={{ ...navLinkStyle, color: "var(--mrzen-text)" }}>
              Contact
            </a>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer
        style={{
          borderTop: `1px solid ${tokens.border}`,
          padding: "1.5rem 1.5rem",
          color: "var(--mrzen-muted)",
          fontSize: "0.9rem"
        }}
      >
        <div style={containerStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <span>Static theme.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export function DefaultLayout({ children, title, subtitle }: LayoutProps) {
  return (
    <Shell>
      {children}
    </Shell>
  )
}

export function LandingLayout({ children, title, subtitle }: LayoutProps) {
  return (
    <Shell tone="muted">
      <section
        style={{
          padding: "3rem 1.5rem 1.5rem",
          background: "linear-gradient(135deg, rgba(78,227,195,0.18), rgba(20,29,61,0.9))",
          borderBottom: "1px solid var(--mrzen-border)"
        }}
      >
        <div style={containerStyle}>
          <div style={badgeStyle}>Landing</div>
          <h1 style={{ margin: "0.6rem 0 0.4rem", fontSize: "2.4rem", lineHeight: 1.25 }}>
            {title || "Launch with confidence"}
          </h1>
          <p style={{ color: "var(--mrzen-muted)", maxWidth: 720, margin: 0 }}>
            {subtitle || "A hero-friendly layout with space for punchy headlines and a clear call-to-action."}
          </p>
          <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.25rem", flexWrap: "wrap" }}>
            <a
              href="#get-started"
              style={{
                padding: "0.75rem 1.4rem",
                background: "var(--mrzen-accent)",
                color: "#041421",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: 700,
                boxShadow: "0 18px 50px rgba(110,240,193,0.35)"
              }}
            >
              Get started
            </a>
            <a
              href="#learn"
              style={{
                padding: "0.75rem 1.4rem",
                border: "1px solid var(--mrzen-border)",
                borderRadius: "999px",
                color: "var(--mrzen-text)",
                textDecoration: "none"
              }}
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
      <section style={{ ...containerStyle, marginTop: "1.5rem" }}>{children}</section>
    </Shell>
  )
}

export function ArticleLayout({ children, title, subtitle }: LayoutProps) {
  return (
    <Shell>
      <section style={{ ...containerStyle, display: "grid", gridTemplateColumns: "1fr 320px", gap: "1.5rem" }}>
        <article
          style={{
            padding: "1.5rem",
            borderRadius: "var(--mrzen-radius)",
            background: "var(--mrzen-surface)",
            border: "1px solid var(--mrzen-border)"
          }}
        >
          {(title || subtitle) && (
            <header style={{ marginBottom: "1.2rem" }}>
              {title && <h1 style={{ margin: "0 0 0.35rem" }}>{title}</h1>}
              {subtitle && (
                <p style={{ margin: 0, color: "var(--mrzen-muted)" }}>
                  {subtitle}
                </p>
              )}
            </header>
          )}
          {children}
        </article>
        <aside
          style={{
            padding: "1.5rem",
            borderRadius: "var(--mrzen-radius)",
            background: "var(--mrzen-surface-strong)",
            border: "1px solid var(--mrzen-border)",
            color: "var(--mrzen-muted)"
          }}
        >
          <div style={{ fontWeight: 700, color: "var(--mrzen-text)", marginBottom: "0.6rem" }}>Article layout</div>
          <p style={{ margin: 0 }}>
            Use this layout for long-form content. The sidebar is a natural slot for a table of contents,
            author info, or related links.
          </p>
        </aside>
      </section>
    </Shell>
  )
}

export function MZLayout({ children, title, subtitle }: LayoutProps) {
  const tokens = useContext(ThemeTokensContext)
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])

  useEffect(() => {
    getMenu("main-menu")
      .then(items => setMenuItems(items))
      .catch(() => setMenuItems([]))
  }, [])

  const headerStyle: CSSProperties = {
    background: tokens.surfaceStrong,
    borderBottom: `1px solid ${tokens.border}`,
    boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
    position: "sticky",
    top: 0,
    zIndex: 20
  }

  const navItemStyle: CSSProperties = {
    color: tokens.muted,
    textDecoration: "none",
    fontSize: "0.95rem",
    padding: "0.5rem 0.75rem",
    borderRadius: "8px"
  }

  return (
    <div style={{ background: tokens.background, minHeight: "100vh" }}>
      <header style={headerStyle}>
        <div
          style={{
            ...containerStyle,
            padding: "1.1rem 1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            justifyContent: "space-between"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: "12px",
                background: `radial-gradient(circle at 30% 30%, ${tokens.accent}, #4bd0f7 70%)`,
                boxShadow: "0 12px 35px rgba(110,240,193,0.35)"
              }}
            />
            <div>
              <div style={{ fontWeight: 800, letterSpacing: "0.04em", fontSize: "1.1rem", color: tokens.text }}>
                MZ
              </div>
              <div style={{ color: tokens.muted, fontSize: "0.85rem" }}>Client experience</div>
            </div>
          </div>
          <nav style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <a href="#solutions" style={navItemStyle}>
              Solutions
            </a>
            <a href="#resources" style={navItemStyle}>
              Resources
            </a>
            <a href="#company" style={navItemStyle}>
              Company
            </a>
            <a
              href="#cta"
              style={{
                ...navItemStyle,
                color: "#FFF",
                background: tokens.accent,
                fontWeight: 700,
                boxShadow: "0 14px 40px rgba(110,240,193,0.35)"
              }}
            >
              Contact
            </a>
          </nav>
          <details style={{ marginLeft: "1rem" }}>
            <summary style={{ cursor: "pointer", color: tokens.muted, fontSize: "0.95rem" }}>Menu data</summary>
            <div
              style={{
                marginTop: "0.6rem",
                padding: "0.75rem",
                borderRadius: "10px",
                background: tokens.surface,
                border: `1px solid ${tokens.border}`,
                minWidth: "220px"
              }}
            >
              {menuItems.length === 0 ? (
                <div style={{ color: tokens.muted, fontSize: "0.9rem" }}>No menu items</div>
              ) : (
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.4rem" }}>
                  {menuItems.map(item => (
                    <li key={`${item.slug}-${item.title}`}>
                      <a href={item.slug} style={{ color: tokens.text, textDecoration: "none" }}>
                        {item.title} <span style={{ color: tokens.muted }}>({item.slug})</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </details>
        </div>
      </header>
      <main style={{ padding: "2.5rem 1.5rem" }}>
        <section
          style={{
            ...containerStyle,
            padding: 0,
            display: "grid",
            gap: "1.5rem"
          }}
        >
          {(title || subtitle) && (
            <div
              style={{
                background: `linear-gradient(120deg, rgba(110,240,193,0.1), ${tokens.surfaceStrong})`,
                border: `1px solid ${tokens.border}`,
                borderRadius: "var(--mrzen-radius)",
                padding: "1.5rem"
              }}
            >
              {title && <h1 style={{ margin: "0 0 0.35rem" }}>{title}</h1>}
              {subtitle && <p style={{ margin: 0, color: tokens.muted }}>{subtitle}</p>}
            </div>
          )}
          <div
            style={{
              padding: "1.5rem",
              borderRadius: "var(--mrzen-radius)",
              background: tokens.surface,
              border: `1px solid ${tokens.border}`,
              boxShadow: "0 18px 50px rgba(0,0,0,0.18)"
            }}
          >
            {children}
          </div>
        </section>
      </main>
    </div>
  )
}

export const PageLayout = DefaultLayout
