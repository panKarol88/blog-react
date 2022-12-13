import React, { useState } from "react"
import { observer } from "mobx-react"
import { useBlogStore } from "../../../stores/store-context"
import s from "./SignIn.module.scss"

export const SignIn = observer(() => {
  const { userSessionStore } = useBlogStore()
  const currentUser = userSessionStore.currentUser
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    await userSessionStore.signIn(email, password)
  }

  return (
    <div className={s.container}>
      {currentUser ? (
        // TODO
        "You are already logged in."
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" />
        </form>
      )}
    </div>
  )
})
