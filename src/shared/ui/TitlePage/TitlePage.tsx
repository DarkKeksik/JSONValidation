import type { FC } from 'react'

import * as Styled from './TitlePage.styled'

type TitlePage = {
  title: string
}

const TitlePage: FC<TitlePage> = ({ title }) => {
  return <Styled.TitlePage>{title}</Styled.TitlePage>
}

export default TitlePage
