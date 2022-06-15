import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Chip from "@mui/material/Chip";

import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GetDex } from '../utils/GetDex';
import { ChooseDex, formatDexNum } from '../utils/utils';

const Game = () => {
	const params = useParams();

	const dex = ChooseDex(params.game).dex;
	const gameTitle = ChooseDex(params.game).gameTitle;

	const getDex = GetDex(dex);

	return (
		<>
			<Header />
				
				<Container maxWidth="xl" sx={{ mt: 10 }}>
					<Box>
						<h1>{gameTitle}</h1>
					</Box>
				</Container>

				<Container maxWidth="xl" sx={{ mt: 4 }}>
					<Box>
						{getDex.map(p => (
							<Link href={`/${params.game}/pokedex/${formatDexNum(p.national)}`} underline="none">
								<Box key={p.id}>
									<img style={{ width: '100px'}} src={p.artwork} alt={p.name} />
									<p><span className="no">No.</span> {formatDexNum(p.national)}</p>
									<h2>{p.name}</h2>
									<div>
										<Chip label={p.type1} size="small" />
										{p.type2 ? <Chip label={p.type2} size="small" /> : null}
									</div>
								</Box>
							</Link>
						))}
					</Box>
				</Container>

			<Footer />
		</>
	)
}

export default Game;