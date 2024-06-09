import type { Dispatch, SetStateAction } from 'react'
import { ButtonProps } from 'antd'

import { TDataJSON } from '@shared/types'

type TButton = ButtonProps & {
  dataJSON: TDataJSON
}

export type TButtonRememberJSON = TButton & {
  setIsNewClickButtonRemember?: Dispatch<SetStateAction<boolean>>
}
export type TButtonRecallJSON = Omit<TButton, 'dataJSON'> & {
  setRecallJSON: Dispatch<SetStateAction<string>>
  setIsNewClickLastJSON: Dispatch<SetStateAction<boolean>>
  isNewClickButtonRemember?: boolean
}
