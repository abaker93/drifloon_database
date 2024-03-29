import React from 'react';
import { useParams } from 'react-router-dom';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Chip from '@mui/material/Chip';

import Header from '../components/Header';
import Footer from '../components/Footer';
import AbilityPokemon from '../components/AbilityPokemon';

import { GetAbility } from '../utils/GetAbility';

const Ability = () => {
	const params = useParams();

	const ability = GetAbility(params.ability) ;

	return (
		<Box id="Ability">
			<Header />

				{ability.map((a, i) => (
					<Box key={i}>
						
						<Container className="title" maxWidth="xl" sx={{ mt: 10 }}>
							<h1>{a.ability}</h1>
						</Container>
						
						<Container className="effect" maxWidth="xl" sx={{ mt: 4 }}>
							<Card>
								<CardContent>
									<p>{a.effect}</p>
								</CardContent>
							</Card>
						</Container>

						<Container className="description" maxWidth="xl" sx={{ mt: 4}}>
							<h2>Game Descriptions</h2>
							{a.gen3Description ? (
								<Box>
									<h3><span className="game ruby">Ruby</span>/<span className='game sapphire'>Sapphire</span></h3>
									<h3><span className="game fireRed">FireRed</span>/<span className="game leafGreen">LeafGreen</span></h3>
									<h3><span className='game emerald'>Emerald</span></h3>
									<p>{a.gen3Description}</p>
								</Box>
							) : null }

							{a.gen4Description ? (
								<Box>
									<h3><span className="game diamond">Diamond</span>/<span className="game pearl">Pearl</span></h3>
									<h3><span className="game platinum">Platinum</span></h3>
									<h3><span className="game heartGold">Heart Gold</span>/<span className="game soulSilver">Soul Silver</span></h3>
									<p>{a.gen4Description}</p>
								</Box>
							) : null }

							{a.gen5Description ? (
								<Box>
									<h3><span className="game blackGame">Black</span>/<span className="game whiteGame">White</span></h3>
									<h3><span className="game black2">Black 2</span>/<span className="game white2">White 2</span></h3>
									<p>{a.gen5Description}</p>
								</Box>
							) : null }

							{a.gen6Description ? (
								<Box>
								<h3><span className="game x">X</span>/<span className="game y">Y</span></h3>
								<h3><span className="game omegaRuby">Omega Ruby</span>/<span className="game alphaSapphire">Alpha Sapphire</span></h3>
									<p>{a.gen6Description}</p>
								</Box>
							) : null }
							
							{a.gen7Description ? (
								<Box>
									<h3><span className="game sun">Sun</span>/<span className="game moon">Moon</span></h3>
									<h3><span className="game ultraSun">Ultra Sun</span>/<span className="game ultraMoon">Ultra Moon</span></h3>
									<p>{a.gen7Description}</p>
								</Box>
							) : null }
							
							{a.gen8Description ? (
								<Box>
									<h3><span className="game sword">Sword</span>/<span className="game shield">Shield</span></h3>
									<h3><span className="game brilliantDiamond">Brilliant Diamond</span>/<span className="game shiningPearl">Shining Pearl</span></h3>
									<p>{a.gen8Description}</p>
								</Box>
							) : null }
							
							{a.gen9Description ? (
								<Box>
									<h3>Ruby/Sapphire</h3>
									<p>{a.gen9Description}</p>
								</Box>
							) : null }
						</Container>

						<Container className="translations" maxWidth="xl" sx={{ mt: 4}}>
							<h2>Translations</h2>
							<Box>
								<Chip label="English" />
								<p>{a.ability}</p>
								<Chip label="Japanese" />
								<p>{a.japanese} ({a.japaneseKata})</p>
								<Chip label="German" />
								<p>{a.german}</p>
								<Chip label="French" />
								<p>{a.french}</p>
								<Chip label="Italian" />
								<p>{a.italian}</p>
								<Chip label="Spanish" />
								<p>{a.spanish}</p>
							</Box>
						</Container>
						
						<Container className="pokemon" maxWidth="xl" sx={{ mt: 4}}>
							{a.gen8Abilities ? (
								<Box>
									<h2>Pokémon with {a.ability}</h2>
									<TableContainer>
										<Table size="small">
											<TableHead>
												<TableRow>
													<TableCell sx={{ width: 20 }}>#</TableCell>
													<TableCell>Name</TableCell>
													<TableCell>2nd Ability</TableCell>
													<TableCell>Hidden Ability</TableCell>
												</TableRow>
											</TableHead>
											<TableBody>
												{a.gen8Abilities.map((d, i) => (
													<AbilityPokemon key={i} dex="gen8" pokemon={d} ability={a.ability} type="ability" />
												))}
											</TableBody>
										</Table>
									</TableContainer>
								</Box>
							) : null}
						</Container>

						<Container className="pokemon" maxWidth="xl" sx={{ mt: 4}}>
							{a.gen8HiddenAbilities ? (
								<Box>
									<h2>Pokémon with {a.ability} as a Hidden Ability</h2>
									<TableContainer>
										<Table size="small">
											<TableHead>
												<TableRow>
													<TableCell sx={{ width: 20 }}>#</TableCell>
													<TableCell>Name</TableCell>
													<TableCell>Other Abilities</TableCell>
												</TableRow>
											</TableHead>
											<TableBody>
												{a.gen8HiddenAbilities.map((d, i) => (
													<AbilityPokemon key={i} dex="gen8" pokemon={d} ability={a.ability} type="hidden" />
												))}
											</TableBody>
										</Table>
									</TableContainer>
								</Box>
							) : null}
						</Container>

					</Box>
				))}
				
			<Footer />
		</Box>
	)
}

export default Ability;