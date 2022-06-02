import React from 'react'
import { useTypedSelector } from '../store/hooks/useTypedSelector'
import { useActions } from '../store/hooks/useActions'
import { useSnackbar } from 'notistack'

let displayed: string[] = []

export const useNotifier = () => {
  const { enqueueSnackbar } = useSnackbar()
  const { notifications } = useTypedSelector(state => state.snackbar)
  const { removeSnackbar } = useActions()

  const storeDisplayed = (id: string) => displayed = [...displayed, id]
  const removeDisplayed = (id: string) => displayed = [...displayed.filter(key => id !== key)]

  React.useEffect(() => {
    notifications.forEach(({ key, message }) => {
      if (displayed.includes(key)) return

      enqueueSnackbar(message)
      removeSnackbar(key)
      removeDisplayed(key)
      storeDisplayed(key)

    })
  }, [notifications, removeSnackbar])
}