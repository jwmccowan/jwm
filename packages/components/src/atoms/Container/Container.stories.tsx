import * as React from 'react';
import { Container } from './Container';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../themes';

const stories = storiesOf('atoms | Container', module);

stories.add('Container', () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <div style={{ width: '100%', height: '100px', backgroundColor: 'red', marginTop: '24px' }} />
        <div style={{ width: '100%', height: '100px', backgroundColor: 'blue', marginTop: '24px' }} />
      </Container>
    </ThemeProvider>
  );
});

stories.add('Container - Fluid', () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container fluid>
        <div style={{ width: '100%', height: '100px', backgroundColor: 'red', marginTop: '24px' }} />
        <div style={{ width: '100%', height: '100px', backgroundColor: 'blue', marginTop: '24px' }} />
      </Container>
    </ThemeProvider>
  );
});
