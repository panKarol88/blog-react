import React, { useEffect, useState } from "react"
import { observer } from "mobx-react"
import { useBlogStore } from "../../../stores/store-context"
import { ArticleBox } from "../article-box/ArticleBox"
import { ArticlePayload } from "../../../stores/blog.types"
import s from "./ArticlesContainer.module.scss"

export const ArticlesContainer = observer(() => {
  const { apiService } = useBlogStore()
  const [articles, setArticles] = useState<ArticlePayload[]>([])

  useEffect(() => {
    // apiService.apiInstance.get(`https://karol-blog-rails.herokuapp.com/articles`)
    apiService.apiInstance.get(`http://localhost:3001/articles`)
      .then(res => {
        setArticles(res.data)
      })
  }, [])

  console.log(articles)

  return (
    <div className={s.container}>
      { articles.map((item, _index)=>{
        return <ArticleBox articleId={ item['id'] }
                           articleType={ item['article_type'] }
                           bgImage={ item['bg_image_url'] }
                           label={ item['label'] }
                           description={ item['description'] } />
      }) }
    </div>
  )
})
