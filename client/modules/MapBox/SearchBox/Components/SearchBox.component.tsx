import React from 'react'
import { Autocomplete, InputAdornment, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'

type Props = {
  value: any
  setValue: any
  status: string
  data: any[]
  handleSelect: (val: string) => void
}

const SearchBoxComponent: React.FC<Props> = ({
  value,
  setValue,
  status,
  data,
  handleSelect,
}) => {
  return (
    <Autocomplete
      sx={{ width: '33.3333%' }}
      disablePortal
      id="combo-box-demo"
      onChange={(event, newValue) => {
        handleSelect(newValue)
      }}
      options={
        status === 'OK' ? data.map(({ description }) => description) : []
      }
      fullWidth
      disableClearable
      freeSolo
      renderInput={params => (
        <TextField
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
        />
      )}
    />
  )
}

export default SearchBoxComponent