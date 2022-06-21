import React from "react";
import { useParams } from "react-router-dom";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';

import Header from "../components/Header";
import Footer from "../components/Footer";
import { GetDex } from '../utils/GetDex';
import { ChooseDex, formatDexNum, totalStats } from '../utils/utils';

const Pokedex = () => {
	const params = useParams();

	const dex = ChooseDex(params.game).dex;
	const dexTitle = ChooseDex(params.game).dexTitle;
	const primary = ChooseDex(params.game).primary;

	const getDex = GetDex(dex);

	let latestDex;
	if(dex === 'national') { latestDex = GetDex('gen8') };

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
							<Card key={p.id} className="pokemon">
								<Link href={`/${params.game}/pokedex/${formatDexNum(p[primary])}`} underline="none">
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
											{dex === 'national'
												? latestDex
													.filter(a => a.national === p.national)
													.map((p2, i) => (
														<Box key={i} className="stats">
															<Box>
																<h5>HP</h5>
																<p>{p2.hp}</p>
															</Box>
															<Box>
																<h5>Att</h5>
																<p>{p2.att}</p>
															</Box>
															<Box>
																<h5>Def</h5>
																<p>{p2.def}</p>
															</Box>
															<Box>
																<h5>Sp.A</h5>
																<p>{p2.spAtt}</p>
															</Box>
															<Box>
																<h5>Sp.D</h5>
																<p>{p2.spDef}</p>
															</Box>
															<Box>
																<h5>Spd</h5>
																<p>{p2.spd}</p>
															</Box>
															<Box>
																<h5>Total</h5>
																<p>{totalStats(p2.hp, p2.att, p2.def, p2.spAtt, p2.spDef, p2.spd)}</p>
															</Box>
														</Box>
													)
												) : (
													<Box className="stats">
														<Box>
															<h5>HP</h5>
															<p>{p.hp}</p>
														</Box>
														<Box>
															<h5>Att</h5>
															<p>{p.att}</p>
														</Box>
														<Box>
															<h5>Def</h5>
															<p>{p.def}</p>
														</Box>
														
														{dex === 'gen1'
															?	(
																<Box>
																	<h5>Sp</h5>
																	<p>{p.sp}</p>
																</Box>
															) : (
																<>
																	<Box>
																		<h5>Sp.A</h5>
																		<p>{p.spAtt}</p>
																	</Box>
																	<Box>
																		<h5>Sp.D</h5>
																		<p>{p.spDef}</p>
																	</Box>
																</>
															)
														}

														<Box>
															<h5>Spd</h5>
															<p>{p.spd}</p>
														</Box>

														<Box>
															<h5>Total</h5>
															{dex === 'gen1'
																? <p>{totalStats(p.hp, p.att, p.def, p.sp, p.spd)}</p>
																: <p>{totalStats(p.hp, p.att, p.def, p.spAtt, p.spDef, p.spd)}</p>
															}
														</Box>
													</Box>
												)
											}
											
										</Box>
									</CardContent>
								</Link>
							</Card>
						))}
				</Box>
			</Container>


			<Footer />
		</Box>
	)
}

export default Pokedex;