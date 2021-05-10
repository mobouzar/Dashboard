import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  avatar: {
	margin: theme.spacing(1),
	backgroundColor: theme.palette.secondary.main,
	height: "70px",
	width: "70px",
  }
}));

const Logo = (props) => {
  const classes = useStyles();
  // <img
  //   alt="Logo"
  //   src="/static/logo.svg"
  //   {...props}
  // />
  return (
  <Avatar className={classes.avatar} src="./favicon.ico" />);
};

export default Logo;
