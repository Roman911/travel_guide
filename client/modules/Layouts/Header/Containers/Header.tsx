import React from 'react'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { HeaderComponent } from '../Components'
import {
  changeDraver,
  changeLinearProgress,
  changeTheme,
  selectLayout,
} from '../../../../store/reducers/layoutSlice'
import { selectUser } from '../../../../store/reducers/userSlice'

const Header: React.FC = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { theme } = useAppSelector(selectLayout)
  const { userData } = useAppSelector(selectUser)

  const handleClick = (path: string) => {
    dispatch(changeLinearProgress(true))
    router.push(path)
  }

  const handleClickUser = () => {
    if (userData) {
      console.log('click User')
      dispatch(changeDraver(true))
    } else {
      router.push('/login')
      dispatch(changeLinearProgress(true))
    }
  }

  const changeSetTheme = () => {
    dispatch(changeTheme(theme === 'dark' ? 'light' : 'dark'))
  }

  console.log('render: modules/Header/Containers/Header')

  return (
    <HeaderComponent
      theme={theme}
      pathname={router.pathname}
      handleClick={handleClick}
      handleClickUser={handleClickUser}
      changeSetTheme={changeSetTheme}
      userData={userData}
    />
  )
}

export default React.memo(Header)
