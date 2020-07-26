import React from 'react';
// import { action } from '@storybook/addon-actions';

// import { IColor, IVariant, addToCartStyles } from './button';
import Label, { ELabelTypes } from 'components/label';

export default {
  component: Label,
  title: 'Label',
  excludeStories: /.*Data$/,
};

export const Default = () => <Label type={ELabelTypes.none}>Default</Label>;
export const Best = () => <Label type={ELabelTypes.best}>Best</Label>;
export const New = () => <Label type={ELabelTypes.new}>New</Label>;
export const Sale = () => <Label type={ELabelTypes.sale}>Sale</Label>;
