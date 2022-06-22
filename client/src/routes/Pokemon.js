import React from "react";
import { useParams } from "react-router-dom";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';

import InfoIcon from '@mui/icons-material/Info';

import Header from "../components/Header";
import Footer from "../components/Footer";
import PokemonError from '../components/PokemonError';
import { GetPoke } from '../utils/GetPoke';
import { ChooseDex, formatDexNum, totalStats } from '../utils/utils';

const Pokemon = () => {
	const params = useParams()

	let dex;
	const primary = ChooseDex(params.game).primary;
	const pokedexId = parseInt(params.pokedexId);

	let getPoke;
	if (params.game === 'national') {
		dex = 'gen8'
		getPoke = GetPoke(dex, 'national', pokedexId);
	} else {
		dex = ChooseDex(params.game).dex;
		getPoke = GetPoke(dex, primary, pokedexId);
	};

	return (
		<>
			<Header />

			{getPoke.length === 0
				? <PokemonError />
				: getPoke.map((p, i) => (
					<Box key={i}>

						<Container>
							<Box className="header">
								<p>{p.japaneseKata}</p>
								<img src={p.artwork} alt={p.name} />
							</Box>
						</Container>

						<Container maxWidth="xl" sx={{ mt: 4 }}>
							<h1><span><span className="no">No.</span>{formatDexNum(p[primary])}</span>{p.name}</h1>
							<p>{p.category}</p>
							<Box className="types">
								<Chip data-type={p.type1} label={p.type1} />
								{p.type2 ? <Chip data-type={p.type2} label={p.type2} /> : null}
							</Box>
						</Container>

						<Container maxWidth="xl" sx={{ mt: 4 }}>
							<h2>Stats</h2>
							<Box>
								<Box>{p.stats.hp.base}</Box>
								<Box>{p.stats.att.base}</Box>
								<Box>{p.stats.def.base}</Box>
								<Box>{p.stats.spAtt.base}</Box>
								<Box>{p.stats.spDef.base}</Box>
								<Box>{p.stats.spd.base}</Box>
							</Box>
							<Box>
								<Box>{p.stats.hp.base}</Box>
								<Box>{p.stats.att.base}</Box>
								<Box>{p.stats.def.base}</Box>
								<Box>{p.stats.spAtt.base}</Box>
								<Box>{p.stats.spDef.base}</Box>
								<Box>{p.stats.spd.base}</Box>
							</Box>
							<Box>
								<Box>{p.stats.hp.base}</Box>
								<Box>{p.stats.att.base}</Box>
								<Box>{p.stats.def.base}</Box>
								<Box>{p.stats.spAtt.base}</Box>
								<Box>{p.stats.spDef.base}</Box>
								<Box>{p.stats.spd.base}</Box>
							</Box>
							<Box>
								<Chip label="base" clickable />
								<Chip label="lvl 50" clickable />
								<Chip label="lvl 100" clickable />
								<IconButton aria-label="info">
									<InfoIcon />
								</IconButton>
							</Box>
						</Container>

						<Container maxWidth="xl" sx={{ mt: 4 }}>
							<h2>EVOLUTION</h2>
						</Container>

						<Container maxWidth="xl" sx={{ mt: 4 }}>
							<h2>Weaknesses</h2>
						</Container>

						<Container maxWidth="xl" sx={{ mt: 4 }}>
							<Box>
								{p.abilities.abilities.length > 1 ? <h2>Abilities</h2> : <h2>Ability</h2>}
								{p.abilities.urls.map((u, i) => (
									<Link key={i} href={u} underline="none">
										<Card>
											<CardContent>
												{p.abilities.abilities[i]}
											</CardContent>
										</Card>
									</Link>
								))}
							</Box>
							<Box>
								<h2>Hidden Ability</h2>
								<Link href={p.hiddenAbility.url} underline="none">
									<Card>
										<CardContent>
											{p.hiddenAbility.ability}
										</CardContent>
									</Card>
								</Link>
							</Box>
						</Container>

						<Container maxWidth="xl" sx={{ mt: 4 }}>
							<h2>Breeding</h2>
							<Box>
								{p.eggGroups.eggGroups.length > 1 ? <h2>Egg Groups</h2> : <h2>Egg Group</h2>}
								{p.eggGroups.urls.map((u, i) => (
									<Link key={i} href={u} underline="none">
										<Card>
											<CardContent>
												{p.eggGroups.eggGroups[i]}
											</CardContent>
										</Card>
									</Link>
								))}
							</Box>
							<Box>
								<h3>Egg Cycles</h3>
								<p>{p.eggCycles}</p>
							</Box>
						</Container>

						<Container maxWidth="xl" sx={{ mt: 4 }}>
							<h2>More Info</h2>
							<Box>
								<h3>Gender Ratio</h3>
								<p>{(p.MGendRatio * 100).toFixed(2)}%</p>
								<p>{(p.FGendRatio * 100).toFixed(2)}%</p>
							</Box>
							<Box>
								<h3>Height</h3>
								<p>{(p.height / 2.54).toFixed(2)}"</p>
								<p>{(p.height).toFixed(2)} cm</p>
							</Box>
							<Box>
								<h3>Weight</h3>
								<p>{(p.weight * 2.205).toFixed(2)} lb</p>
								<p>{(p.weight).toFixed(2)} kg</p>
							</Box>
							<Box>
								<h3>EV Yield</h3>
								{p.evYield.map((ev, i) => (
									<Chip label={ev} size="small" />
								))}
							</Box>
							<Box>
								<h3>Catch Rate</h3>
								<p>{p.catchRate}</p>
							</Box>
							<Box>
								<h3>Base Friendship</h3>
								<p>{p.baseFriendship}</p>
							</Box>
							<Box>
								<h3>Base Experience</h3>
								<p>{p.baseXP}</p>
							</Box>
							<Box>
								<h3>Growth Rate</h3>
								<p>{p.growthRate}</p>
							</Box>
						</Container>

						<Container maxWidth="xl" sx={{ mt: 4 }}>
							<h2>Text</h2>
							{dex === 'gen8'
								? (
									<Box>
										{p.galar || p.galarIOA || p.galarCT
											? (
												<>
													<Box>
														<h3>Sword</h3>
														{p.galar !== null ? <h6><span className="no">No.</span>{p.galar}</h6> : null}
														{p.galarIOA !== null ? <h6><span>Isle of Armor</span><span className="no">No.</span>{p.galarIOA}</h6> : null}
														{p.galarCT !== null ? <h6><span>Crown Tundra</span><span className="no">No.</span>{p.galarCT}</h6> : null}
														<p>{p.swordText}</p>
													</Box>
													<Box>
														<h3>Shield</h3>
														{p.galar !== null ? <h6><span className="no">No.</span>{p.galar}</h6> : null}
														{p.galarIOA !== null ? <h6><span>Isle of Armor</span><span className="no">No.</span>{p.galarIOA}</h6> : null}
														{p.galarCT !== null ? <h6><span>Crown Tundra</span><span className="no">No.</span>{p.galarCT}</h6> : null}
														<p>{p.shieldText}</p>
													</Box>
												</>
											) : null
										}
										{p.sinnoh
											? (
												<>
													<Box>
														<h3>Brilliant Diamond</h3>
														{p.sinnoh !== null ? <h6><span className="no">No.</span>{p.sinnoh}</h6> : null}
														<p>{p.brilliantDiamondText}</p>
													</Box>
													<Box>
														<h3>Shining Pearl</h3>
														{p.sinnoh !== null ? <h6><span className="no">No.</span>{p.sinnoh}</h6> : null}
														<p>{p.shiningPearlText}</p>
													</Box>
												</>
											) : null
										}
										{p.hisui
											? (
												<Box>
													<h3>Legends: Arceus</h3>
													{p.hisui !== null ? <h6><span className="no">No.</span>{p.hisui}</h6> : null}
													<p>{p.legendsArceusText}</p>
												</Box>
											) : null
										}
									</Box>
								)	: null
							}
						</Container>

						<Container maxWidth="xl" sx={{ mt: 4 }}>
							<h2>Locations</h2>
						</Container>

						<Container maxWidth="xl" sx={{ mt: 4 }}>
							<h2>Moves</h2>
							<h3>Level Up</h3>
							<h3>Egg Moves</h3>
						</Container>

						<Container maxWidth="xl" sx={{ mt: 4 }}>
							<h2>Level Up</h2>
						</Container>

						<Container maxWidth="xl" sx={{ mt: 4 }}>
							<h2>Names & Translations</h2>
						</Container>

					</Box>
				))
			}

			<Footer />
		</>
	)
}

export default Pokemon;