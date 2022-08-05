import type { IUserProfile } from '../../../types/user'
import React from 'react'
import { useRouter } from 'next/router'
import { useActions, useTypedSelector } from '../../../store/hooks'
import { UserProfileComponent } from '../Components'

interface IProps {
  user: IUserProfile
}

export const UserProfile: React.FC<IProps> = ({ user }) => {
  const router = useRouter()
  const { userData } = useTypedSelector(state => state.user)
  const { linearProgress } = useActions()
  const isHolder = userData?._id === user._id

  const handleClickToSettings = () => {
    linearProgress(true)
    router.push('/profile/settings')
  }

  return (
    <UserProfileComponent
      isHolder={isHolder}
      user={user}
      handleClickToSettings={handleClickToSettings}
    />
  )
}
