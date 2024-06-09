import type { FC } from 'react'

import { TButtons } from '@features/controlsValidatorJSON'
import { ButtonCustom } from '@shared/ui'

const ButtonRemember: FC<TButtons.TButtonRememberJSON> = ({ dataJSON = {}, ...props }) => {
  const { JSONData, isValidJSONData } = dataJSON

  if (!JSONData || !isValidJSONData) {
    return (
      <ButtonCustom disabled {...props}>
        Need valid JSON
      </ButtonCustom>
    )
  }

  const onClick = () => {
    localStorage.setItem('JSONValid_last', JSONData)
  }

  return (
    <ButtonCustom onClick={onClick} {...props}>
      Remember JSON
    </ButtonCustom>
  )
}

export default ButtonRemember
