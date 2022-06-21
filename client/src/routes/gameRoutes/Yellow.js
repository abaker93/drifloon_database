import React from 'react';

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from "@mui/material/Link";

export const YellowInfo = () => {
	return (
		<Box id="YellowInfo">
			<p>Pokémon Yellow Version: Special Pikachu Edition (Japanese: ポケットモンスター　ピカチュウ Pocket Monsters Pikachu), often known as Pokémon Yellow Version, is the third Pokémon game for Game Boy released worldwide, as a solitary version of Pokémon Red and Blue Versions. In Japan, the game was the fourth Pokémon game released, as a second solitary version of Pocket Monsters Red & Green. Unlike other games, Pokemon Yellow was inspired by the anime.</p>
			<p>The game is available on the Nintendo 3DS Virtual Console between the Pokémon 20th Anniversary on February 27, 2016 and the discontinuation of the 3DS Nintendo eShop in March 2023.</p>
			<p>Generation VII remakes, titled Pokémon: Let's Go, Pikachu! and Let's Go, Eevee!, were released worldwide for the Nintendo Switch in November 2018, in celebration of Yellow's 20th anniversary in Japan.</p>
			
			<TableContainer maxWidth="xl" sx={{ mt: 4 }}>
				<h2>Details</h2>
				<Table className="detailsTable">
					<TableBody>
						<TableRow>
							<TableCell colSpan={2}>
								<img src="https://img.pokemondb.net/boxes/yellow.jpg" alt="Pokémon Yellow Version" />
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="head">Platform</TableCell>
							<TableCell>
								<p>Game Boy</p>
								<p>Nintendo 3DS <em>(Virtual Console)</em></p>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="head">Director</TableCell>
							<TableCell>Satoshi Tajiri</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="head">Pokémon Count</TableCell>
							<TableCell><Link href="./yellow/pokedex">151</Link></TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="head">Move Count</TableCell>
							<TableCell><Link href="./yellow/moves">999</Link></TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="head">Location Count</TableCell>
							<TableCell><Link href="./yellow/locations">999</Link></TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="head">Remakes</TableCell>
							<TableCell>
								<p><Link href="./lets-go-pikachu-eevee">Let's Go Pikachu! & Let's Go Eevee!</Link></p>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>

			<TableContainer sx= {{ mt: 4 }}>
				<h2>Release Dates</h2>
				<Table className="detailsTable">
					<TableBody>
						<TableRow>
							<TableCell className="head">Japan</TableCell>
							<TableCell>
								<p>September 12, 1998 <span className='small'>(Game Boy)</span></p>
								<p>February 27, 2016 <span className='small'>(3DS VC)</span></p>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="head">North America</TableCell>
							<TableCell>
								<p>October 18, 1999 <span className='small'>(Game Boy)</span></p>
								<p>February 27, 2016 <span className='small'>(3DS VC)</span></p>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="head">Australia</TableCell>
							<TableCell>
								<p>September 3, 1999 <span className='small'>(Game Boy)</span></p>
								<p>February 27, 2016 <span className='small'>(3DS VC)</span></p>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="head">Europe</TableCell>
							<TableCell>
								<p>June 16, 2000 <span className='small'>(Game Boy)</span></p>
								<p>February 27, 2016 <span className='small'>(3DS VC)</span></p>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="head">Hong Kong</TableCell>
							<TableCell>
								<p>February 27, 2016 <span className='small'>(3DS VC)</span></p>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="head">Taiwan</TableCell>
							<TableCell>
								<p>February 27, 2016 <span className='small'>(3DS VC)</span></p>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	)
}