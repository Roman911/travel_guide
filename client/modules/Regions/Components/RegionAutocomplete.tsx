import React from 'react'
import { Autocomplete, TextField } from '@mui/material'
import { regions } from '../config/regions'

interface IRegionOption {
  label: string
  center: { lat: number; lng: number }
}

interface IProps {
  width?: string
  setOption: (newValue: IRegionOption | null) => void
}

export const RegionAutocomplete: React.FC<IProps> = ({ setOption, width }) => {
  const w = width ? width : '100%'
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={regions}
      sx={{ width: w }}
      onChange={(e: any, newValue: IRegionOption | null) => setOption(newValue)}
      renderInput={params => <TextField {...params} label="Область" />}
    />
  )
}
