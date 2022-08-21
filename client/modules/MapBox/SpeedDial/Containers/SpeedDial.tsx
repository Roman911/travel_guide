import React from 'react'
import { useActions, useTypedSelector } from '../../../../hooks'
import { SpeedDialComponent } from '../Components'

const SpeedDial: React.FC = () => {
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
  }

  return userData && <SpeedDialComponent handleClick={handleClick} />
}

export default SpeedDial
