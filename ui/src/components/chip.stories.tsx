import React from 'react';
import { action } from '@storybook/addon-actions';

import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

export default {
  component: Chip,
  title: 'Chip',
  excludeStories: /.*Data$/,
};

export const taskData = {
  title: 'Chip',
};

export const actionsData = {
  label: 'Sample Text',
  onClick: action('onClick'),
  onDelete: action('onDelete'),
};

export const Tags = () => <Chip label='Colorful' variant='outlined' />;

export const Basic = () => <Chip label='Basic' />;

export const Clickable = () => <Chip {...actionsData} />;

export const Primary = () => <Chip {...actionsData} color='primary' />;

export const Secondary = () => <Chip {...actionsData} color='secondary' />;

export const LetterIcon = () => (
  <Chip {...actionsData} avatar={<Avatar>M</Avatar>} />
);

export const SvgIcon = () => <Chip {...actionsData} icon={<FaceIcon />} />;

export const CustomDelete = () => (
  <Chip {...actionsData} deleteIcon={<DoneIcon />} />
);
