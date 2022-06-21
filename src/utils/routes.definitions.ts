export const staticRoutes = {
  ROOT: "root",
  ARTICLES_INDEX: "articlesIndex",
  ARTICLES_SHOW: "articlesShow",
} as const

const staticRoutesList = [
  staticRoutes.ROOT,
  staticRoutes.ARTICLES_INDEX,
  staticRoutes.ARTICLES_SHOW,
] as const

export type Routes = typeof staticRoutesList[number]

export const routePaths = new Map<Routes, string>([
  [staticRoutes.ROOT, "/"],
  [staticRoutes.ARTICLES_INDEX, "/"],
  [staticRoutes.ARTICLES_SHOW, "articles/:articleId"],
])