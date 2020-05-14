import * as React from 'react';
import styled from 'styled-components';
import { getButtonColor, ButtonState } from '../../utils/theme-utils';

export type ContextColor = 'primary' | 'secondary' | 'danger' | 'alert' | 'success' | 'info';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  contextColor?: ContextColor;
};

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  font-family: sans-serif;
  align-items: center;
  white-space: nowrap;
  font-size: 1rem;
  border: 1px solid
    ${({ theme, contextColor }) => getButtonColor(theme.colors.contextColors[contextColor || 'secondary'], ButtonState.DEFAULT)};
  height: 2.5em;
  justify-content: center;
  text-decoration: none;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  appearance: none;
  padding: 0 1em;
  border-radius: 0.125rem;
  box-sizing: border-box;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  transition: background-color 100ms ease-out, color 100ms ease-out, border-color 100ms ease-out, box-shadow 400ms ease-out,
    color 400ms ease-out;
  background: none;
  color: ${({ theme, contextColor }) => getButtonColor(theme.colors.contextColors[contextColor || 'secondary'], ButtonState.DEFAULT)};
  padding: ${(props) => props.theme.spacing.LG} ${(props) => props.theme.spacing.XL};
  margin: ${(props) => props.theme.spacing.MD};
  text-transform: uppercase;

  &:hover,
  &:focus {
    border-color: ${({ theme, contextColor }) =>
      getButtonColor(theme.colors.contextColors[contextColor || 'secondary'], ButtonState.FOCUSED)};
    box-shadow: inset 0 0 0 2em
      ${({ theme, contextColor }) => getButtonColor(theme.colors.contextColors[contextColor || 'secondary'], ButtonState.FOCUSED)};
    color: ${(props) => props.theme.colors.backgroundColor};
  }
  &:active {
    border-color: ${({ theme, contextColor }) =>
      getButtonColor(theme.colors.contextColors[contextColor || 'secondary'], ButtonState.PRESSED)};
    box-shadow: inset 0 0 0 2em
      ${({ theme, contextColor }) => getButtonColor(theme.colors.contextColors[contextColor || 'secondary'], ButtonState.PRESSED)};
  }
  &:disabled {
    border-color: ${({ theme, contextColor }) =>
      getButtonColor(theme.colors.contextColors[contextColor || 'secondary'], ButtonState.DISABLED)};
    color: ${({ theme, contextColor }) => getButtonColor(theme.colors.contextColors[contextColor || 'secondary'], ButtonState.DISABLED)};
  }
`;

export const Button: React.FC<ButtonProps> = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <StyledButton {...props} ref={ref}>
    {props.children}
  </StyledButton>
));

Button.displayName = 'Button';
