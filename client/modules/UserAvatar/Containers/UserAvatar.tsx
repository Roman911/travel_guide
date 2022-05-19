import React from 'react'
import { useRouter } from 'next/router'
import { useActions, useTypedSelector } from '../../../store/hooks'
import { UserAvatarComponent } from '../Components'

type Props = {
  size: number
}

export const UserAvatar: React.FC<Props> = ({ size }) => {
  const router = useRouter()
  const { userData } = useTypedSelector(state => state.user)
  const { linearProgress, openDrawer } = useActions()

  const handleClick = () => {
    if (userData) {
      openDrawer()
    } else {
      router.push('/login')
      linearProgress(true)
    }
  }

  return <UserAvatarComponent handleClick={handleClick} userData={userData} size={size} />
}