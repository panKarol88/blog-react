import React from "react"
import { observer } from "mobx-react"
import { useBlogStore } from "../../../stores/store-context"
import { ArticleBox } from "../article-box/ArticleBox"
import s from "./ArticlesContainer.module.scss"

export const ArticlesContainer = observer(() => {
  const { articlesContainerStore } = useBlogStore()

  return (
    <div className={s.container}>
      { articlesContainerStore.articlesToShow.map((item, _index)=>{
        return <ArticleBox key={ item['id'] }
                           articleId={ item['id'] }
                           bgImage={ item['bg_image_url'] }
                           label={ item['label'] }
                           description={ item['description'] } />
      }) }
    </div>
  )
})
