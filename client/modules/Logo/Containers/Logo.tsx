import React from 'react'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { LogoComponent } from '../Components'
import {
  changeLinearProgress,
  selectLayout,
} from '../../../store/reducers/layoutSlice'

const Logo: React.FC = () => {
  const router = useRouter()
  const { theme } = useAppSelector(selectLayout)
  const dispatch = useAppDispatch()

  const handleClick = () => {
    if (router.pathname === '/') {
      void 0
    } else {
      dispatch(changeLinearProgress(true))
      router.push('/')
    }
  }

  return <LogoComponent theme={theme} handleClick={handleClick} />
}

export default Logo
