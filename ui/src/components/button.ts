import { makeStyles, createStyles } from '@material-ui/core/styles';

export enum IVariant {
  CONTAINED = 'contained',
  OUTLINED = 'outlined',
  TEXT = 'text',
}

export enum IColor {
  DEFAULT = 'default',
  INHERIT = 'inherit',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export const addToCartStyles = makeStyles((themes) =>
  createStyles({
    root: {
      backgroundColor: '#cdb30c',

      '&:hover': {
        backgroundColor: '#cdb30c',
        filter: 'contrast(1.3)',
      },
    },
  })
);
