import { addDecorator, configure } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import * as React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { defaultTheme } from '../src/themes';

const req = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

const history = createBrowserHistory();

addDecorator(story => (
  <ThemeProvider theme={defaultTheme}>
    <Router history={history}>{story()}</Router>
  </ThemeProvider>
));

configure(req, module);
