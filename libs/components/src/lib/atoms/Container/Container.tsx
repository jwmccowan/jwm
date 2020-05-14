import styled, { css } from 'styled-components';
import { screenSize } from '../../media';

export type ContainerProps = {
  fluid?: boolean;
};

export const Container = styled.div<ContainerProps>`
  ${(props) =>
    props.fluid
      ? css`
          max-width: auto;
        `
      : css`
          ${screenSize.xs} {
            max-width: auto;
          }
          ${screenSize.sm} {
            max-width: 570px;
          }
          ${screenSize.md} {
            max-width: 740px;
          }
          ${screenSize.lg} {
            max-width: 960px;
          }
          ${screenSize.xl} {
            max-width: 1170px;
          }
        `}
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  background-color: ${(props) => props.theme.colors.backgroundColor};
`;
