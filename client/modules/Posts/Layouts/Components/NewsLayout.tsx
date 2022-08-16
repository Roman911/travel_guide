import React from 'react'

interface IProps {
  children: React.ReactNode
}

const NewsLayout: React.FC<IProps> = ({ children }) => {
  return <div>{children}</div>
}

export default NewsLayout
