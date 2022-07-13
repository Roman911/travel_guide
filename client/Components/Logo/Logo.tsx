import React, { useCallback } from "react"
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useActions, useTypedSelector } from '../../store/hooks'

type MyImageProps = {
  theme: 'dark' | 'light'
  onClick?: () => void
}

const MyImage: React.FC<MyImageProps> = ({ theme, onClick }) => {
  return <Image
    src="/logo.png"
    layout="fixed"
    width={90}
    height={40}
    alt="Travel guide logo"
    style={{ filter: theme === 'dark' ? 'invert(1)' : 'invert(0)', cursor: 'pointer' }}
    onClick={onClick}
  />
}

const Logo: React.FC = () => {
  const callback = (id: any, phase: any, actualTime: any, baseTime: any, startTime: any, commitTime: any) => {
  console.log(`${id}'s ${phase} phase:`);
  console.log(`Actual time: ${actualTime}`);
  console.log(`Base time: ${baseTime}`);
  console.log(`Start time: ${startTime}`);
  console.log(`Commit time: ${commitTime}`);
  }
  const router = useRouter()
  const { theme } = useTypedSelector(state => state.theme)
  const { linearProgress } = useActions()

  const handleClick = () => {
    linearProgress(true)
    router.push('/')
  }

  console.log('render: Components, Logo')

  if (router.pathname === '/') {
    return <MyImage theme={theme} />
  }

  return <React.Profiler id="Logo" onRender={callback}>
    <MyImage theme={theme} onClick={handleClick} />
  </React.Profiler>
}

export default React.memo(Logo)