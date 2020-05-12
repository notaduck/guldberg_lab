import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    font-family: 'Source Code Pro'

  }

  body {
    background: var(--color-background);
    color: var(--color-text);
    margin: 0;
  }

  h3 {
        color: var(--color-text);
  }

  a {
    color: var(--color-secondary);
  }

`;

export default GlobalStyles;
