import type { FC } from 'react'

import { getLastJSONLocalStorage } from '@entities/validatorJSON'

/** @TODO deprecated */
const HOCRecallJSON = (Components: FC) => {
  const localStorageLastJSON = getLastJSONLocalStorage()

  const WithLastJson = (props) => <Components lastSavedJSON={localStorageLastJSON} {...props} />
  return WithLastJson
}

export default HOCRecallJSON
