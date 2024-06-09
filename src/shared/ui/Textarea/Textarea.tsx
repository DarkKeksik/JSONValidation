import type { FC } from 'react'
import { Input } from 'antd'

import { ConfigProvider } from 'antd'
import * as Styled from './Textarea.styled'

type TTextarea = {
  fontSize?: number
}

const Textarea: FC<TTextarea> = ({ fontSize = 25, ...props }) => {
  return (
    <ConfigProvider
      theme={{
        token: { fontSize },
      }}
    >
      <Styled.Textarea as={Input.TextArea} {...props} />
    </ConfigProvider>
  )
}

export default Textarea
