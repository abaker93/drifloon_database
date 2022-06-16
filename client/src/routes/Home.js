import React from 'react';

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from '@mui/material/Link';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Chip from "@mui/material/Chip";

import { generations, games, typesArray } from '../utils/arrays';
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {
	return (
		<Box id="Home">
			<Header />

			<Container maxWidth="xl" sx={{ mt: 10 }}>
				<Box>
					<h1>Drifloon Database</h1>
				</Box>
			</Container>

			<Container maxWidth="xl" sx={{ mt: 4 }}>
				<Box>
					<h2>Quick Links</h2>
					<Link href="/national/pokedex" underline="none">
						<Card className="clickable quicklink" data-type-one="fighting">
							<CardActionArea>
								<CardContent>National Pokédex</CardContent>
							</CardActionArea>
						</Card>
					</Link>
					<Link href="/sword-shield/pokedex" underline="none">
						<Card className="clickable quicklink" data-type-one="bug" sx={{ mt: 3 }}>
							<CardActionArea>
								<CardContent>Sword & Shield Pokédex</CardContent>
							</CardActionArea>
						</Card>
					</Link>
					<Link href="/brilliant-diamond-shining-pearl/pokedex" underline="none">
						<Card className="clickable quicklink" data-type-one="water" sx={{ mt: 3 }}>
							<CardActionArea>
								<CardContent>BD & SP Pokédex</CardContent>
							</CardActionArea>
						</Card>
					</Link>
					<Link href="/legends-arceus/pokedex" underline="none">
						<Card className="clickable quicklink" data-type-one="dark" sx={{ mt: 3 }}>
							<CardActionArea>
								<CardContent>Legends: Arceus Pokédex</CardContent>
							</CardActionArea>
						</Card>
					</Link>
					<Link href="/type-chart" underline="none">
						<Card className="clickable quicklink" data-type-one="ice" sx={{ mt: 3 }}>
							<CardActionArea>
								<CardContent>Type Chart</CardContent>
							</CardActionArea>
						</Card>
					</Link>
					<Link href="/moves" underline="none">
						<Card className="clickable quicklink" data-type-one="poison" sx={{ mt: 3 }}>
							<CardActionArea>
								<CardContent>Moves</CardContent>
							</CardActionArea>
						</Card>
					</Link>
					<Link href="/shiny" underline="none">
						<Card className="clickable quicklink" data-type-one="fire" sx={{ mt: 3 }}>
							<CardActionArea>
								<CardContent>Shiny Pokémon</CardContent>
							</CardActionArea>
						</Card>
					</Link>
					<Link href="pokemon-go/pokedex" underline="none">
						<Card className="clickable quicklink" data-type-one="steel" sx={{ mt: 3 }}>
							<CardActionArea>
								<CardContent>Pokémon Go Pokédex</CardContent>
							</CardActionArea>
						</Card>
					</Link>
				</Box>
			</Container>

			<Container maxWidth="xl" sx={{ mt: 4 }}>
				<Box>
					<h2>Pokémon by Pokédex</h2>
					<Box>
						<Chip
							label="National Dex"
							color="primary"
							clickable
							sx={{ mr: 1, mb: 1 }}
						/>
						{generations.map((gen, i) => {
							return (
								<Chip
									key={i}
									label={gen}
									color="primary"
									clickable
									sx={{ mr: 1, mb: 1 }}
								/>
							)
						})}
					</Box>
				</Box>
			</Container>

			<Container maxWidth="xl" sx={{ mt: 4 }}>
				<Box>
					<h2>Pokémon by Game</h2>
					<Box>
						{games.map((game, i) => {
							return (
								<Link href="" underline="none">
									<Chip
										key={i}
										label={game}
										color="primary"
										clickable
										sx={{ mr: 1, mb: 1 }}
									/>
								</Link>
							)
						})}
					</Box>
				</Box>
			</Container>

			<Container maxWidth="xl" sx={{ mt: 4 }}>
				<Box>
					<h2>Pokémon by Type</h2>
					<Box>
						{typesArray.map((type, i) => {
							return (
								<Chip
									key={i}
									label={type}
									data-type-one={type}
									clickable
									sx={{ mr: 1, mb: 1 }}
								/>
							)
						})}
					</Box>
				</Box>
			</Container>

			<Container maxWidth="xl" sx={{ mt: 4 }}>
				<Box>
					<h2>Most Recent Updates</h2>
				</Box>
			</Container>

			<Container maxWidth="xl" sx={{ mt: 4 }}>
				<Box>
					<h2>Project Notes</h2>
					<Card className="projectNotes">
						<CardActionArea>
							<CardContent>
								<h3>Drifloon Database is Making Moves!</h3>
								<p><strong>We moved.</strong> Drifloon Database 1.0 was built using Airtable as the backend/API. Recently Google's Tables project was launched. While still in beta, it's a cheaper version of Airtable that is exactly what this project needs. So, now Drifloon Database is built on Node, React, and Tables!</p>
							</CardContent>
						</CardActionArea>
					</Card>
				</Box>
			</Container>

			<Footer />

		</Box>
	)
}

export default Home