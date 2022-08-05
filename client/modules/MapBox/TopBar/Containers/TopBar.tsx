import React from 'react'
import { useTypedSelector } from '../../../../store/hooks'
import { TopBarComponent } from '../Components'

interface IProps {
  children: React.ReactNode
  widthLeftBox: string
}

const TopBar: React.FC<IProps> = ({ children, widthLeftBox }) => {
  const { theme } = useTypedSelector(state => state.theme)

  return (
    <TopBarComponent theme={theme} widthLeftBox={widthLeftBox}>
      {children}
    </TopBarComponent>
  )
}

export default TopBar
