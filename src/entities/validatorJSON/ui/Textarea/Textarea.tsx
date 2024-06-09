import type { FC, ChangeEvent, Dispatch, SetStateAction } from 'react'
import { useEffect, useState } from 'react'

import { validationJSON } from '@entities/validatorJSON'
import { Textarea } from '@shared/ui'
import { TDataJSON } from '@shared/types'
import { useDebounce } from '@shared/hooks'

import * as Styled from './Textarea.styled'

type TTextareaValidatorJSON = {
  setDataJSON?: Dispatch<SetStateAction<TDataJSON>>
  setIsNewClickLastJSON: (isNewClick: boolean) => void
  isNewClickLastJSON: boolean
  lastJSON?: string
}

const TextareaValidatorJSON: FC<TTextareaValidatorJSON> = ({
  setDataJSON,
  setIsNewClickLastJSON,
  isNewClickLastJSON,
  lastJSON,
}) => {
  const [JSONValue, setJSONValue] = useState<string>()
  const [isValidJSON, setIsValidJSON] = useState<boolean>()
  const valueDebounce = useDebounce({ value: JSONValue })

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = e

    setJSONValue(value)
  }

  useEffect(() => {
    const statusValidJSON = validationJSON(valueDebounce as string)
    setIsValidJSON(statusValidJSON)

    if (isNewClickLastJSON) {
      setJSONValue(lastJSON)
      setIsNewClickLastJSON(false)
    }

    if (setDataJSON) {
      setDataJSON({ JSONValue: valueDebounce as string, isValidJSONValue: statusValidJSON })
    }
  }, [valueDebounce, setDataJSON, isNewClickLastJSON, setIsNewClickLastJSON, lastJSON])

  return (
    <Styled.TextareaValidatorJSON
      as={Textarea}
      $isError={!isValidJSON}
      placeholder={`{ 'iMSoooWrong: 'fixMe" }`}
      onChange={onChange}
      value={JSONValue}
    />
  )
}

export default TextareaValidatorJSON
