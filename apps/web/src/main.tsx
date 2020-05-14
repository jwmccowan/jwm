import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app/App';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { dark } from '@jwm/themes';

const GlobalStyle = createGlobalStyle`
  html, body, #app {
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  body {
    font-family: sans-serif;
    background-color: ${dark.colors.backgroundColor}
  }
`;

const Root: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
