import React from 'react'
import type { IUserData } from '../../../types'
import { SettingsComponent } from '../Components'

interface IProps {
  userData: null | IUserData
}

export const SettingsContainer: React.FC<IProps> = ({ userData }) => {
  return <SettingsComponent userData={userData} />
}
