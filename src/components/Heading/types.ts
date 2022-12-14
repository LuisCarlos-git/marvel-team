import { FontSizes, FontColors } from 'styles/theme/types';

export type HeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type StyledHeadingProps = {
  levels?: HeadingLevels;
  fontColor?: FontColors;
  fontSize?: FontSizes;
  responsiveSize?: FontSizes;
};
