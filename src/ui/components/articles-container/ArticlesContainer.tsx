import React from "react"
import { observer } from "mobx-react"
import { ArticleBox } from "../article-box/ArticleBox"
import s from "./ArticlesContainer.module.scss"

export const ArticlesContainer = observer(() => {

  return (
    <div className={s.container}>
      <ArticleBox articleId={"aa"} articleType={'personal'} label={'one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one'} description={'description'} />
      <ArticleBox articleId={"bb"} articleType={'public'} label={'two'} description={'description description description description'} />
      <ArticleBox articleId={"cc"} articleType={'personal'} label={'three one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one on one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one onee'} description={'descriptiondescription description description descriptiondescription description description descriptiondescription description description descriptiondescription description description descriptiondescription description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description'} />
      <ArticleBox articleId={"dd"} articleType={'public'} label={'four'} description={'description'} />
    </div>
  )
})
