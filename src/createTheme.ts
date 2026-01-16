import HelloWorld from "@/components/HelloWorld"
import type { Theme, LayoutComponent, BlockLayoutComponent } from "./types/theme"
import { ThemeProviders } from "./providers/ThemeProviders"
import { ArticleLayout, DefaultLayout, LandingLayout, MZLayout, PageLayout } from "./layouts/PageLayouts"
import {
  DefaultBlockLayout,
  GridBlockLayout,
  HeroBlockLayout,
  SectionBlockLayout
} from "./layouts/BlockLayouts"

function normalizeKey(value?: string | null): string {
  return (value || "").toLowerCase().trim()
}

const pageLayouts: Record<string, LayoutComponent> = {
  landing: LandingLayout,
  article: ArticleLayout,
  mz: MZLayout,
  default: DefaultLayout
}

const blockLayouts: Record<string, BlockLayoutComponent> = {
  hero: HeroBlockLayout,
  section: SectionBlockLayout,
  grid: GridBlockLayout
}

export function createTheme(): Theme {
  return {
    PageLayout,
    Providers: ThemeProviders,
    getPageLayout: pageType => {
      const key = normalizeKey(pageType)
      return pageLayouts[key] || PageLayout
    },
    getBlockLayout: blockType => {
      const key = normalizeKey(blockType)
      return blockLayouts[key] || DefaultBlockLayout
    }
  }
}

// Export the sample HelloWorld component so consumers (and the framework web component
// loader) can resolve it from the theme entrypoint.
export { HelloWorld }
