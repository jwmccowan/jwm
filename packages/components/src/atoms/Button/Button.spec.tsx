import React from 'react';
import { Button } from './Button';
import { render } from '../../utils/test-utils';

it('renders without crashing', () => {
  render(<Button />);
  expect(true);
});
