import { makeAutoObservable } from "mobx"
import { staticApiRoutes, apiPaths } from "../../utils/routes.definitions"
import { UserType } from "../blog.types"
import { ApiService } from "../../services/ApiService"
import { TokenService } from "../../services/TokenService"

export class UserSessionStore {
  public currentUser: UserType | undefined

  constructor(
    private apiService: ApiService,
    private tokenService: TokenService
  ) {
    this.currentUser = this.getCurrentUser()

    makeAutoObservable(this)
  }

  public signIn = async (email: string, password: string) => {
    try {
      await this.apiService
        .post(staticApiRoutes.USER_SIGN_IN, {
          email: email,
          password: password,
        })
        .then((result) => {
          this.tokenService.updateLocalAccessToken(result.headers.authorization)
          this.tokenService.updateLocalRefreshToken(result.data.refresh_token)
          this.currentUser = this.getCurrentUser()
        })
    } catch (e) {
      console.log(e)
    }
  }

  public signOut = async () => {
    try {
      await this.apiService
        .delete(staticApiRoutes.USER_SIGN_OUT)
        .then((_result) => {
          this.tokenService.removeUser()
          this.currentUser = undefined
        })
    } catch (e) {
      console.log(e)
    }
  }

  private getCurrentUser = (): UserType | undefined => {
    return this.tokenService.getUserInstanceFromLocalAccessToken()
  }
}
