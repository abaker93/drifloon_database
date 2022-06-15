import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GetDex } from '../utils/GetDex';
import { ChooseDex, formatDexNum } from '../utils/utils';

const Game = () => {
	const params = useParams();

	const dex = ChooseDex(params.game).dex;
	const dexTitle = ChooseDex(params.game).dexTitle;
	const gameTitle = ChooseDex(params.game).gameTitle;
	const primary = ChooseDex(params.game).primary;
	const artwork = ChooseDex(params.game).artwork;

	const getDex = GetDex(dex);

	return (
		<React.Fragment id="Game">
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
						<h2>{dexTitle} Pokédex</h2>
					</Box>
					<Box className='pokedex'>
						{getDex.map(p => (
							<Link className='pokemon' href={`/${params.game}/pokedex/${formatDexNum(p[primary])}`} underline="none">
								<Box key={p.id}>
									<img src={p[artwork]} alt={p.name} />
									<p><span className="no">No.</span> {formatDexNum(p[primary])}</p>
									<h3>{p.name}</h3>
									<div className="types">
										<p>{p.type1}</p>{p.type2 ? <p><span>&bull;</span>{p.type2}</p> : null}
									</div>
								</Box>
							</Link>
						))}
					</Box>
				</Container>

			<Footer />
		</React.Fragment>
	)
}

export default Game;