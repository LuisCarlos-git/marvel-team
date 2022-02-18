const pxToRem = (value: number) => `${value / 10}rem`;

export default {
  font: {
    family: "'Roboto', sans-serif",
    weight: {
      normal: 400,
      bold: 700,
    },
    colors: {
      black: '#212121',
      white: '#fff',
      gray: '#858585',
    },

    sizes: {
      16: pxToRem(16),
      18: pxToRem(18),
      20: pxToRem(20),
      24: pxToRem(24),
      30: pxToRem(30),
      36: pxToRem(36),
      32: pxToRem(32),
      42: pxToRem(42),
    },
  },

  spacings: {
    8: pxToRem(8),
    16: pxToRem(16),
    18: pxToRem(18),
    20: pxToRem(20),
    24: pxToRem(24),
    30: pxToRem(30),
    36: pxToRem(36),
    32: pxToRem(32),
    42: pxToRem(42),
  },

  colors: {
    red: '#F43735',
    redSuperLigthen: '#FFCDD2',
    white: '#ffffff',
    black: '#202020 ',
    shadow: 'rgba(0, 0, 0, 0.25) ',
    gray: '#959595 ',
  },

  radii: {
    small: pxToRem(5),
    large: pxToRem(20),
  },

  media: {
    min: (value: number) => `@media only screen and (min-width: ${value}px)`,
  },
} as const;
