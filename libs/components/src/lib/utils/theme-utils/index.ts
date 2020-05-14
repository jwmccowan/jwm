import TinyColor from 'tinycolor2';
import { assertNever } from '../component-utils';

export enum ButtonState {
  DEFAULT,
  PRESSED,
  DISABLED,
  FOCUSED,
}

export const getButtonColor = (color: string, state: ButtonState) => {
  switch (state) {
    case ButtonState.DEFAULT:
      return new TinyColor(color).toString();
    case ButtonState.PRESSED:
      return new TinyColor(color).lighten(15).toString();
    case ButtonState.DISABLED:
      return TinyColor(color).lighten(30).toString();
    case ButtonState.FOCUSED:
      return TinyColor(color).toString();
    default:
      assertNever(state);
  }
};
