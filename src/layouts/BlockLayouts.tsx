import type { CSSProperties } from "react"
import type { BlockLayoutProps } from "../types/theme"

const blockBase = {
  borderRadius: "var(--mrzen-radius)",
  border: "1px solid var(--mrzen-border)"
} satisfies CSSProperties

export function DefaultBlockLayout({ children, background }: BlockLayoutProps) {
  return (
    <section
      style={{
        ...blockBase,
        overflow: "hidden",
        background: background || "var(--mrzen-surface)"
      }}
    >
      {children}
    </section>
  )
}

export function HeroBlockLayout({ children }: BlockLayoutProps) {
  return (
    <section
      style={{
        ...blockBase,
        padding: "2rem",
        background: "linear-gradient(135deg, rgba(78,227,195,0.18), rgba(20,29,61,0.9))",
        boxShadow: "0 18px 50px rgba(0,0,0,0.18)"
      }}
    >
      <div style={{ display: "grid", gap: "0.6rem" }}>
        <div style={{ color: "var(--mrzen-muted)", fontWeight: 700, letterSpacing: "0.04em" }}>Hero block</div>
        {children}
      </div>
    </section>
  )
}

export function SectionBlockLayout({ children }: BlockLayoutProps) {
  return (
    <section
      style={{
        ...blockBase,
        padding: "1.5rem",
        background: "var(--mrzen-surface)",
        display: "grid",
        gap: "0.75rem"
      }}
    >
      {children}
    </section>
  )
}

export function GridBlockLayout({ children }: BlockLayoutProps) {
  return (
    <section
      style={{
        ...blockBase,
        padding: "1.5rem",
        background: "var(--mrzen-surface-strong)"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1rem"
        }}
      >
        {children}
      </div>
    </section>
  )
}
