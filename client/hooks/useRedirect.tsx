import React from "react"
import { useRouter } from "next/router"
import { useTypedSelector } from "../store/hooks"

function Redirect() {
  //const { href } = useTypedSelector(state => state.getBack)
  const router = useRouter()

  React.useEffect(() => {
    router.push('/').then()
  }, [])

  return null
}

export default Redirect