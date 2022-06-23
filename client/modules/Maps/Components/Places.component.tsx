import React from "react"
import { Autocomplete, Box, InputLabel, InputAdornment, FormControl, OutlinedInput, Typography, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'

type Props = {
  value: any
  setValue: any
  status: string
  data: any[]
}

export const PlacesComponent: React.FC<Props> = ({ value, setValue, status, data }) => {

  return <Autocomplete
    disablePortal
    id="combo-box-demo"
    
    options={status === 'OK' ? data.map(({ description }) => description) : []}
    fullWidth
    renderInput={(params) => <TextField value={value} onChange={e => setValue(e.target.value)} {...params} label="Пошук" />}
  />
}