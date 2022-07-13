import React, { useEffect, useState } from "react";

import Link from '@mui/material/Link';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import SettingsIcon from "@mui/icons-material/Settings";

const Header = (...params) => {
	const [scroll, setScroll] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setScroll(window.scrollY > 200);
		})
	})

	return (
		<Box id="Header">
			<AppBar className={scroll ? 'scrollHeader'  : null}>
				<Toolbar>
					<Link className="back" href={`/${params[0].game}/pokedex`}>
						<IconButton aria-label="back">
							<ArrowBackIosNewRoundedIcon />
						</IconButton>
					</Link>
					<Box className="title">
						<p>Drifloon Database</p>
					</Box>
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