import React from 'react';

import { addDecorator } from '@storybook/react';

import { ThemeProvider } from '@material-ui/core/styles';
import StyleProvider from './../src/components/styleprovider';
import theme from './../src/themes/box';

addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>
    <StyleProvider>{storyFn()}</StyleProvider>
  </ThemeProvider>
));
