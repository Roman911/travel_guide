import React from 'react'
import { MainComponents } from '../Components'

interface IProps {
  handleClick: () => void
}

const Main: React.FC<IProps> = ({ handleClick, setFile }) => {
  return <MainComponents handleClick={handleClick} />
}

export default Main
