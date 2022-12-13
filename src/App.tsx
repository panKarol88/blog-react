import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RootStoreContext } from "./stores/store-context"
import { BlogStore, getBlogStoreInstance } from "./stores/blog.store"
import { MainWorkspace } from "./ui/components/main-workspace/MainWorkspace"
import { ArticlesWorkspace } from "./ui/components/articles-workspace/ArticlesWorkspace"
import { SignIn } from "./ui/components/sign-in/SignIn"
import { routePaths, staticRoutes } from "./utils/routes.definitions"
import { Article } from "./ui/components/article/Article"

function App() {
  const [blogStore, setBlogStore] = useState<null | BlogStore>(null)

  useEffect(() => {
    const initializeBlogStore = async () => {
      const blogStore = await getBlogStoreInstance({})
      setBlogStore(blogStore)
    }
    initializeBlogStore()
  }, [])

  return (
    <>
      {blogStore && (
        <RootStoreContext.Provider value={{ blogStore }}>
          <BrowserRouter>
            <Routes>
              <Route
                path={routePaths.get(staticRoutes.ROOT)}
                element={
                  <MainWorkspace>
                    <ArticlesWorkspace />
                  </MainWorkspace>
                }
              />
              <Route
                path={routePaths.get(staticRoutes.ARTICLES_INDEX)}
                element={
                  <MainWorkspace>
                    <ArticlesWorkspace />
                  </MainWorkspace>
                }
              />
              <Route
                path={routePaths.get(staticRoutes.ARTICLES_SHOW)}
                element={
                  <MainWorkspace>
                    <Article />
                  </MainWorkspace>
                }
              />
              <Route
                path={routePaths.get(staticRoutes.USER_SIGN_IN)}
                element={
                  <MainWorkspace>
                    <SignIn />
                  </MainWorkspace>
                }
              />
            </Routes>
          </BrowserRouter>
        </RootStoreContext.Provider>
      )}
    </>
  )
}

export default App
