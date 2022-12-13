import React from "react"
import { TopNavBar } from "../top-nav-bar/TopNavBar"

type MainWorkspaceProps = {
  children?: React.ReactNode
}

export const MainWorkspace = (props: MainWorkspaceProps) => {
  const { children } = props

  return (
    <>
      <TopNavBar />
      { children }
    </>
  )
}
