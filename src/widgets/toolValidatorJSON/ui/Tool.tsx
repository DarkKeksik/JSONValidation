import type { FC } from 'react'
import { useState } from 'react'

import { ButtonRememberJSON, ButtonRecallJSON } from '@features/controlsValidatorJSON'
import { TextareaValidatorJSON } from '@entities/validatorJSON'
import { TitlePage } from '@shared/ui'
import { TDataJSON } from '@shared/types'

import * as Styled from './Tool.styled'

/** @TODO must refactoring */
const ToolValidatorJSON: FC = () => {
  const [dataJSON, setDataJSON] = useState<TDataJSON>()
  const [isNewClickButtonRemember, setIsNewClickButtonRemember] = useState(false)

  const [lastJSON, setLastJSON] = useState('')
  const [isNewClickLastJSON, setIsNewClickLastJSON] = useState(false)

  return (
    <Styled.ToolValidatorJSON>
      <TitlePage title="JSON validation" />
      <TextareaValidatorJSON
        isNewClickLastJSON={isNewClickLastJSON}
        setIsNewClickLastJSON={setIsNewClickLastJSON}
        lastJSON={lastJSON}
        setDataJSON={setDataJSON}
      />

      <Styled.ButtonPanel>
        <ButtonRememberJSON
          setIsNewClickButtonRemember={setIsNewClickButtonRemember}
          dataJSON={dataJSON}
          size="large"
        />
        <ButtonRecallJSON
          isNewClickButtonRemember={isNewClickButtonRemember}
          setIsNewClickLastJSON={setIsNewClickLastJSON}
          setRecallJSON={setLastJSON}
          type="dashed"
          size="large"
        />
      </Styled.ButtonPanel>
    </Styled.ToolValidatorJSON>
  )
}

export default ToolValidatorJSON
