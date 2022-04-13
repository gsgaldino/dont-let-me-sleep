import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --spacing-small: 8px;
    --spacing-medium: 16px;
    --spacing-big: 24px;

    --max-width: 1200px;
  }
`;

export default GlobalStyle;
