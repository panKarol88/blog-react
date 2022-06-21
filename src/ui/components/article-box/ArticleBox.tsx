import React from "react"
import { Link } from "react-router-dom"
import { staticRoutes, routePaths} from "../../../utils/routes.definitions"
import s from "./ArticleBox.module.scss"

type ArticleProps = {
  articleId: string
  label: string
  description: string
}

export const ArticleBox = (props: ArticleProps) => {
  const { articleId, label, description } = props
  const articleRoute = routePaths.get(staticRoutes.ARTICLES_SHOW)!.replace(":articleId", articleId)

  return (
    <Link to={articleRoute} key={articleId}>
      <div className={s.container}>
        <div className={s.label}>
          { label }
        </div>
        <div className={s.description}>
          { description }
        </div>
      </div>
    </Link>
  )
}
