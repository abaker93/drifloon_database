import React from 'react';

import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const PokemonError = () => {
	return (
		<Container sx={{ mt: 10 }}>
			<Alert variant="filled" severity="error">
				<AlertTitle>Oh no! The pokemon fled.</AlertTitle>
				<p color="inherit">Try these links instead:</p>
				<ul>
					<li><Link href="/national/pokedex" underline="hover" color="inherit">National Pokédex</Link></li>
					<li><Link href="/type-chart" underline="hover" color="inherit">Type Chart</Link></li>
					<li><Link href="/national/moves" underline="hover" color="inherit">Moves</Link></li>
				</ul>
			</Alert>
		</Container>
	)
	
}

export default PokemonError