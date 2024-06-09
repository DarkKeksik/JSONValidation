import type { FC } from 'react'

import { TButtons } from '@features/controlsValidatorJSON'
import { ButtonCustom } from '@shared/ui'

const ButtonRemember: FC<TButtons.TButtonRememberJSON> = ({
  dataJSON,
  setIsNewClickButtonRemember,
  ...props
}) => {
  const { JSONValue, isValidJSONValue } = dataJSON || {}

  if (!JSONValue || !isValidJSONValue) {
    return (
      <ButtonCustom disabled {...props}>
        Need valid JSON
      </ButtonCustom>
    )
  }

  const onClick = () => {
    localStorage.setItem('JSONValid_last', JSONValue)
    setIsNewClickButtonRemember && setIsNewClickButtonRemember(true)
  }

  return (
    <ButtonCustom onClick={onClick} {...props}>
      Remember JSON
    </ButtonCustom>
  )
}

export default ButtonRemember
