import React from "react"
import { BottomNavigationComponent } from "../Components/BottomNavigationComponent"

export const BottomNavigation: React.FC = () => {
  const [isOpen, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(prev => !prev)
  }


  return <BottomNavigationComponent isOpen={isOpen} handleClick={handleClick} />
}