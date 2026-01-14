import { describe, it } from "node:test"
import assert from "node:assert"
import React from "react"
import { renderToString } from "react-dom/server"
import { createTheme } from "../src/createTheme"

describe("createTheme", () => {
  const theme = createTheme()

  it("returns the required contract shape", () => {
    assert.strictEqual(typeof theme.PageLayout, "function")
    assert.strictEqual(typeof theme.Providers, "function")
    assert.strictEqual(typeof theme.getPageLayout, "function")
    assert.strictEqual(typeof theme.getBlockLayout, "function")
  })

  it("renders the PageLayout without crashing", () => {
    const html = renderToString(
      React.createElement(
        theme.PageLayout,
        { title: "Hello", subtitle: "world" },
        React.createElement("div", null, "child content")
      )
    )

    assert.match(html, /child content/)
    assert.match(html, /Hello/)
  })

  it("renders Providers and children", () => {
    const html = renderToString(
      React.createElement(
        theme.Providers,
        null,
        React.createElement("div", { id: "probe" }, "wrapped text")
      )
    )

    assert.match(html, /wrapped text/)
    assert.match(html, /probe/)
  })

  it("resolves page layouts from pageType", () => {
    const landing = theme.getPageLayout?.("landing")
    const article = theme.getPageLayout?.("ARTICLE")
    const fallback = theme.getPageLayout?.("unknown-type")

    assert.ok(landing)
    assert.ok(article)
    assert.ok(fallback)
    assert.notStrictEqual(landing, fallback)
  })

  it("resolves block layouts with a default fallback", () => {
    const heroBlock = theme.getBlockLayout?.("hero")
    const defaultBlock = theme.getBlockLayout?.("unknown")

    assert.ok(heroBlock)
    assert.ok(defaultBlock)

    const heroHtml = renderToString(
      React.createElement(heroBlock!, null, React.createElement("p", null, "hero"))
    )
    const fallbackHtml = renderToString(
      React.createElement(defaultBlock!, null, React.createElement("p", null, "fallback"))
    )

    assert.match(heroHtml, /hero/)
    assert.match(fallbackHtml, /fallback/)
  })
})
