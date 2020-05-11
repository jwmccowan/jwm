import * as React from 'react';
import { Container } from './Container';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('atoms | Container', module);

stories.add('Container', () => {
  return (
    <Container>
      <div style={{ width: '100%', height: '100px', backgroundColor: 'red', marginTop: '24px' }} />
      <div style={{ width: '100%', height: '100px', backgroundColor: 'blue', marginTop: '24px' }} />
    </Container>
  );
});

stories.add('Container - Fluid', () => {
  return (
    <Container fluid>
      <div style={{ width: '100%', height: '100px', backgroundColor: 'red', marginTop: '24px' }} />
      <div style={{ width: '100%', height: '100px', backgroundColor: 'blue', marginTop: '24px' }} />
    </Container>
  );
});
