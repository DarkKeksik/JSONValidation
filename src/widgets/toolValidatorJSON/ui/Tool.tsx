import { useState, type FC } from 'react'

import { ButtonRememberJSON } from '@features/rememberJSON'
import { TextareaValidatorJSON } from '@entities/textareaValidatorJSON'
import { TitlePage } from '@shared/ui'

import * as Styled from './Tool.styled'

const ToolValidatorJSON: FC = () => {
  const [dataJSON, setDataJSON] = useState(['', false])

  console.log('dataJSON', dataJSON)

  return (
    <Styled.ToolValidatorJSON>
      <TitlePage title="JSON validation" />
      <TextareaValidatorJSON sideEffects={setDataJSON} />
      <ButtonRememberJSON dataJSON={dataJSON} size="large" />
    </Styled.ToolValidatorJSON>
  )
}

export default ToolValidatorJSON
