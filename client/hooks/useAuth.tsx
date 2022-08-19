import React from 'react'
import { useAppDispatch, useAppSelector } from './'
import { addedData, selectUser } from '../store/reducers/userSlice'

const storageName = 'userData'

export const useAuth = () => {
  const { userData } = useAppSelector(selectUser)
  const dispatch = useAppDispatch()
  React.useEffect(() => {
    if (!userData) {
      const data = JSON.parse(localStorage.getItem(storageName) as string)
      if (data) dispatch(addedData(data))
    }
  }, [userData])
}
