import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { InputAdornment, TextField } from '@mui/material'

interface IProps {
  type: string
  label: string
  multiline: boolean
  rows: number
  size?: 'small'
  inputProps?: string
}

const MyController: React.FC<IProps> = ({
  type,
  label,
  multiline,
  rows,
  size,
  inputProps,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <Controller
      name={type}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          size={size}
          multiline={multiline}
          rows={rows}
          label={label}
          variant="outlined"
          error={!!errors[type]}
          InputProps={
            inputProps && {
              endAdornment: (
                <InputAdornment position="start">{inputProps}</InputAdornment>
              ),
            }
          }
        />
      )}
    />
  )
}

export default MyController
