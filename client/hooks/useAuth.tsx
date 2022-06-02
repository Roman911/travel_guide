import React from 'react'
import { useActions } from '../store/hooks/useActions'
import { useTypedSelector } from "../store/hooks/useTypedSelector"

const storageName = 'userData'

export const useAuth = () => {
  const { userData } = useTypedSelector(state => state.user)
  const { setData } = useActions()
  React.useEffect(() => {
    if (!userData) {
      const data = JSON.parse(localStorage.getItem(storageName) as string)
      if (data) setData(data)
    }
  }, [userData])
}