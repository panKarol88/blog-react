import React from "react"
import { observer } from "mobx-react"
import { Link } from "react-router-dom"
import { useBlogStore } from "../../../stores/store-context"
import { routePaths, staticRoutes } from "../../../utils/routes.definitions"
import s from "./TopNavBar.module.scss"

export const TopNavBar = observer(() => {
  const { userSessionStore } = useBlogStore()
  const currentUser = userSessionStore.currentUser

  return (
    <div className={s.container}>
      <div className={s['left-navbar-section']}>
        <Link
          className={s['home-button']}
          to={ routePaths.get(staticRoutes.ROOT)! }
        > Home
        </Link>
      </div>
      { currentUser ?
        <div className={s['right-navbar-section']}>
          <div
            className={s['button__login-button__right']}
            onClick={() => userSessionStore.signOut()}
          >
            Sign out
          </div>
        </div>
        :
        <div className={s['right-navbar-section']}>
          <Link
            className={s['button__login-button__right']}
            to={ routePaths.get(staticRoutes.USER_SIGN_IN)! }
          >
            Sign in
          </Link>
        </div>
      }
    </div>
  )
})
