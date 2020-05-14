import * as React from 'react';
import { Divider } from './Divider';
import { storiesOf } from '@storybook/react';
import { Container } from '../Container';

const stories = storiesOf('atoms | Divider', module);

stories.add('Divider', () => {
  return (
    <Container>
      Section 1
      <Divider />
      Section 2
    </Container>
  );
});

const style = { marginTop: '5px' };

stories.add('PositionDivider', () => {
  return (
    <Container>
      <div style={{ marginRight: 'auto', marginLeft: 'auto', width: '200px' }}>
        <Divider style={style} position="bottom">
          This
        </Divider>
        <Divider style={style} position="top">
          Is
        </Divider>
        <Divider style={style} position="right">
          Sparta
        </Divider>
        <Divider style={style} position="left">
          !!!
        </Divider>
      </div>
    </Container>
  );
});
