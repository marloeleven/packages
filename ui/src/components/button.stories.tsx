import React from 'react';
import { action } from '@storybook/addon-actions';

import Button, { EColor, EVariant } from './button';
// import Button from '@material-ui/core/Button';

export default {
  component: Button,
  title: 'Button',
  excludeStories: /.*Data$/,
};

export const taskData = {
  title: 'Button',
  variant: EVariant.CONTAINED,
  color: EColor.PRIMARY,
};

export const actionsData = {
  onClick: action('onClick'),
};

export const Default = () => (
  <Button variant={EVariant.CONTAINED} onClick={action('clicked')}>
    Test Button
  </Button>
);

export const Disabled = () => (
  <Button onClick={action('clicked')}>
    <span role='img' aria-label='so cool'>
      😀 😎 👍 💯
    </span>
  </Button>
);
