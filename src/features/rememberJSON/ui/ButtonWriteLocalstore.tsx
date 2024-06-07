import type { FC } from 'react'
import { Button, ButtonProps } from 'antd'

type TButtonRememberJSON = ButtonProps & {
  dataJSON: Array<string>
}

/** @TODO need refactoring dataJSON from arr to obj */
const ButtonRememberJSON: FC<TButtonRememberJSON> = ({ dataJSON, ...props }) => {
  if (!dataJSON[0] || !dataJSON[1]) {
    return (
      <Button {...props} disabled>
        Need valid JSON
      </Button>
    )
  }

  // localStorage.setItem('rememberedJSON', !dataJSON[0])

  return <Button {...props}>Remember JSON</Button>
}

export default ButtonRememberJSON
