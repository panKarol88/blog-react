import React from "react"
import { observer } from "mobx-react"
import { useBlogStore } from "../../../stores/store-context"
import { ArticleTypeLabels } from '../../../stores/blog.types'
import s from "./TopNavBar.module.scss"

export const TopNavBar = observer(() => {
  const { articlesContainerStore } = useBlogStore()

  const shouldDisplayAll = articlesContainerStore.articleTypeToShow === 'all'
  const sleep = (ms: number) => new Promise(
    resolve => setTimeout(resolve, ms)
  );
  const setPersonalArticleBoxesShouldBeAbsolute = async (ms: number) => {
    if (articlesContainerStore.articleTypeToShow === 'public') await sleep(ms)
    articlesContainerStore.setPersonalArticleBoxesShouldBeAbsolute(articlesContainerStore.articleTypeToShow === 'public')
  }
  const onArticleSwitchButtonClick = async () => {
    articlesContainerStore.setArticleTypeToShow(articlesContainerStore.articleTypeToShow === 'public' ? 'all' : 'public')
    await setPersonalArticleBoxesShouldBeAbsolute(450)
  }

  return (
    <div className={s.container}>
      <div className={s['switch-button-container']}
        onClick={onArticleSwitchButtonClick}
      >
        <div className={s['switch-button-label']}>
          { ArticleTypeLabels[articlesContainerStore.articleTypeToShow] }
        </div>
        <label className={s['switch-button']}>
          <input
            type="checkbox"
            style={{ display: "none" }}
            onChange={ onArticleSwitchButtonClick }
            checked={ shouldDisplayAll }
          />
          <div className={s.toggle}>
            <div className={s.btn}></div>
          </div>
        </label>
      </div>
    </div>
  )
})
