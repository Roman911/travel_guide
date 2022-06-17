import type { IUserProfile } from '../../../typesScript/user'
import React from "react"
import { useTypedSelector } from '../../../store/hooks'
import { UserProfileComponent } from '../Components'

interface IProps {
  user: IUserProfile
}

export const UserProfile: React.FC<IProps> = ({ user }) => {
  const { userData } = useTypedSelector(state => state.user)
  const isHolder = userData?._id === user._id

  return <UserProfileComponent isHolder={isHolder} user={user} />
}