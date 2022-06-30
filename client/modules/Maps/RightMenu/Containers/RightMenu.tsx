import React from "react"
import { RightMenuComponent } from '../Components'

type Props = {
  children: React.ReactNode
}

export const RightMenu: React.FC<Props> = ({ children }) => {
  return <RightMenuComponent >
    { children }
  </RightMenuComponent>
}