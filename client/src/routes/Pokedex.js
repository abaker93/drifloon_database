import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';

import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GetDex } from '../utils/GetDex';
import { ChooseDex, formatDexNum, totalStats } from '../utils/utils';

const Pokedex = () => {
	const params = useParams();

	const dex = ChooseDex(params.game).dex;
	const dexTitle = ChooseDex(params.game).dexTitle;
	// const gameTitle = ChooseDex(params.game).gameTitle;
	const primary = ChooseDex(params.game).primary;
	const artwork = ChooseDex(params.game).artwork;

	const getDex = GetDex(dex);
	// const latestDex = GetDex('gen8');

	return (
		<Box id="Pokedex">
			<Header />
			
			<Container maxWidth="xl" sx={{ mt: 10 }}>
				<Box>
					<h1>{dexTitle} Pokédex</h1>
				</Box>
			</Container>

			<Container maxWidth="xl" sx={{ mt: 10 }}>
				<Box className="pokedex">
					{getDex.map(p => (
						<Link key={p.id} className="pokemon" href={`/${params.game}/pokedex/${formatDexNum(p[primary])}`} underline="none">
							<Card>
								<CardContent>
									<img src={p[artwork]} alt={p.name} />
									<Box className="info">
										<p><span className="no">No.</span>{formatDexNum(p[primary])}</p>
										<h3>{p.name}</h3>
										<Box className="types">
											<Chip label={p.type1} size="small" />
											{p.type2 ? <Chip label={p.type2} size="small" /> : null}
										</Box>
										<Box className="stats">
											<Box>
												<p>HP</p>
												<p>{p.hp}</p>
											</Box>
											<Box>
												<p>Att</p>
												<p>{p.att}</p>
											</Box>
											<Box>
												<p>Def</p>
												<p>{p.def}</p>
											</Box>
											
											<Box>
												<p>Sp.A</p>
												<p>{p.spAtt}</p>
											</Box>
											<Box>
												<p>Sp.D</p>
												<p>{p.spDef}</p>
											</Box>

											<Box>
												<p>Spd</p>
												<p>{p.spd}</p>
											</Box>

											<Box>
												<p>Total</p>
												<p>{totalStats(p.hp, p.att, p.def, p.spAtt, p.spDef, p.spd)}</p>
											</Box>
										</Box>
									</Box>
								</CardContent>
							</Card>
						</Link>
					))}
				</Box>
			</Container>


			<Footer />
		</Box>
	)
}

export default Pokedex;