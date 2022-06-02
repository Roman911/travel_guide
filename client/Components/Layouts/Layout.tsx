import React from "react"
import { useNotifier } from '../../hooks/useNotifier'
import { useTypedSelector } from '../../store/hooks/useTypedSelector'
import { useActions } from '../../store/hooks/useActions'
import { LinearProgress } from '../../modules'

type Props = {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  useNotifier()
  const { linearProgress: progress } = useTypedSelector(state => state.progress)
  const { linearProgress } = useActions()

  React.useEffect(() => {
    linearProgress(false)
  }, [])

  return <>
    {progress && <LinearProgress />}
    {children}
  </>
}