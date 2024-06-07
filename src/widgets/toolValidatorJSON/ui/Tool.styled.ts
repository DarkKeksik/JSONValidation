import styled, { css } from 'styled-components'

export const ToolValidatorJSON = styled.section`
  ${({ theme }) =>
    theme &&
    css`
      background-color: ${theme.background};
      color: ${theme.text};
    `}

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 100vh;

  padding: 1rem;
  box-sizing: border-box;
`
