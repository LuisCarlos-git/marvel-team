import { HeadingLevels } from './types';
import styled, { css } from 'styled-components';
import { FontColors, FontSizes } from 'styles/theme/types';

export type StyledHeadingProps = {
  levels?: HeadingLevels;
  fontColor?: FontColors;
  fontSize?: FontSizes;
};

const Heading = styled.h1.attrs<StyledHeadingProps>(({ levels }) => ({
  as: levels,
}))<StyledHeadingProps>`
  ${({ theme, fontColor = 'black', fontSize = 42 }) => css`
    color: ${theme.font.colors[fontColor]};
    font-size: ${theme.font.sizes[fontSize]};
  `}
`;

export default Heading;
