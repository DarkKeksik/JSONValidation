import { ThemeProvider } from 'styled-components'

import GlobalStyle from './global.styles'
import { themes } from './Providers/themes/themes'

import { ToolValidatorJSON } from '@widgets/toolValidatorJSON'

const App = () => {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={themes.green}>
        <ToolValidatorJSON />
      </ThemeProvider>
    </>
  )
}

export default App
