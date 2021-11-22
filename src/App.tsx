import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme, { GlobalStyle } from 'theme';

import { LaunchPage } from 'components';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <LaunchPage />
  </ThemeProvider>
);

export default App;
