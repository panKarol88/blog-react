import { makeAutoObservable } from "mobx"
import { BlogStoreParams } from "./blog.types"
import { ArticlesContainerStore } from "./articles-container-store/articles-container.store"

export const getBlogStoreInstance = async (params: {}) => {
  return new BlogStore({})
}

export class BlogStore {
  public articlesContainerStore: ArticlesContainerStore = new ArticlesContainerStore()

  constructor(params: BlogStoreParams) {
    makeAutoObservable(this)
  }
}
