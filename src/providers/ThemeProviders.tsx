import { createContext, useMemo, type ReactNode, type ReactElement, type CSSProperties } from "react"

export type ThemeTokens = {
  background: string
  surface: string
  surfaceStrong: string
  text: string
  muted: string
  accent: string
  border: string
  radius: string
  fontStack: string
}

const DEFAULT_TOKENS: ThemeTokens = {
  background: "#0c1024",
  surface: "#0f162f",
  surfaceStrong: "#141d3d",
  text: "#e6ecff",
  muted: "#9fb0d7",
  accent: "#6ef0c1",
  border: "rgba(255,255,255,0.08)",
  radius: "14px",
  fontStack: "'DM Sans', 'Segoe UI', system-ui, -apple-system, sans-serif"
}

export const ThemeTokensContext = createContext<ThemeTokens>(DEFAULT_TOKENS)

export function ThemeProviders({ children }: { children: ReactNode }): ReactElement {
  const tokens = DEFAULT_TOKENS

  const cssVariables = useMemo(() => {
    return {
      ["--mrzen-bg" as string]: tokens.background,
      ["--mrzen-surface" as string]: tokens.surface,
      ["--mrzen-surface-strong" as string]: tokens.surfaceStrong,
      ["--mrzen-text" as string]: tokens.text,
      ["--mrzen-muted" as string]: tokens.muted,
      ["--mrzen-accent" as string]: tokens.accent,
      ["--mrzen-border" as string]: tokens.border,
      ["--mrzen-radius" as string]: tokens.radius,
      ["--mrzen-font" as string]: tokens.fontStack
    } as CSSProperties
  }, [tokens])

  const wrapperStyle: CSSProperties = {
    minHeight: "100vh",
    backgroundColor: "var(--mrzen-bg)",
    color: "var(--mrzen-text)",
    fontFamily: "var(--mrzen-font)",
    lineHeight: 1.6,
    letterSpacing: "0.01em",
    margin: 0
  }

  return (
    <ThemeTokensContext.Provider value={tokens}>
      <div style={{ ...cssVariables, ...wrapperStyle }}>{children}</div>
    </ThemeTokensContext.Provider>
  )
}
