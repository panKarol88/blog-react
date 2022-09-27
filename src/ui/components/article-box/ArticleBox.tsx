import React from "react"
import { observer } from "mobx-react"
import { Link } from "react-router-dom"
import { staticRoutes, routePaths } from "../../../utils/routes.definitions"
import { useBlogStore } from "../../../stores/store-context"
import { ArticleType } from "../../../stores/blog.types"
import cxBinder from "classnames/bind"
import s from "./ArticleBox.module.scss"
const cx = cxBinder.bind(s)

type ArticleProps = {
  articleId: string
  label: string
  description: string
  articleType: ArticleType
  bgImage: string
}

export const ArticleBox = observer((props: ArticleProps) => {
  const { articleId, label, description, articleType, bgImage } = props
  const { articlesContainerStore } = useBlogStore()
  const { articleTypeToShow, personalArticleBoxesShouldBeAbsolute } = articlesContainerStore

  const articleRoute = routePaths.get(staticRoutes.ARTICLES_SHOW)!.replace(":articleId", articleId)
  const shouldBeHidden = !(articleTypeToShow === 'all' || articleTypeToShow === articleType)
  const shouldBeAbsolute = personalArticleBoxesShouldBeAbsolute && articleType !== 'public'

  return (
    <Link
      to={articleRoute}
      key={articleId}
      className={
        cx("article-box", {
          "article-box-none": shouldBeHidden,
          "article-box-absolute": shouldBeAbsolute
        })}
    >
      <div
        className={s.container}
        style={{ backgroundImage: "url(" + bgImage + ")" }}
      >
        <div className={s.label}>
          <span>
            { label }
          </span>
        </div>
        <div className={s.description}>
          { description }
        </div>
      </div>
    </Link>
  )
})
