import type { FC, ChangeEvent } from 'react'
import { useEffect, useState } from 'react'

import { validationJSON } from '@entities/textareaValidatorJSON'
import { Textarea } from '@shared/ui'
import { useDebounce } from '@shared/hooks'

import * as Styled from './Textarea.styled'

type TTextareaValidatorJSON = {
  sideEffects?: ([currentlyJSON, isValid]: Array<
    string | number | undefined | boolean | null
  >) => void
}

const TextareaValidatorJSON: FC<TTextareaValidatorJSON> = ({ sideEffects }) => {
  const [valJSON, setValJSON] = useState<string | null>()
  const [isValidJSON, setIsValidJSON] = useState<boolean>()
  const valueDebounce = useDebounce({ value: valJSON })

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value: valJSON },
    } = e

    if (valJSON.length === 0) {
      setValJSON(null)
      return
    }

    setValJSON(valJSON)
  }

  useEffect(() => {
    const statusValidJSON = validationJSON(valueDebounce as string)
    setIsValidJSON(statusValidJSON)
    sideEffects && sideEffects([valueDebounce, statusValidJSON])
  }, [valueDebounce, sideEffects])

  return (
    <Styled.TextareaValidatorJSON
      isError={!isValidJSON}
      as={Textarea}
      inputFontSize={60}
      placeholder={`{ 'iMSoooWrong: 'fixMe" }`}
      onChange={onChange}
    />
  )
}

export default TextareaValidatorJSON
