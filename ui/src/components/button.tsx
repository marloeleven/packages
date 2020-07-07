import React, { ReactNode } from 'react';
import MButton from '@material-ui/core/Button';
import { PropTypes } from '@material-ui/core';

export enum EVariant {
  CONTAINED = 'contained',
  OUTLINED = 'outlined',
  TEXT = 'text',
}

export enum EColor {
  DEFAULT = 'default',
  INHERIT = 'inherit',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface IButton {
  color: PropTypes.Color;
  variant: EVariant;
  children: ReactNode;
  onClick?: Function;
  disabled?: boolean;
  href?: string;
}
const Button = ({ children, ...props }: IButton) => (
  // @ts-ignore
  <MButton {...props}>{children}</MButton>
);

Button.defaultProps = {
  color: EColor.DEFAULT,
  variant: EVariant.CONTAINED,
  children: '',
};

export default Button;
