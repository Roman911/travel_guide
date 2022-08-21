import React from 'react'
import { useTypedSelector } from '../../../../hooks'
import { TopBarComponent } from '../Components'

interface IProps {
  children: React.ReactNode
  widthLeftBox: string
}

const TopBar: React.FC<IProps> = ({ children, widthLeftBox }) => {
  const { theme } = useTypedSelector(state => state.layout)

  return (
    <TopBarComponent theme={theme} widthLeftBox={widthLeftBox}>
      {children}
    </TopBarComponent>
  )
}

export default TopBar
