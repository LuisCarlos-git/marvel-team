import theme from '.';

export type FontColors = keyof typeof theme.font.colors;
export type FontSizes = keyof typeof theme.font.sizes;
export type FontWeight = keyof typeof theme.font.weight;

export type GlobalColors = keyof typeof theme.colors;
export type GlobalSpacings = keyof typeof theme.spacings;
export type GlobalRadii = keyof typeof theme.radii;
