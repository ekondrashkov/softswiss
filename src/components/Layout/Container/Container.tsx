import React from "react"

import "./container.scss"

interface LayoutProps {
  children?: React.ReactNode
  className: string
}

export const Container = ({ children, className }: LayoutProps) => {
  return <div className={`container ${className}`}>{children}</div>
}
