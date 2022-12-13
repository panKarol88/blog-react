import axios, { Axios } from "axios"
import { apiPaths, ApiRoutes } from "../utils/routes.definitions"
import { TokenService } from "./TokenService"

type RequestConfig = {
  headers: {
    Authorization: string
  }
}

export class ApiService {
  public apiInstance: Axios = axios
  private tokenService: TokenService = new TokenService()

  public get = async (apiUri: ApiRoutes, config?: Object) => {
    return await this.apiInstance.get(
      this.requestUrl(apiUri),
      this.requestConfig(config)
    )
  }

  public post = async (apiUri: ApiRoutes, data?: Object, config?: Object) => {
    return await this.apiInstance.post(
      this.requestUrl(apiUri),
      data,
      this.requestConfig(config)
    )
  }

  public delete = async (apiUri: ApiRoutes) => {
    return await this.apiInstance.delete(
      this.requestUrl(apiUri),
      this.requestConfig()
    )
  }

  private requestConfig = (config: Object = {}): RequestConfig => {
    return {
      headers: { Authorization: this.tokenService.getLocalAccessToken() },
      ...config,
    }
  }

  private requestUrl = (apiUri: ApiRoutes): string => {
    const apiUrl = apiPaths.get(apiUri)

    if (!apiUrl) throw new Error(`Bad URI: '${apiUri}'`)

    return apiUrl
  }
}
