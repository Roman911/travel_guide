import React from "react"
import type { IUserData } from '../../../typesScript'
import Redirect from '../../../hooks/useRedirect'
import { SettingsComponent } from '../Components'

interface IProps {
  userData: null | IUserData
}

export const SettingsContainer: React.FC<IProps> = ({ userData }) => {
  if(!userData) return <Redirect href='/' />

  return <SettingsComponent userData={userData} />
}