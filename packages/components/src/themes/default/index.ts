export const contextColors = {
  primary: ['#2196f3', '#54aef6', '#7cc1f8', '#a6d5fa'] as const,
  secondary: ['#eee', '#eee', '#eee', '#eee'] as const,
  danger: ['#f44336', '#f5554a', '#f6675d', '#f88077'] as const,
  alert: ['#ff4081', '#ff568f', '#ff6b9d', '#ff87b0'] as const,
  success: ['#27cf33', '#57df61', '#86ec8e', '#a9f5af'] as const,
  info: ['#d7ba28', '#dbc34c', '#ecda88', '#f1e4a8'] as const,
};

export const colors = {
  white: ['#fff', '#fff', '#eee'] as const,
  grayscale: ['#212121', '#414141', '#616161', '#9e9e9e', '#bdbdbd', '#e0e0e0', '#eeeeee', '#ffffff'] as const,
  backgroundColor: ['#222', '#333', '#444'],
  ...contextColors,
};

enum sizes {
  maxWidth = '1100px',
}

export const defaultTheme = {
  colors,
  sizes,
};
