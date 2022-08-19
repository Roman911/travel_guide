import React from 'react'
import { useSnackbar } from 'notistack'
import { useAppDispatch, useAppSelector } from '../hooks'
import { removeNotification, selectLayout } from '../store/reducers/layoutSlice'

let displayed: string[] = []

export const useNotifier = () => {
  const { enqueueSnackbar } = useSnackbar()
  const { notifications } = useAppSelector(selectLayout)
  const dispatch = useAppDispatch()

  const storeDisplayed = (id: string) => (displayed = [...displayed, id])
  const removeDisplayed = (id: string) =>
    (displayed = [...displayed.filter(key => id !== key)])

  React.useEffect(() => {
    notifications.forEach(({ key, message }) => {
      if (displayed.includes(key)) return

      enqueueSnackbar(message)
      dispatch(removeNotification(key))
      removeDisplayed(key)
      storeDisplayed(key)
    })
  }, [notifications, dispatch])
}
