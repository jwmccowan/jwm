import { ContextColors, Colors, Grayscale } from '../types/colors';

const contextColors: ContextColors = {
  primary: '#54aef6',
  secondary: '#cccccc',
  danger: '#f5554a',
  info: '#bf6ee0',
  success: '#57df61',
  alert: '#dbc34c',
};

const grayscale: Grayscale = {
  black: '#000000',
  veryDark: '#414141',
  dark: '#616161',
  medium: '#9e9e9e',
  light: '#bdbdbd',
  veryLight: `#e0e0e0`,
  white: '#ffffff',
};

export const colors: Colors = {
  backgroundColor: '#333',
  contextColors,
  grayscale,
  heading: '#eee',
  text: '#ccc',
};
