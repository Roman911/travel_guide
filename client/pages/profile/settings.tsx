import type { NextPage } from 'next'
import { useTypedSelector } from '../../store/hooks/useTypedSelector'
import type { IUserProfile } from '../../typesScript/user'
import { GetServerSideProps } from 'next'
import { initializeApollo } from "../../lib/apolloClient"
import { USER } from '../../apollo/queries/user'
import { MainLayout } from '../../Components'
import { SettingsContainer } from '../../modules'

interface IProps {
  user: string
}

const Settings: NextPage<IProps> = () => {
  const { userData } = useTypedSelector(state => state.user)

  return <MainLayout>
    <SettingsContainer userData={userData} />
  </MainLayout>
}

export default Settings