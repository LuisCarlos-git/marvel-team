import { StyledHeadingProps } from './types';
import styled, { css } from 'styled-components';

const Heading = styled.h1.attrs<StyledHeadingProps>(({ levels }) => ({
  as: levels,
}))<StyledHeadingProps>`
  ${({ theme, fontColor = 'black', fontSize = 42, responsiveSize = 32 }) => css`
    color: ${theme.font.colors[fontColor]};
    font-size: ${theme.font.sizes[responsiveSize]};

    ${theme.media.min(768)} {
      font-size: ${theme.font.sizes[fontSize]};
    }
  `}
`;

export default Heading;
