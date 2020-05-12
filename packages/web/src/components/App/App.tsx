import * as React from 'react';
import { Button, Container } from '@jwm/components';

export const App: React.FC = () => (
  <Container>
    <Button contextColor="primary">Button</Button>
    <Button contextColor="secondary">Button</Button>
    <Button contextColor="success">Button</Button>
    <Button contextColor="info">Button</Button>
    <Button contextColor="danger">Button</Button>
    <Button contextColor="alert">Button</Button>
  </Container>
);
