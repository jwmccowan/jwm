export type ContextColors = {
  primary: string;
  secondary: string;
  danger: string;
  alert: string;
  success: string;
  info: string;
};

export type Grayscale = {
  white: string;
  veryLight: string;
  light: string;
  medium: string;
  dark: string;
  veryDark: string;
  black: string;
};

export type Colors = {
  backgroundColor: string;
  contextColors: ContextColors;
  grayscale: Grayscale;
  heading: string;
  text: string;
};
