import React, { useEffect, useState } from "react"
import { observer } from "mobx-react"
import { useParams } from "react-router-dom"
import { useBlogStore } from "../../../stores/store-context"
import { Link } from "react-router-dom"
import {
  staticRoutes,
  routePaths,
  apiPaths,
  staticApiRoutes,
} from "../../../utils/routes.definitions"
import {
  staticImageDirectories,
  imageDirectories,
} from "../../../utils/images.definitions"
import { ArticlePayload } from "../../../stores/blog.types"
import s from "./Article.module.scss"

export const Article = observer(() => {
  const params = useParams()
  const { apiService } = useBlogStore()
  const [article, setArticle] = useState<ArticlePayload | {}>({})
  const articleApiUrl = apiPaths
    .get(staticApiRoutes.ARTICLES_SHOW)!
    .replace(":articleId", params.articleId as string)

  useEffect(() => {
    apiService.apiInstance.get(articleApiUrl).then((res) => {
      setArticle(res.data)
    })
  }, [])

  return (
    <div className={s.container}>
      <Link to={routePaths.get(staticRoutes.ROOT)!}>
        <img
          className={s["nav-arrow-left"]}
          src={imageDirectories.get(staticImageDirectories.ARROW_LEFT)}
          alt={staticImageDirectories.ARROW_LEFT}
        />
      </Link>
      {/*<div className={s.header}>{ article['label'] }</div>*/}
      <div className={s.description}>
        Description description description description description description
        description description description description description description
        description description description description description fds fsfdsa{" "}
      </div>
      <div className={s.content}>
        Content content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf content content ae daf ca agaggag content gag contentffdsa
        asdfdsaf
      </div>
    </div>
  )
})
