import React from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { staticRoutes, routePaths } from "../../../utils/routes.definitions"
import { staticImageDirectories, imageDirectories } from "../../../utils/images.definitions"
import s from "./Article.module.scss"

export const Article = () => {
  const params = useParams()

  return (
    <div className={s.container}>
      <Link to={routePaths.get(staticRoutes.ROOT)!}>
        <img className={s["nav-arrow-left"]} src={imageDirectories.get(staticImageDirectories.ARROW_LEFT)} alt={staticImageDirectories.ARROW_LEFT}/>
      </Link>
      <div className={s.header}>{params.articleId}</div>
      <div className={s.description}>Description description description description description description description description description description description description description description description description description  fds fsfdsa </div>
      <div className={s.content}>Content content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf content content ae daf ca agaggag content gag contentffdsa asdfdsaf</div>
    </div>
  )
}
