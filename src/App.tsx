import React, { useEffect, useState } from "react"
import { RootStoreContext } from "./stores/store-context"
import { BlogStore, getBlogStoreInstance } from "./stores/blog.store"
import { ArticlesWorkspace } from "./ui/components/articles-workspace/ArticlesWorkspace"

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
      { blogStore &&
        <RootStoreContext.Provider value={{blogStore}}>
          <ArticlesWorkspace />
        </RootStoreContext.Provider>
      }
    </>
  )
}

export default App
