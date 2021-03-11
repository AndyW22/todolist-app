import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    font-family: Roboto;
    font-size: 20px;
    margin: 0;
    --amplify-primary-color: rgba(0, 131, 253, 1);
    --amplify-primary-shade: rgba(0, 131, 253, 1);
    --amplify-primary-tint: rgba(0, 131, 253, 1);
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  * {
    box-sizing: border-box;
    }
`;
