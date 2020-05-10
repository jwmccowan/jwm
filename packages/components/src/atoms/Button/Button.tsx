import * as React from 'react';
import styled from 'styled-components';

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
  border: 0.0625em solid ${props => props.theme.colors[props.contextColor || 'secondary'][0]};
  height: 2.5em;
  justify-content: center;
  text-decoration: none;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  appearance: none;
  padding: 0 1em;
  border-radius: 0.125em;
  box-sizing: border-box;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  transition: background-color 100ms ease-out, color 100ms ease-out, border-color 100ms ease-out,
    box-shadow 400ms ease-out, color 400ms ease-out;
  background: none;
  color: ${props => props.theme.colors[props.contextColor || 'secondary'][0]};
  padding: 1em 2em;
  margin: 0.5em;

  &:hover,
  &:focus {
    border-color: ${props => props.theme.colors[props.contextColor || 'secondary'][1]};
    box-shadow: inset 0 0 0 2em ${props => props.theme.colors[props.contextColor || 'secondary'][1]};
    color: ${props => props.theme.colors.backgroundColor[1]};
  }

  &:active {
    border-color: ${props => props.theme.colors[props.contextColor || 'secondary'][3]};
    box-shadow: inset 0 0 0 2em ${props => props.theme.colors[props.contextColor || 'secondary'][3]};
  }

  &:disabled {
    border-color: ${props => props.theme.colors[props.contextColor || 'secondary'][3]};
    color: ${props => props.theme.colors[props.contextColor || 'secondary'][3]};
  }
`;

export const Button: React.FC<ButtonProps> = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <StyledButton {...props} ref={ref}>
    {props.children}
  </StyledButton>
));

Button.displayName = 'Button';
