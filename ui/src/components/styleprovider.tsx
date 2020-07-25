import React from 'react';
import {
  jssPreset,
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { create } from 'jss';
import jssTemplate from 'jss-plugin-template';

import { IProps } from 'const/types';

const jss = create({
  plugins: [jssTemplate(), ...jssPreset().plugins],
});

const classPrefix = createGenerateClassName({
  productionPrefix: 'jklm',
});

export default ({ children, ...props }: IProps) => (
  <StylesProvider
    jss={jss}
    generateClassName={classPrefix}
    injectFirst
    {...props}
  >
    {children}
  </StylesProvider>
);
