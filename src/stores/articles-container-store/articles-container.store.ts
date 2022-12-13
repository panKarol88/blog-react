import { makeAutoObservable } from "mobx"
import { staticApiRoutes } from "../../utils/routes.definitions"
import { ApiService } from "../../services/ApiService"
import { ArticlePayload } from "../blog.types"

export class ArticlesContainerStore {
  public showArticlesWorthReading: boolean | undefined = true
  public setShowArticlesWorthReading = async (
    showArticlesWorthReading: boolean | undefined
  ) => {
    this.showArticlesWorthReading = showArticlesWorthReading
    await this.reloadArticlesToShow()
  }

  public showArticlesPublished: boolean | undefined = true
  public setShowArticlesPublished = (
    showArticlesPublished: boolean | undefined
  ) => {
    this.showArticlesPublished = showArticlesPublished
  }

  public articlesToShow: ArticlePayload[] = []
  public setArticlesToShow = (articles: ArticlePayload[]) => {
    this.articlesToShow = articles
  }

  constructor(private apiService: ApiService) {
    this.reloadArticlesToShow()

    makeAutoObservable(this)
  }

  public reloadArticlesToShow = async () => {
    await this.apiService
      .get(staticApiRoutes.ARTICLES_INDEX, {
        params: {
          worth_reading: this.showArticlesWorthReading,
          published: this.showArticlesPublished,
        },
      })
      .then((result) => {
        this.setArticlesToShow(result.data.records)
      })
  }
}
