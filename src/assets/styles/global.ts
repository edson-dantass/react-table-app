import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: #FAFCFE;
    margin: 0;
    font-family: 'Rubik', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  .app {
    max-width: 1200px;
  }

  main {
    width: calc(100% - 274px);
    margin-left: auto;
    margin-right: 0;
  }

`;

export const AppContainer = styled.div`
  padding: 0 2rem;
`;
export const HeaderTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;

  color: #1a2a40;
`;
