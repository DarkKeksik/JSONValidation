import type { FC } from 'react'
import { useCallback } from 'react'

import { TButtons } from '@features/controlsValidatorJSON'
import { getLastJSONLocalStorage } from '@entities/validatorJSON'
import { ButtonCustom } from '@shared/ui'

const ButtonRecall: FC<TButtons.TButtonRecallJSON> = ({
  setRecallJSON,
  setIsNewClickLastJSON,
  ...props
}) => {
  const cashedGetLastJSON = useCallback(getLastJSONLocalStorage, [])

  const onclick = () => {
    setRecallJSON(cashedGetLastJSON())
    setIsNewClickLastJSON(true)
  }

  return (
    <ButtonCustom onClick={onclick} disabled={!cashedGetLastJSON()} {...props}>
      Recall JSON
    </ButtonCustom>
  )
}

export default ButtonRecall
