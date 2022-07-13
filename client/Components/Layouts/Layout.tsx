import React from "react"
import { useNotifier } from '../../hooks/useNotifier'
import { useTypedSelector } from '../../store/hooks/useTypedSelector'
import { useActions } from '../../store/hooks/useActions'
import { useAuth } from '../../hooks/useAuth'
import { LinearProgress } from '../../modules'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  useAuth()
  useNotifier()
  const { linearProgress: progress } = useTypedSelector(state => state.progress)
  const { linearProgress } = useActions()

  React.useEffect(() => {
    linearProgress(false)
  }, [])

  console.log('render: Components, Layout')

  return <>
    {progress && <LinearProgress />}
    {children}
  </>
}

export default React.memo(Layout)