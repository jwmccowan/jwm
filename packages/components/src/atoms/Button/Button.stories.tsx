import * as React from 'react';
import { Button } from './Button';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../themes/';

const stories = storiesOf('atoms | Button', module);

stories.add('Button', () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <div>
          <Button contextColor="secondary">Button</Button>
          <Button contextColor="primary">Button</Button>
          <Button contextColor="info">Button</Button>
        </div>
        <div>
          <Button contextColor="danger">Button</Button>
          <Button contextColor="alert">Button</Button>
          <Button contextColor="success">Button</Button>
        </div>
      </div>
    </ThemeProvider>
  );
});

stories.add('Button - Disabled', () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <div>
          <Button disabled contextColor="secondary">
            Button
          </Button>
          <Button disabled contextColor="primary">
            Button
          </Button>
          <Button disabled contextColor="info">
            Button
          </Button>
        </div>
        <div>
          <Button disabled contextColor="danger">
            Button
          </Button>
          <Button disabled contextColor="alert">
            Button
          </Button>
          <Button disabled contextColor="success">
            Button
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
});
