import type { FC } from 'react'

import { TButtons } from '@features/controlsValidatorJSON'
import { getLastJSONLocalStorage } from '@entities/validatorJSON'
import { ButtonCustom } from '@shared/ui'

const ButtonRecall: FC<TButtons.TButtonRecallJSON> = ({
  getRecallJSON,
  setIsNewClickLastJSON,
  ...props
}) => {
  const onclick = () => {
    getRecallJSON(getLastJSONLocalStorage())
    setIsNewClickLastJSON(true)
  }

  return (
    <ButtonCustom onClick={onclick} disabled={!getLastJSONLocalStorage()} {...props}>
      Recall JSON
    </ButtonCustom>
  )
}

export default ButtonRecall
