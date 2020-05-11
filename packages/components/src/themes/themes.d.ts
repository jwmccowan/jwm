// import original module declarations
import 'styled-components';
// import your custom theme
import { defaultTheme } from './default';

// extend the module declarations using custom theme type

type Theme = typeof defaultTheme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
