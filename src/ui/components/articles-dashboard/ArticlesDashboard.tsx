import React from "react"
import { observer } from "mobx-react"
import s from "./ArticlesDashboard.module.scss"
import {useBlogStore} from "../../../stores/store-context";

export const ArticlesDashboard = observer(() => {
  const { articlesContainerStore } = useBlogStore()

  const sleep = (ms: number) => new Promise(
    resolve => setTimeout(resolve, ms)
  )

  const setPersonalArticleBoxesShouldBeAbsolute = async (ms: number) => {
    if (articlesContainerStore.showArticlesWorthReading === undefined) await sleep(ms)
    articlesContainerStore.setPersonalArticleBoxesShouldBeAbsolute(articlesContainerStore.showArticlesWorthReading === undefined)
  }

  const handleWorthReadingSwitch = async () => {
    // await articlesContainerStore.reloadArticlesToShow()
    // await setPersonalArticleBoxesShouldBeAbsolute(450)

    articlesContainerStore.setShowArticlesWorthReading(
      articlesContainerStore.showArticlesWorthReading ? undefined : true
    )
  }

  return (
    <div className={s.container}>
      <div className={s['articles-dashboard']}>
        <div className={s['switch-button-container']}>
          <label className={s['switch-button']}>
            <input
              type="checkbox"
              style={{ display: "none" }}
              onChange={ handleWorthReadingSwitch }
              checked={ !articlesContainerStore.showArticlesWorthReading }
            />
            <div className={s.toggle}>
              <div className={s.btn}></div>
            </div>
          </label>
          <div className={s['switch-button-label']}>
            {/*TODO*/}
            {/* take care of translation here regardless boolean states */}
            { articlesContainerStore.showArticlesWorthReading ? "Warte przeczytania" : "Wszystkie" }
          </div>
        </div>
      </div>
    </div>
  )
})
