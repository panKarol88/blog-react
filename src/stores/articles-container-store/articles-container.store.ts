import { makeAutoObservable } from "mobx"
import { ArticleType } from "../blog.types"

export class ArticlesContainerStore {
  public articleTypeToShow: ArticleType = 'public'
  public setArticleTypeToShow = (articleTypeToShow: ArticleType) => {
    this.articleTypeToShow = articleTypeToShow
  }

  public personalArticleBoxesShouldBeAbsolute: boolean = true
  public setPersonalArticleBoxesShouldBeAbsolute = (shouldBeAbsolute: boolean) => {
    this.personalArticleBoxesShouldBeAbsolute = shouldBeAbsolute
  }

  constructor() {
    makeAutoObservable(this)
  }
}
