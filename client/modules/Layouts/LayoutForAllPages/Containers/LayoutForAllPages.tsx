import React from 'react'
import {
  useAppDispatch,
  useAppSelector,
  useAuth,
  useNotifier,
} from '../../../../hooks'
import { LinearProgress } from '../../../'
import {
  changeLinearProgress,
  selectLayout,
} from '../../../../store/reducers/layoutSlice'

type Props = {
  children: React.ReactNode
}

const LayoutForAllPages: React.FC<Props> = ({ children }) => {
  useAuth()
  useNotifier()
  const { linearProgress } = useAppSelector(selectLayout)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(changeLinearProgress(false))
  }, [])

  return (
    <>
      {linearProgress && <LinearProgress />}
      {children}
    </>
  )
}

export default React.memo(LayoutForAllPages)
