const pxToRem = (value: number) => `${value / 10}rem`;

export default {
  generalMaxWidth: pxToRem(1300),
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
      12: pxToRem(12),
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
    redSuperLighthen: '#FFCDD2',
    white: '#ffffff',
    black: '#202020 ',
    shadow: 'rgba(0, 0, 0, 0.25) ',
    gray: '#959595 ',
    whiteLighthen: '#F5F5F5',
  },

  radii: {
    xsmall: pxToRem(5),
    small: pxToRem(10),
    medium: pxToRem(20),
    large: pxToRem(30),
    xlarge: pxToRem(50),
    xxlarge: pxToRem(70),
  },

  media: {
    min: (value: number) => `@media only screen and (min-width: ${value}px)`,
  },
} as const;
