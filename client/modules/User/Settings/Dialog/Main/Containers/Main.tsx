import React from 'react'
import { useTypedSelector } from '../../../../../../hooks'
import { MainComponents } from '../Components'

interface IProps {
  setFile: (arg: File | string) => void
}

const Main: React.FC<IProps> = ({ setFile }) => {
  const { userData } = useTypedSelector(state => state.user)

  return <MainComponents setFile={setFile} avatars={userData?.avatars} />
}

export default Main
