import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.svg";

function ElevationScroll(props) {
	const { children } = props;

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

const useStyles = makeStyles((theme) => ({
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: "1em"
	},
	logo: {
		height: "5em"
	},
	logoContainer: {
		padding: "0",
		"&:hover": {
			backgroundColor: "transparent"
		}
	},
	tabContainer: {
		marginLeft: "auto"
	},
	tab: {
		...theme.typography.tab,
		minWidth: 10,
		marginLeft: "25px"
	},
	button: {
		...theme.typography.estimate,
		borderRadius: "50px",
		marginLeft: "25px",
		marginRight: "25px",
		height: "45px",
	}
}));

function Header(props) {
	const classes = useStyles();
	const [value, setValue] = useState(0);
	const handleChange = (e, value) => {
		setValue(value);
	}
	useEffect(() => {
		if (window.location.pathname === "/" && value !== 0) {
			setValue(0);
		} else if (window.location.pathname === "/services" && value !== 1) {
			setValue(1)
		} else if (window.location.pathname === "/revolution" && value !== 2) {
			setValue(2)
		} else if (window.location.pathname === "/about" && value !== 3) {
			setValue(3)
		} else if (window.location.pathname === "/contact" && value !== 4) {
			setValue(4)
		} else if (window.location.pathname === "/estimate" && value !== 5) {

		}
	}, [value]);
	return (
		<>
			<ElevationScroll>
				<AppBar>
					<ToolBar disableGutters>
						<Button
							component={Link}
							to="/"
							disableRipple
							className={classes.logoContainer}
							onClick={() => setValue(0)}
						>
							<img
								src={Logo}
								alt="logo"
								className={classes.logo}
							/>
						</Button>
						<Tabs
							value={value}
							onChange={handleChange}
							indicatorColor='primary'
							className={classes.tabContainer}
						>
							<Tab
								className={classes.tab}
								component={Link}
								to="/"
								label="Home"
							/>
							<Tab
								className={classes.tab}
								component={Link}
								to="/services"
								label="Services"
							/>
							<Tab
								className={classes.tab}
								component={Link}
								to="/revolution"
								label="The Revolution"
							/>
							<Tab
								className={classes.tab}
								component={Link}
								to="/about"
								label="About Us"
							/>
							<Tab
								className={classes.tab}
								component={Link}
								to="/contact"
								label="Contact Us"
							/>
						</Tabs>
						<Button
							variant="contained"
							color="secondary"
							className={classes.button}
						>
							Free Estimate
						</Button>
					</ToolBar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</>
	);
}

export default Header;