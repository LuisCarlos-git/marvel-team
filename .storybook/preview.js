
import React from 'react';
import { ThemeProvider } from "styled-components";

import theme from '../src/styles/theme';
import GlobalStyles from '../src/styles/Global';
import { BrowserRouter } from 'react-router-dom';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
      <Story />
      </BrowserRouter>
    </ThemeProvider>
  ),
];

