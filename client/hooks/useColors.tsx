import { useTypedSelector } from '../store/hooks/useTypedSelector'

export const useColors = () => {
  const { theme } = useTypedSelector(state => state.theme)

  const darkGray = theme === 'light' ? '#3d4042' : '#ebeef0'
  const lightGray = theme === 'light' ? '#a0a0a0' : '#d2d2d2'
  const icon = theme === 'light' ? '#949494' : '#fff'
  const red = '#cb2c3b'

  return {
    darkGray,
    lightGray,
    icon,
    red
  }
}