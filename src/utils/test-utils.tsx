import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from 'theme';
import store from 'store';

export const withThemeProvider = (component: React.ReactElement) => (
  <ThemeProvider theme={theme}>{component}</ThemeProvider>
);

export const withStore = (component: React.ReactElement) => (
  <Provider store={store}>{component}</Provider>
);
