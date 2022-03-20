import { createGlobalStyle } from 'styled-components/macro';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

`;

export const GlobalButton = styled.button`
  cursor: pointer;
  background-color: #ffffffff;
  border-radius: 5px;
  border: 1px solid #2882d9;
  color: #2882d9;
  padding: 8px 40px;
  :active {
    background-color: deepskyblue;
    color: #ffffffff;
  }
  :disabled {
    opacity: 0.6;
  }
`;
