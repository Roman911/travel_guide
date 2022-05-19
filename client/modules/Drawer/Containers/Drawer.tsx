import React from "react"
import { useActions, useTypedSelector } from '../../../store/hooks'
import { DrawerComponent } from "../Components"

export const Drawer: React.FC = () => {
  const { drawer: { drawerIsOpen }, user: { userData } } = useTypedSelector(state => state)
  const { closeDrawer } = useActions()

  const toggleDrawer = () => () => {
    closeDrawer()
  }

  return <DrawerComponent drawerIsOpen={drawerIsOpen} toggleDrawer={toggleDrawer} userData={userData} />
}