import React from 'react'
import { RegionAutocomplete } from '../Components'

interface IProps {
  width?: string
}

export const Regions: React.FC<IProps> = ({ width }) => {
  return <RegionAutocomplete width={width} />
}
