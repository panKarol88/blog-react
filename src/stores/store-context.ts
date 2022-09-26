import React, { useContext } from "react"
import { BlogStore } from "./blog.store"

type RootStoreContextType = {
  blogStore: BlogStore
}

export const RootStoreContext = React.createContext<RootStoreContextType>({
  blogStore: {} as BlogStore,
})

export const useBlogStore = () => {
  const rootStore = useContext(RootStoreContext)

  return rootStore.blogStore
}
