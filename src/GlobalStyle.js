import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    font-size: 16px;
  }
  body {
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    margin: 0;
  }
`;
