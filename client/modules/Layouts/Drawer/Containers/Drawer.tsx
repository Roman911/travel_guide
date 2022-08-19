import React from 'react'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { DrawerComponent } from '../Components'
import {
  changeDraver,
  changeLinearProgress,
  selectLayout,
} from '../../../../store/reducers/layoutSlice'
import { removeData, selectUser } from '../../../../store/reducers/userSlice'

const Drawer: React.FC = () => {
  const router = useRouter()
  const { drawerIsOpen } = useAppSelector(selectLayout)
  const { userData } = useAppSelector(selectUser)
  const dispatch = useAppDispatch()

  const toggleDrawer = () => {
    dispatch(changeDraver(false))
  }

  const logout = () => {
    localStorage.removeItem('userData')
    dispatch(removeData())
  }

  const handleClick = (path: string) => {
    dispatch(changeLinearProgress(true))
    router.push(path)
  }

  return (
    <DrawerComponent
      drawerIsOpen={drawerIsOpen}
      toggleDrawer={toggleDrawer}
      userData={userData}
      logout={logout}
      handleClick={handleClick}
    />
  )
}

export default Drawer
