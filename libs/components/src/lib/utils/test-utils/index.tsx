import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { dark } from '@jwm/themes';

const AllTheProviders: React.ComponentClass<{}, any> | React.FunctionComponent<{}> = ({ children }) => {
  return <ThemeProvider theme={dark}>{children}</ThemeProvider>;
};

//TODO: any
const customRender = (ui: any, options?: any) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
