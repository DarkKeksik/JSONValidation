import styled from 'styled-components'

export const ButtonCustom = styled.button`
  && {
    color: ${({ theme }) => theme.text && theme.text};
    background-color: ${({ theme }) => theme.backgroundExtra1 && theme.backgroundExtra1};

    &&:hover {
      background-color: ${({ theme }) => theme.backgroundExtra2 && theme.backgroundExtra2};
      color: inherit;
    }

    &&:active {
      color: ${({ theme }) => theme.text && theme.text};
      background: ${({ theme }) => theme.backgroundExtra2 && theme.backgroundExtra2};
    }

    &&[disabled] {
      background: ${({ theme }) => theme.colorError && theme.colorError};
    }
  }
`
