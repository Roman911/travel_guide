import React from "react"
import { useRouter } from 'next/router'
import { useActions, useTypedSelector } from '../../../store/hooks'
import { DrawerComponent } from "../Components"

export const Drawer: React.FC = () => {
  const router = useRouter()
  const { drawer: { drawerIsOpen }, user: { userData } } = useTypedSelector(state => state)
  const { closeDrawer, linearProgress, removeData } = useActions()

  const toggleDrawer = () => () => {
    closeDrawer()
  }

  const logout = () => {
    localStorage.removeItem('userData')
    removeData()
  }

  const redirectTo = (path: string) => {
    linearProgress(true)
    router.push(path)
  }

  const handleClickToSettings = () => {
    linearProgress(true)
    router.push('/profile/settings')
  }

  return <DrawerComponent
    drawerIsOpen={drawerIsOpen}
    toggleDrawer={toggleDrawer}
    userData={userData}
    logout={logout}
    redirectTo={redirectTo}
    handleClickToSettings={handleClickToSettings}
  />
}