import React from "react"
import { Box, Button, ButtonGroup, Typography } from '@mui/material'
import { Regions } from '../../'

type Props = {
  children: React.ReactNode
}

export const RightMenuComponent: React.FC<Props> = ({ children }) => {
  return <Box padding={3}>
    { children }
    <Regions />
    <Typography marginTop={2} variant="body1">
      Сортувати
    </Typography>
    <ButtonGroup size="small" variant="text" sx={{marginTop: 2}} color='success' aria-label="text button group">
      <Button>+</Button>
      <Button>Castle</Button>
      <Button>-</Button>
    </ButtonGroup>
    <ButtonGroup size="small" variant="text" sx={{marginTop: 2}} color='success' aria-label="text button group">
      <Button>+</Button>
      <Button>Castle</Button>
      <Button>-</Button>
    </ButtonGroup>
    <ButtonGroup size="small" variant="text" sx={{marginTop: 2}} color='success' aria-label="text button group">
      <Button>+</Button>
      <Button>Castle</Button>
      <Button>-</Button>
    </ButtonGroup>
    <ButtonGroup size="small" variant="text" sx={{marginTop: 2}} color='success' aria-label="text button group">
      <Button>+</Button>
      <Button>Castle</Button>
      <Button>-</Button>
    </ButtonGroup>
  </Box>
}