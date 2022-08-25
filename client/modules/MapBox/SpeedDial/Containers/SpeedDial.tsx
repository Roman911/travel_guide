import React from 'react'
import { useRouter } from 'next/router'
import { useActions, useTypedSelector } from '../../../../hooks'
import { SpeedDialComponent } from '../Components'

const SpeedDial: React.FC = () => {
  const router = useRouter()
  const { userData } = useTypedSelector(state => state.user)
  const { addedNotification, setLeftBox } = useActions()

  const handleClick = (
    set: 'createDirection' | 'createLocation' | 'locationsList'
  ) => {
    addedNotification({
      message: 'Введіть локацію в пошука або виберіть на мапі',
      key: `${new Date().getTime()}+${Math.random()}`,
    })
    setLeftBox(set)
    if (set === 'createLocation') {
      router.push('?location=createLocation')
    }
  }

  return userData && <SpeedDialComponent handleClick={handleClick} />
}

export default SpeedDial
