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

  a {
    color: var(--color-secondary);
  }
`;

export default GlobalStyles;
