import type { FC } from 'react'
import { Input } from 'antd'

import { ConfigProvider } from 'antd'
import * as Styled from './Textarea.styled'

const Textarea: FC = (props) => {
  return (
    <ConfigProvider
      theme={{
        token: { fontSize: 25 },
      }}
    >
      <Styled.Textarea as={Input.TextArea} {...props} />
    </ConfigProvider>
  )
}

export default Textarea
