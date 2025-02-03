import React from "react"

import "./layout.scss"

interface LayoutProps {
  children?: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return <div>{children}</div>
}
