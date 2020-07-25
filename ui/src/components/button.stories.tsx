import React from 'react';
import { action } from '@storybook/addon-actions';

import { IColor, IVariant, addToCartStyles } from './button';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

export default {
  component: Button,
  title: 'Button',
  excludeStories: /.*Data$/,
};

export const taskData = {
  title: 'Button',
  variant: IVariant.CONTAINED,
  color: IColor.PRIMARY,
};

export const actionsData = {
  onClick: action('onClick'),
};

export const Default = () => (
  <Button onClick={action('clicked')}>Default</Button>
);

export const Disabled = () => (
  <Button onClick={action('clicked')} disabled>
    DISABLED
  </Button>
);

export const Secondary = () => (
  <Button color={IColor.SECONDARY} onClick={action('clicked')}>
    SECONDARY
  </Button>
);

export const AddToCart = () => {
  const classes = addToCartStyles();
  return (
    <Button
      color={IColor.SECONDARY}
      onClick={action('clicked')}
      className={classes.root}
    >
      <AddShoppingCartIcon fontSize='small' />
      <Typography variant='caption'>Add to Cart</Typography>
    </Button>
  );
};
