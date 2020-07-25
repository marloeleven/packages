import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#eeeeee',
    },
    secondary: {
      main: '#32e0c4',
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButton: {
      variant: 'contained',
      color: 'primary',
      size: 'small',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '0',
      },
    },
  },
});
