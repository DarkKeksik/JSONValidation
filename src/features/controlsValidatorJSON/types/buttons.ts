import { ButtonProps } from 'antd'

type TButton = ButtonProps & {
  dataJSON: Array<string>
}

export type TButtonRememberJSON = TButton
export type TButtonRecallJSON = TButton & {
  getRecallJSON: () => void
  setIsNewClickLastJSON: (isNewClickLastJSON: boolean) => void
}
