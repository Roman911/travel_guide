import React from "react"
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useActions, useTypedSelector } from '../../store/hooks'

type MyImageProps = {
  theme: 'dark' | 'light'
  onClick?: () => void
}

const MyImage: React.FC<MyImageProps> = ({ theme, onClick }) => {
  return <Image
    src="/images/logo.png"
    layout="fixed"
    width={90}
    height={40}
    alt="Travel guide logo"
    style={{ filter: theme === 'dark' ? 'invert(1)' : 'invert(0)', cursor: 'pointer' }}
    onClick={onClick}
  />
}

export const Logo: React.FC = () => {
  const router = useRouter()
  const { theme } = useTypedSelector(state => state.theme)
  const { linearProgress } = useActions()

  const handleClick = () => {
    linearProgress(true)
    router.push('/')
  }

  if (router.pathname === '/') {
    return <MyImage theme={theme} />
  }

  return <MyImage theme={theme} onClick={handleClick} />
}