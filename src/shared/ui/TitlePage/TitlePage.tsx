import type { FC, PropsWithChildren } from 'react'

import * as Styled from './TitlePage.styled'

type TitlePage = PropsWithChildren & {
  title: string
}

const TitlePage: FC<TitlePage> = ({ title, children }) => {
  return <Styled.TitlePage>{title ? title : children}</Styled.TitlePage>
}

export default TitlePage
