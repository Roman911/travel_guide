import React from 'react'
import { CreateLocationComponent } from '../Components'

interface IProps {
  handleClick: () => void
}

const CreateLocation: React.FC<IProps> = ({ handleClick }) => {
  return <CreateLocationComponent handleClick={handleClick} />
}

export default CreateLocation
