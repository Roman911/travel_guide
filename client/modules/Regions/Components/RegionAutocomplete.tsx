import React from "react"
import { Autocomplete, TextField } from '@mui/material'
import { regions } from '../config/regions'

export const RegionAutocomplete: React.FC = () => {
  return <Autocomplete
    disablePortal
    id="combo-box-demo"
    options={regions}
    sx={{ marginTop: 2, width: '100%' }}
    renderInput={(params) => <TextField {...params} label="Область" />}
  />
}