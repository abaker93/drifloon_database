import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from '@mui/material/Link';

const Footer = () => {
	return (
		<Box id="Footer">
			<Container maxWidth="xl" sx={{ mt: 8 }}>
				<Box>
					<h2>Get in Touch!</h2>
					<p>Anna Baker</p>
					<p>Designer | Developer | Database Creator</p>
					<p>
						<Link href="http://annabaker.design" target="_blank" rel="noreferrer" underline="none">annabaker.design</Link>
					</p>
				</Box>
			</Container>
		</Box>
	)
}

export default Footer