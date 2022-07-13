import React from "react";
import { useParams } from "react-router-dom";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Header from "../components/Header";
import Footer from "../components/Footer";
import { NationalInfo } from './gameRoutes/National';
import { RedBlueInfo } from './gameRoutes/RedBlue';
import { YellowInfo } from './gameRoutes/Yellow';

import { ChooseDex } from "../utils/ChooseDex";
import { GetDex } from '../utils/GetDex';
import { formatDexNum } from '../utils/utils';

const Game = () => {
	const params = useParams();

	const dex = ChooseDex(params.game).dex;
	const dexTitle = ChooseDex(params.game).dexTitle;
	const gameTitle = ChooseDex(params.game).gameTitle;
	const primary = ChooseDex(params.game).primary;
	const artwork = ChooseDex(params.game).artwork;

	const getDex = GetDex(dex);

	return (
		<Box id="Game">
			<Header />
				
				<Container maxWidth="xl" sx={{ mt: 10 }}>
					<Box>
						<h1>{gameTitle}</h1>
					</Box>
				</Container>

				<Container maxWidth="xl" sx={{ mt: 4 }}>
					<Box>
						<Link href={`/${params.game}/pokedex`} underline="none">
							<Card>
								<CardContent>
									<h2>Pokédex</h2>
								</CardContent>
							</Card>
						</Link>
						<Link href={`/${params.game}/moves`} underline="none">
							<Card>
								<CardContent>
									<h2>Moves</h2>
								</CardContent>
							</Card>
						</Link>
						<Link href={`/${params.game}/locations`} underline="none">
							<Card>
								<CardContent>
									<h2>Locations</h2>
								</CardContent>
							</Card>
						</Link>
					</Box>
				</Container>

				<Container maxWidth="xl" sx={{ mt: 4 }}>
					<Box>
						{params.game === "national" ? (<NationalInfo />)
							: params.game === "red-blue" ? (<RedBlueInfo />)
							: params.game === "yellow" ? (<YellowInfo />)
							: (<NationalInfo />)}
					</Box>
				</Container>

				<Container maxWidth="xl" sx={{ mt: 4 }}>
					<Box>
						<h2>{dexTitle} Pokédex</h2>
					</Box>
					<Box className='pokedex'>
						{getDex
							.filter(a => a[primary])
							.sort((a, b) => a[primary] - b[primary])
							.map(p => (
								<Link key={p.id} className='pokemon' href={`/${params.game}/pokedex/${formatDexNum(p[primary])}`} underline="none">
									<Box>
										<img src={p[artwork]} alt={p.name} />
										<p><span className="no">No.</span> {formatDexNum(p[primary])}</p>
										<h3>{p.name}</h3>
										<div className="types">
											<p><span data-type={p.type1}>{p.type1}</span>{p.type2 ? <><span className="divider">&bull;</span><span data-type={p.type2}>{p.type2}</span></> : null}</p>
										</div>
									</Box>
								</Link>
							))
						}
					</Box>
				</Container>

			<Footer />
		</Box>
	)
}

export default Game;