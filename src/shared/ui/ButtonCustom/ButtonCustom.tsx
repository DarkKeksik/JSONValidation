import type { FC, PropsWithChildren } from 'react'
import { Button, ButtonProps } from 'antd'

import * as Styled from './ButtonCustom.styled'

type TButtonCustom = ButtonProps & PropsWithChildren

const ButtonCustom: FC<TButtonCustom> = ({ children, ...props }) => {
  return (
    <Styled.ButtonCustom as={Button} {...props}>
      {children}
    </Styled.ButtonCustom>
  )
}

export default ButtonCustom
