import { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';


import PropTypes from 'prop-types';
import {
	Avatar,
	Box,
	Button,
	Divider,
	Drawer,
	Hidden,
	List,
	Typography
} from '@material-ui/core';
import {
	AlertCircle as AlertCircleIcon,
	BarChart as BarChartIcon,
	Lock as LockIcon,
	Settings as SettingsIcon,
	ShoppingBag as ShoppingBagIcon,
	ShoppingCart as PurchasingIcon,
	User as UserIcon,
	UserPlus as UserPlusIcon,
	Users as UsersIcon,
	Tool as  ToolIcon
} from 'react-feather';
import NavItem from './NavItem';

const user = {
	avatar: '/static/images/avatars/avatar_6.png',
	jobTitle: 'Senior Developer',
	name: 'Katarina Smith'
};

const useStyles = makeStyles((theme) => ({
	root: {
	  width: '100%',
	  maxWidth: 360,
	  backgroundColor: theme.palette.background.paper,
	},
	nested: {
	  paddingLeft: theme.spacing(1),
	},
	list: {
		paddingLeft: "7px !important"
	},
	text: {
		marginLeft: '-26px !important',
		Color: '#6b778c',
	}
  }));

const items = [
	{
		href: '/app/dashboard',
		icon: BarChartIcon,
		title: 'Dashboard'
	},
	{
		href: '/app/customers',
		icon: UsersIcon,
		// title: 'Customers'
		title: 'Administration'
	},
	{
		href: '/app/account',
		icon: UserIcon,
		title: 'Account'
	},
	{
		href: '/app/products',
		icon: ShoppingBagIcon,
		title: 'Sales'
	},
	{
		href: '/app/purchasing',
		icon: PurchasingIcon,
		title: 'Purchasing'
	},
	// {
	// 	href: '/app/settings',
	// 	icon: SettingsIcon,
	// 	title: 'Settings'
	// },
	// {
	// 	href: '/login',
	// 	icon: LockIcon,
	// 	title: 'Login'
	// },
	// {
	// 	href: '/register',
	// 	icon: UserPlusIcon,
	// 	title: 'Register'
	// },
	// {
	// 	href: '/404',
	// 	icon: AlertCircleIcon,
	// 	title: 'Error'
	// }
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
	const classes = useStyles();
	const location = useLocation();
	const [open, setOpen] = useState(true);

	const handleClick = () => {
		setOpen(!open);
	};

	useEffect(() => {
		if (openMobile && onMobileClose) {
			onMobileClose();
		}
	}, [location.pathname]);

	const content = (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				height: '100%'
			}}
		>
			<Box
				sx={{
					alignItems: 'center',
					display: 'flex',
					flexDirection: 'column',
					p: 2
				}}
			>
				<Avatar
					component={RouterLink}
					src={user.avatar}
					sx={{
						cursor: 'pointer',
						width: 64,
						height: 64
					}}
					to="/app/account"
				/>
				<Typography
					color="textPrimary"
					variant="h5"
				>
					{user.name}
				</Typography>
				{/* <Typography
					color="textSecondary"
					variant="body2"
				>
					{user.jobTitle}
				</Typography> */}
			</Box>
			<Divider />
			<Box sx={{ p: 2 }}>
				<List>
					{items.map((item) => (
						<NavItem
							href={item.href}
							key={item.title}
							title={item.title}
							icon={item.icon}
						/>
					))}
					<ListItem button onClick={handleClick} className={classes.list}
						sx={{
							color: 'text.secondary',
							fontWeight: 'medium',
							justifyContent: 'flex-start',
							letterSpacing: 0,
							py: 1.25,
							textTransform: 'none',
							width: '100%',
							'& svg': {
							  mr: 1
							},
						  }}
					>
						<ListItemIcon>
							<ToolIcon />
						</ListItemIcon>
						<ListItemText primary="Inbox" className={classes.text} />
						{open ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItem button className={classes.nested}>
								<ListItemIcon>
									<StarBorder />
								</ListItemIcon>
								<ListItemText primary="EDI" className={classes.text} />
							</ListItem>
							<ListItem button className={classes.nested}>
								<ListItemIcon>
									<StarBorder />
								</ListItemIcon>
								<ListItemText primary="Refresh Data" className={classes.text} />
							</ListItem>
						</List>
					</Collapse>
				</List>
			</Box>
		</Box>
	);

	return (
		<>
			<Hidden lgUp>
				<Drawer
					anchor="left"
					onClose={onMobileClose}
					open={openMobile}
					variant="temporary"
					PaperProps={{
						sx: {
							width: 256
						}
					}}
				>
					{content}
				</Drawer>
			</Hidden>
			<Hidden lgDown>
				<Drawer
					anchor="left"
					open
					variant="persistent"
					PaperProps={{
						sx: {
							width: 256,
							top: 64,
							height: 'calc(100% - 64px)'
						}
					}}
				>
					{content}
				</Drawer>
			</Hidden>
		</>
	);
};

DashboardSidebar.propTypes = {
	onMobileClose: PropTypes.func,
	openMobile: PropTypes.bool
};

DashboardSidebar.defaultProps = {
	onMobileClose: () => { },
	openMobile: false
};

export default DashboardSidebar;
