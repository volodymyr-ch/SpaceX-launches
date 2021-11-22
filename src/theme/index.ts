import { createGlobalStyle } from 'styled-components';

import colors from './colors';
import fonts from './fonts';

export const GlobalStyle = createGlobalStyle`body { margin: 0; }`;

const theme = {
  colors,
  fonts,
};

export default theme;
