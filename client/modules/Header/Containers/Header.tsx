import React from "react"
import { useRouter } from 'next/router'
import { useActions, useTypedSelector } from '../../../store/hooks'
import { HeaderComponent } from '../Components'

export const Header: React.FC = () => {
  const router = useRouter()
  const { changeTheme, linearProgress, openDrawer } = useActions()
  const { theme: { theme }, user: { userData } } = useTypedSelector(state => state)

  const handleClick = (path: string) => {
    linearProgress(true)
    router.push(path)
  }

  const handleClickUser = () => {
    if (userData) {
      openDrawer()
    } else {
      router.push('/login')
      linearProgress(true)
    }
  }

  const changeSetTheme = () => {
    changeTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return <HeaderComponent
    theme={theme}
    pathname={router.pathname}
    handleClick={handleClick}
    handleClickUser={handleClickUser}
    changeSetTheme={changeSetTheme}
    userData={userData}
  />
}