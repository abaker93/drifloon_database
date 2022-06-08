import React from "react";

import Link from '@mui/material/Link';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import SettingsIcon from "@mui/icons-material/Settings";

const Header = () => {
	return (
		<Box id="Header">
			<AppBar>
				<Toolbar>
					<Box sx={{ flexGrow: 1 }} />
					<IconButton edge="start" aria-label="settings">
						<SettingsIcon />
					</IconButton>
					<Link href="/">
						<IconButton aria-label="home">
							<AppsRoundedIcon />
						</IconButton>
					</Link>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default Header