import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  ${({ theme }) => css`
    #root,
    html {
      height: 100%;
      font-family: ${theme.font.family};
    }

    html {
      font-size: 62.5%;
    }

    button,
    input {
      font-family: ${theme.font.family};
    }
  `}
`;
