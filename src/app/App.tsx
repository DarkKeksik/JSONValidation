import { ThemeProvider } from 'styled-components'

import GlobalStyle from './global.styles'
import { themes } from './Providers/themes/themes'

// import { CardsJSONSaved } from '@widgets/cardsJSONSaved'
import { ToolValidatorJSON } from '@widgets/toolValidatorJSON'

const App = () => {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={themes.green}>
        <ToolValidatorJSON />
        {/* <CardsJSONSaved /> */}
      </ThemeProvider>
    </>
  )
}

export default App
