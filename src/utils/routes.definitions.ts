// ---------------------- REACT -------------------------------
export const staticRoutes = {
  ROOT: "root",
  ARTICLES_INDEX: "articlesIndex",
  ARTICLES_SHOW: "articlesShow",
  USER_SIGN_IN: "userSignIn"
} as const

const staticRoutesList = [
  staticRoutes.ROOT,
  staticRoutes.ARTICLES_INDEX,
  staticRoutes.ARTICLES_SHOW,
  staticRoutes.USER_SIGN_IN,
] as const

export type Routes = typeof staticRoutesList[number]

export const routePaths = new Map<Routes, string>([
  [staticRoutes.ROOT, "/"],
  [staticRoutes.ARTICLES_INDEX, "/"],
  [staticRoutes.ARTICLES_SHOW, "articles/:articleId"],
  [staticRoutes.USER_SIGN_IN, "sign_in"],
])
// ---------------------- REACT -------------------------------

// ----------------------- API --------------------------------
export const staticApiRoutes = {
  ARTICLES_INDEX: "articlesIndex",
  ARTICLES_SHOW: "articlesShow",
  USER_SIGN_IN: "userSignIn",
  USER_SIGN_OUT: "userSignOut"
} as const

const staticApiRoutesList = [
  staticApiRoutes.ARTICLES_INDEX,
  staticApiRoutes.ARTICLES_SHOW,
  staticApiRoutes.USER_SIGN_IN,
  staticApiRoutes.USER_SIGN_OUT
] as const

export type ApiRoutes = typeof staticApiRoutesList[number]

export const apiDomain = process.env.REACT_APP_BACKEND_DOMAIN_URL
export const apiUrl = process.env.REACT_APP_API_URL

export const apiPaths = new Map<ApiRoutes, string>([
  [staticApiRoutes.ARTICLES_INDEX, `${apiDomain}${apiUrl}/blog/articles`],
  [staticApiRoutes.ARTICLES_SHOW, `${apiDomain}${apiUrl}/blog/articles/:articleId`],
  [staticApiRoutes.USER_SIGN_IN, `${apiDomain}${apiUrl}/users/sign_in`],
  [staticApiRoutes.USER_SIGN_OUT, `${apiDomain}${apiUrl}/users/sign_out`],
])
// ----------------------- API --------------------------------
