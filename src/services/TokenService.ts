import jwt_decode from "jwt-decode"
import { UserType } from "../stores/blog.types"

export class TokenService {
  public getUserInstanceFromLocalAccessToken = (): UserType | undefined => {
    const decodedToken = this.getDecodedLocalAccessToken()

    if (!decodedToken) return undefined

    return { email: decodedToken.email, nickname: decodedToken.nickname }
  }

  public getLocalAccessToken = () => {
    return this.getUser().accessToken
  }

  public getLocalRefreshToken = () => {
    return this.getUser().refreshToken
  }

  public updateLocalAccessToken = (token: string) => {
    let user = this.getUser()
    user.accessToken = token

    this.setUser(user)
  }

  public updateLocalRefreshToken = (token: string) => {
    let user = this.getUser()
    user.refreshToken = token

    this.setUser(user)
  }

  public removeUser = () => {
    localStorage.removeItem("user")
  }

  private getDecodedLocalAccessToken = (): UserType | undefined => {
    const token = this.getLocalAccessToken()

    if (!token) return undefined

    return jwt_decode(token.split(" ")[1])
  }

  private getUser = () => {
    return JSON.parse(localStorage.getItem("user") || "{}")
  }

  private setUser = (user: Object) => {
    localStorage.setItem("user", JSON.stringify(user))
  }
}
