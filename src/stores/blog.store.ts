import { makeAutoObservable } from "mobx"
import { BlogStoreParams } from "./blog.types"
import { ApiService } from "../services/ApiService"
import { TokenService } from "../services/TokenService"
import { ArticlesContainerStore } from "./articles-container-store/articles-container.store"
import { UserSessionStore } from "./user-session-store/user-session.store"

export const getBlogStoreInstance = async (params: {}) => {
  return new BlogStore({})
}

export class BlogStore {
  public tokenService: TokenService = new TokenService()
  public apiService: ApiService = new ApiService()

  public articlesContainerStore: ArticlesContainerStore =
    new ArticlesContainerStore(this.apiService)
  public userSessionStore: UserSessionStore = new UserSessionStore(
    this.apiService,
    this.tokenService
  )

  constructor(params: BlogStoreParams) {
    makeAutoObservable(this)
  }
}
