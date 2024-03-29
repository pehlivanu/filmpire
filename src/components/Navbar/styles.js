import { makeStyles } from '@mui/styles';

const drawerWidth = 240;
// the () => ({}) means instantly return an object, instead of defining a callback function, which makestyles expects as argument
export default makeStyles((theme) => ({
  toolbar: {
    height: '80px',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '224px',
    // On mobile devices only
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
      flexWrap: 'wrap',
    },
  },
  menuButton: {
    // this ensure equal spacing on every device
    marginRight: theme.spacing(2),
    // on non-mobile devices it's hidden
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  linkButton: {
    '&:hover': {
      color: 'white !important',
      textDecoration: 'none',
    },
  },
}));
