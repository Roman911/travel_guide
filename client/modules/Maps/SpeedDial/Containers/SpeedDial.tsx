import React from "react"
import { useRouter } from 'next/router'
import { useActions, useTypedSelector } from '../../../../store/hooks'
import { SpeedDialComponent } from '../Components'

export const SpeedDial: React.FC = () => {
  const router = useRouter()
  const { userData } = useTypedSelector(state => state.user)
  const { linearProgress } = useActions()

  const handleClick = (path: string) => {
    linearProgress(true)
    router.push(path)
  }

  return userData && <SpeedDialComponent handleClick={handleClick} />
}