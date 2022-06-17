import type { IProps } from '../Containers/Post.container'

export interface IPropsComponent extends IProps {
  refm: (node?: Element | null | undefined) => void
  useDate: ({ serverDate, format }: { serverDate: string, format?: string }) => string
  handleClickToUser: (userId: string) => void
  steps: {
    label: string
  }[]
  colors: {
    darkGray: string
    icon: string
  }
  style: {
    position: string
    top: string
  }
}