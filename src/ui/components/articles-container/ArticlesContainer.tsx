import React from "react"
import { ArticleBox } from "../article-box/ArticleBox"
import s from "./ArticlesContainer.module.scss"

export const ArticlesContainer = () => {
    return (
        <div className={s.container}>
            <ArticleBox articleId={"aa"} label={'one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one'} description={'description'}/>
            <ArticleBox articleId={"bb"} label={'two'} description={'description description description description'}/>
            <ArticleBox articleId={"cc"} label={'three one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one on one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one one onee'} description={'descriptiondescription description description descriptiondescription description description descriptiondescription description description descriptiondescription description description descriptiondescription description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description'}/>
            <ArticleBox articleId={"dd"} label={'four'} description={'description'}/>
        </div>
    )
}
