import React from "react"
import { useActions, useTypedSelector } from '../../../store/hooks'
import { DrawerComponent } from "../Components"

export const Drawer: React.FC = () => {
  const { drawer: { drawerIsOpen }, user: { userData } } = useTypedSelector(state => state)
  const { closeDrawer, removeData } = useActions()

  const toggleDrawer = () => () => {
    closeDrawer()
  }

  const logout = () => {
    localStorage.removeItem('userData')
    removeData()
  }

  return <DrawerComponent drawerIsOpen={drawerIsOpen} toggleDrawer={toggleDrawer} userData={userData} logout={logout} />
}