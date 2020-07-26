import React from 'react';
import css from 'classnames';

import { makeStyles, createStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import { IProps } from 'const/types';

export enum ELabelTypes {
  none = 'none',
  sale = 'sale',
  new = 'new',
  best = 'best',
}

interface ILabelProps extends IProps {
  type: ELabelTypes;
}

const useStyles = makeStyles((themes) =>
  createStyles({
    root: {
      backgroundColor: '#808080',
      padding: '3px 5px',
      minWidth: '60px',
      display: 'inline-block',
      textAlign: 'center',
      color: '#fff',
    },
    [ELabelTypes.none]: {},
    [ELabelTypes.sale]: {
      backgroundColor: '#ff9900',
    },
    [ELabelTypes.new]: {
      backgroundColor: '#cf2a27',
    },
    [ELabelTypes.best]: {
      backgroundColor: '#085394',
    },
  })
);

export default ({
  children,
  type = ELabelTypes.none,
  ...props
}: ILabelProps) => {
  const classes = useStyles();

  return (
    <Typography
      variant='caption'
      className={css(classes.root, classes[type])}
      {...props}
    >
      {children}
    </Typography>
  );
};
