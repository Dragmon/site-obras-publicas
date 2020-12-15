import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';

const theme = {
  colors: {
    black: '#1c1e27',
    whithe: '#f7f8fb',
    purple: '#3739ae',
    backgroundColor: '#f1eded',
  },
  fontSizes: {
    mSmall: '1.3em',
    small: '1.6em',
    medium: '2em',
    xMedium: '2.5em',
    large: '3em',
  },
  margin: {
    marginElement: '0px',
  },
  padding: {
    paddingPage: '0 30px 60px',
  },
  sizeDevice: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node,
};

export default Theme;
