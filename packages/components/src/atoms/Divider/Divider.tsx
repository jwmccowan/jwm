import * as React from 'react';
import styled from 'styled-components';

export type Position = 'bottom' | 'left' | 'right' | 'top';

export type DividerProps = React.HTMLAttributes<HTMLDivElement> & {
  position?: Position;
};

type ContainerDividerProps = Omit<DividerProps, 'position'> & {
  position: Position;
};

const ContainerDivider = styled.div<ContainerDividerProps>`
  ${(props) => {
    const position = props.position;
    return `border-${position}: 1px solid ${props.theme.colors.grayscale.medium}`;
  }}
`;

const FlatDivider = styled.div`
  display: block;
  height: 1px;
  background-color: ${(props) => props.theme.colors.grayscale.medium};
`;

export const Divider: React.FC<DividerProps> = React.forwardRef<HTMLDivElement, DividerProps>((props, ref) =>
  props.position ? (
    <ContainerDivider {...props} position={props.position} ref={ref}>
      {props.children}
    </ContainerDivider>
  ) : (
    <FlatDivider {...props} ref={ref}>
      {props.children}
    </FlatDivider>
  )
);
Divider.displayName = 'Divider';
