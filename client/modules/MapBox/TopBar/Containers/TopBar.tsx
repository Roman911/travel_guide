import React from 'react'
import { useTypedSelector } from '../../../../store/hooks'
import { TopBarComponent } from '../Components'

interface IProps {
  children: React.ReactNode
}

const TopBar: React.FC<IProps> = ({ children }) => {
  const { theme } = useTypedSelector(state => state.theme)

  return <TopBarComponent theme={theme}>{children}</TopBarComponent>
}

export default TopBar
