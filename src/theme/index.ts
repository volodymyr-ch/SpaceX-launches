import { createGlobalStyle } from 'styled-components';

import colors from './colors';
import fonts from './fonts';
import breakPoints from './responsive';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0; 
    background: linear-gradient(to right, #3a205c, #2c3a70);
  }`;

const theme = {
  colors,
  fonts,
  breakPoints,
};

export default theme;
