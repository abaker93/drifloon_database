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

export const RedBlueInfo = () => {
	return (
		<Box id="RedBlueInfo">
			<p>Pokémon Red Version and Pokémon Blue Version were the first Pokémon games to be released outside of Japan, becoming available in North America on September 28, 1998,[1] in Australia and New Zealand on October 23, 1998 and in Europe on October 5, 1999.[2][3] In North America, the pair closely followed the debut of the anime's English dub, which began airing on September 8, 1998,[4] and within a year, Pokémon was well known as a popular Nintendo franchise.</p>
			<p>The games are available on the Nintendo 3DS Virtual Console between the Pokémon 20th Anniversary on February 27, 2016 and the discontinuation of the 3DS Nintendo eShop in March 2023.</p>
			<p>Unlike later generations, Red and Blue were not the same as their corresponding Japanese releases Pokémon Red and Green. Besides Pokémon distribution, the aspects of Red and Blue such as graphics, script, and sprite designs are instead based on Pokémon Blue.</p>
			<p>Despite being released towards the end of Game Boy's lifespan, they quickly became the best-selling non-bundled games released for the Game Boy as well as being the best-selling role-playing games of all time.</p>
			
			<TableContainer maxWidth="xl" sx={{ mt: 4 }}>
				<h2>Details</h2>
				<Table className="detailsTable">
					<TableBody>
						<TableRow>
							<TableCell colSpan={2}>
								<img src="https://img.pokemondb.net/boxes/red.jpg" alt="Pokémon Red Version" />
								<img src="https://img.pokemondb.net/boxes/blue.jpg" alt="Pokémon Blue Version" />
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
							<TableCell><Link href="./red-blue/pokedex">151</Link></TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="head">Move Count</TableCell>
							<TableCell><Link href="./red-blue/moves">165</Link></TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="head">Location Count</TableCell>
							<TableCell><Link href="./red-blue/locations">999</Link></TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="head">Remakes</TableCell>
							<TableCell>
								<p><Link href="./firered-leafgreen">FireRed & LeafGreen</Link></p>
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
								<h6>Red:</h6>
								<p>February 27, 1996 <span className='small'>(Game Boy)</span></p>
								<p>February 27, 2016 <span className='small'>(3DS VC)</span></p>
								<h6>Blue:</h6>
								<p>October 10, 1999 <span className='small'>(Game Boy)</span></p>
								<p>February 27, 2016 <span className='small'>(3DS VC)</span></p>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="head">North America</TableCell>
							<TableCell>
								<p>September 28, 1998 <span className='small'>(Game Boy)</span></p>
								<p>February 27, 2016 <span className='small'>(3DS VC)</span></p>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="head">Australia</TableCell>
							<TableCell>
								<p>October 23, 1998 <span className='small'>(Game Boy)</span></p>
								<p>February 27, 2016 <span className='small'>(3DS VC)</span></p>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="head">Europe</TableCell>
							<TableCell>
								<p>October 5, 1999 <span className='small'>(Game Boy)</span></p>
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