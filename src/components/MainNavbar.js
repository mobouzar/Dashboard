import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Logo from './Logo';

const useStyles = makeStyles((theme) => ({
  avatar: {
	margin: theme.spacing(1),
	backgroundColor: theme.palette.secondary.main,
	height: "70px",
	width: "70px",
  }
}));

const MainNavbar = (props) => {
  const classes = useStyles();
  return (
  <AppBar
    elevation={0}
    {...props}
  >
    <Toolbar sx={{ height: 64 }}>
      <RouterLink to="/">
      {/* <Avatar className={classes.avatar} src="favicon.ico" /> */}
        {/* <Logo /> */}
      </RouterLink>
    </Toolbar>
  </AppBar>
  );
};

export default MainNavbar;
