import React from 'react'
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import { AddLocationAlt, Earbuds, Edit } from '@mui/icons-material'

const actions = [
  {
    icon: <AddLocationAlt />,
    name: 'Створити локацію',
    path: '/create-location',
  },
  {
    icon: <Earbuds sx={{ transform: 'rotate(90deg)' }} />,
    name: 'Створити маршрут',
    path: '/create-direction',
  },
]

type Props = {
  handleClick: (path: string) => void
}

const SpeedDialComponent: React.FC<Props> = ({ handleClick }) => {
  return (
    <SpeedDial
      ariaLabel="SpeedDial openIcon example"
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<Edit />} />}
    >
      {actions.map(action => {
        return (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => handleClick(action.path)}
          />
        )
      })}
    </SpeedDial>
  )
}

export default SpeedDialComponent
