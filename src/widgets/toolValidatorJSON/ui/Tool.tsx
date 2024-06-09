import { type FC } from 'react'
import { useState } from 'react'

import { ButtonRememberJSON, ButtonRecallJSON } from '@features/controlsValidatorJSON'
import { TextareaValidatorJSON } from '@entities/validatorJSON'
import { TitlePage } from '@shared/ui'

import * as Styled from './Tool.styled'

/** @TODO must refactoring */
const ToolValidatorJSON: FC = () => {
  const [dataJSON, setDataJSON] = useState()
  const [lastJSON, setLastJSON] = useState()
  const [isNewClickLastJSON, setIsNewClickLastJSON] = useState<boolean>(false)

  return (
    <Styled.ToolValidatorJSON>
      <TitlePage title="JSON validation" />
      <TextareaValidatorJSON
        isNewClickLastJSON={isNewClickLastJSON}
        setIsNewClickLastJSON={setIsNewClickLastJSON}
        lastJSON={lastJSON}
        sideEffects={setDataJSON}
      />

      <Styled.ButtonPanel>
        <ButtonRememberJSON dataJSON={dataJSON} size="large" />
        <ButtonRecallJSON
          setIsNewClickLastJSON={setIsNewClickLastJSON}
          getRecallJSON={setLastJSON}
          type="dashed"
          size="large"
        />
      </Styled.ButtonPanel>
    </Styled.ToolValidatorJSON>
  )
}

export default ToolValidatorJSON
