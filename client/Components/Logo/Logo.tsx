import React from "react"
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { useTypedSelector } from '../../store/hooks'

type MyImageProps = {
  theme: 'dark' | 'light'
}

const MyImage: React.FC<MyImageProps> = ({ theme }) => {
  return <Image
    src="/logo.png"
    layout="fixed"
    width={90}
    height={40}
    alt="Travel guide logo"
    style={{ filter: theme === 'dark' ? 'invert(1)' : 'invert(0)' }}
  />
}

export const Logo: React.FC = () => {
  const router = useRouter()
  const { theme } = useTypedSelector(state => state.theme)

  if (router.pathname === '/') {
    return <MyImage theme={theme} />
  }

  return <Link href="/">
    <a><MyImage theme={theme} /></a>
  </Link>
}