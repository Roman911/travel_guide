import React from "react"
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { useTypedSelector } from '../../store/hooks'
import { red } from '@mui/material/colors'

type Props = {
  children?: React.ReactNode
}

export const Theme: React.FC<Props> = ({ children }) => {
  const { theme: myTheme } = useTypedSelector(state => state.theme)

  const theme = createTheme({
    palette: {
      mode: myTheme,
      secondary: {
        main: '#cb2c3b'
      }
    }
  })

  return <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
}