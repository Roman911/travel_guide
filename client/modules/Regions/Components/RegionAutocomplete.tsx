import React from 'react'
import { Autocomplete, TextField } from '@mui/material'
import { regions } from '../config/regions'

interface IProps {
  width?: string
}

export const RegionAutocomplete: React.FC<IProps> = ({ width }) => {
  const w = width ? width : '100%'
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={regions}
      sx={{ width: w }}
      renderInput={(params) => <TextField {...params} label="Область" />}
    />
  )
}
