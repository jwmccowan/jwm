import * as React from 'react';
import { Button } from './Button';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('atoms | Button', module);

stories.add('Button', () => {
  return (
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
  );
});

stories.add('Button - Disabled', () => {
  return (
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
  );
});
