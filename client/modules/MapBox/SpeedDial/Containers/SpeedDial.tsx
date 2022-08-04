import React from 'react'
import { useActions, useTypedSelector } from '../../../../store/hooks'
import { SpeedDialComponent } from '../Components'

const SpeedDial: React.FC = () => {
  const { userData } = useTypedSelector(state => state.user)
  const { setLeftBox } = useActions()

  const handleClick = (
    set: 'createDirection' | 'createLocation' | 'locationsList'
  ) => {
    setLeftBox(set)
  }

  return userData && <SpeedDialComponent handleClick={handleClick} />
}

export default SpeedDial
