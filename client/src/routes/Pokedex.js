import React from "react";
import { useSearchParams, useParams } from "react-router-dom";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';

import Header from "../components/Header";
import Footer from "../components/Footer";

import { ChooseDex } from "../utils/ChooseDex";
import { GetDex } from '../utils/GetDex';
import { formatDexNum, totalStats } from '../utils/utils';

const Pokedex = () => {
	const params = useParams();
	// const [searchParams, setSearchParams] = useSearchParams();

	// console.log(typeParam)

	let dex;
	const dexTitle = ChooseDex(params.game).dexTitle;
	const primary = ChooseDex(params.game).primary;

	// const getDex = GetDex(dex);

	// let latestDex;
	// if(dex === 'national') { latestDex = GetDex('gen8') };

	let getDex;
	if (params.game === 'national') {
		dex = 'gen8'
		getDex = GetDex(dex);
	} else {
		dex = ChooseDex(params.game).dex;
		getDex = GetDex(dex);
	};

	return (
		<Box id="Pokedex">
			<Header />
			
			<Container maxWidth="xl" sx={{ mt: 10 }}>
				<Box>
					<h1>{dexTitle} Pokédex</h1>
				</Box>
			</Container>

			<Container maxWidth="xl" sx={{ mt: 4 }}>
				<Box className="pokedex">
					{getDex
						.filter(a => a[primary])
						.sort((a, b) => a[primary] - b[primary])
						.map(p => (
							<Link key={p.id} href={`/${params.game}/pokedex/${formatDexNum(p[primary])}`} underline="none">
								<Card className="pokemon typeGradient clickable" data-type-one={p.type1} data-type-two={p.type2 ? p.type2 : ''} elevation={0}>
									<CardContent>
										<img src={p.artwork} alt={p.name} />
										<Box className="info">
											<Box className="title">
												<h4><span className="no">No.</span>{formatDexNum(p[primary])}</h4>
												<h3>{p.name}</h3>
											</Box>
											<Box className="types">
												<Chip label={p.type1} size="small" data-type={p.type1} />
												{p.type2 ? <Chip label={p.type2} size="small" data-type={p.type2} /> : null}
											</Box>
											<Box className="stats">
												<Box>
													<h5>HP</h5>
													<p>{p.stats.hp.base}</p>
												</Box>
												<Box>
													<h5>Att</h5>
													<p>{p.stats.att.base}</p>
												</Box>
												<Box>
													<h5>Def</h5>
													<p>{p.stats.def.base}</p>
												</Box>
											
												{dex === 'gen1'
													?	(
														<Box>
															<h5>Sp</h5>
															<p>{p.stats.sp.base}</p>
														</Box>
													) : (
														<>
															<Box>
																<h5>Sp.A</h5>
																<p>{p.stats.spAtt.base}</p>
															</Box>
															<Box>
																<h5>Sp.D</h5>
																<p>{p.stats.spDef.base}</p>
															</Box>
														</>
													)
												}

												<Box>
													<h5>Spd</h5>
													<p>{p.stats.spd.base}</p>
												</Box>

												<Box>
													<h5>Total</h5>
													{dex === 'gen1'
														? <p>{totalStats(p.stats.hp.base, p.stats.att.base, p.stats.def.base, p.stats.sp.base, p.stats.spd.base)}</p>
														: <p>{totalStats(p.stats.hp.base, p.stats.att.base, p.stats.def.base, p.stats.spAtt.base, p.stats.spDef.base, p.stats.spd.base)}</p>
													}
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