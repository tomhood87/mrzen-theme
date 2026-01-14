import type { ReactNode, ComponentType } from "react"

export type LayoutProps = {
  children?: ReactNode
  pageType?: string | null
  title?: string
  subtitle?: string
}

export type BlockLayoutProps = {
  children?: ReactNode
  blockType?: string | null
  background?: string
  padded?: boolean
}

export type LayoutComponent = ComponentType<LayoutProps>
export type BlockLayoutComponent = ComponentType<BlockLayoutProps>

export type Theme = {
  PageLayout: LayoutComponent
  Providers: ComponentType<{ children: ReactNode }>
  getPageLayout?: (pageType?: string | null) => LayoutComponent
  getBlockLayout?: (blockType?: string | null) => BlockLayoutComponent
}
