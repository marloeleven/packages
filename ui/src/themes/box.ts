import { createMuiTheme } from '@material-ui/core/styles';

const button = {
  disabled: {
    '&$disabled': {
      boxShadow:
        '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
    },
  },
};

export default createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#0f4c75',
    },
    secondary: {
      main: '#3282b8',
    },
    action: {
      disabled: '#a6a6a6',
      disabledBackground: '#dedede',
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButton: {
      variant: 'contained',
      color: 'default',
      size: 'small',
    },
    MuiChip: {
      color: 'default',
      size: 'small',
    },
    MuiTypography: {
      variant: 'caption',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '0',
        textTransform: 'initial',
        ...button.disabled,
      },
      contained: {
        ...button.disabled,
      },
    },
    MuiChip: {
      outlined: {
        borderColor: '#808080',
        color: '#808080',
      },
    },
  },
});
