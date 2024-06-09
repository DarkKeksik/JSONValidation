import styled, { css } from 'styled-components'

type TTextareaValidatorJSON = {
  $isError?: boolean
}

export const TextareaValidatorJSON = styled.textarea<TTextareaValidatorJSON>`
  && {
    padding: 1rem 1.5rem;
    max-width: 64rem;
    height: 60vh;
    color: ${({ theme }) => theme.text && theme.text};
    font-weight: 700;

    &::placeholder {
      color: ${({ theme }) => theme.text && theme.text};
    }
    &:hover {
      background: ${({ theme }) => theme.backgroundExtra2 && theme.backgroundExtra2};
    }
    &:focus {
      background: ${({ theme }) => theme.backgroundExtra2 && theme.backgroundExtra2};
    }

    ${({ $isError = false }) =>
      $isError &&
      css`
        border: 1px solid #ff7070;
        box-shadow: 5px 2px 0px #ff7070;
      `}
  }

  background: ${({ theme }) => theme.backgroundExtra1 && theme.backgroundExtra1};
`
