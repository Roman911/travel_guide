import React from "react"
import { Autocomplete, InputAdornment, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'

type Props = {
  value: any
  setValue: any
  status: string
  data: any[]
  handleSelect: (val: string) => void
}

export const PlacesComponent: React.FC<Props> = ({ value, setValue, status, data, handleSelect }) => {
  return <Autocomplete
    disablePortal
    id="combo-box-demo"
    onChange={(event, newValue) => { handleSelect(newValue) }}
    options={status === 'OK' ? data.map(({ description }) => description) : []}
    fullWidth
    disableClearable
    freeSolo
    renderInput={(params) => <TextField
      value={value}
      onChange={e => setValue(e.target.value)}
      {...params}
      label="Пошук"
      InputProps={{
        ...params.InputProps,
        type: 'search',
        endAdornment: (
          <InputAdornment position="end">
            <Search />
          </InputAdornment>
        ),
      }}
    />}
  />
}