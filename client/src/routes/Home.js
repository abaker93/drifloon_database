import React from 'react';

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from '@mui/material/Link';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Chip from "@mui/material/Chip";

import { games, typesArray } from '../utils/arrays';
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
					<Box sx={{ mb: 1 }}>
						<h2>Quick Links</h2>
					</Box>
					<Link href="/national/pokedex" underline="none">
						<Card className="clickable quicklink" data-type="fighting" elevation="0">
							<CardActionArea>
								<CardContent>National Pokédex</CardContent>
							</CardActionArea>
						</Card>
					</Link>
					<Link href="/sword-shield/pokedex" underline="none">
						<Card className="clickable quicklink" data-type="bug" elevation="0" sx={{ mt: 2 }}>
							<CardActionArea>
								<CardContent>Sword & Shield Pokédex</CardContent>
							</CardActionArea>
						</Card>
					</Link>
					<Link href="/brilliant-diamond-shining-pearl/pokedex" underline="none">
						<Card className="clickable quicklink" data-type="water" elevation="0" sx={{ mt: 2 }}>
							<CardActionArea>
								<CardContent>BD & SP Pokédex</CardContent>
							</CardActionArea>
						</Card>
					</Link>
					<Link href="/legends-arceus/pokedex" underline="none">
						<Card className="clickable quicklink" data-type="dark" elevation="0" sx={{ mt: 2 }}>
							<CardActionArea>
								<CardContent>Legends: Arceus Pokédex</CardContent>
							</CardActionArea>
						</Card>
					</Link>
					<Link href="/type-chart" underline="none">
						<Card className="clickable quicklink" data-type="ice" elevation="0" sx={{ mt: 2 }}>
							<CardActionArea>
								<CardContent>Type Chart</CardContent>
							</CardActionArea>
						</Card>
					</Link>
					<Link href="/moves" underline="none">
						<Card className="clickable quicklink" data-type="poison" elevation="0" sx={{ mt: 2 }}>
							<CardActionArea>
								<CardContent>Moves</CardContent>
							</CardActionArea>
						</Card>
					</Link>
					<Link href="/shiny" underline="none">
						<Card className="clickable quicklink" data-type="fire" elevation="0" sx={{ mt: 2 }}>
							<CardActionArea>
								<CardContent>Shiny Pokémon</CardContent>
							</CardActionArea>
						</Card>
					</Link>
					<Link href="pokemon-go/pokedex" underline="none">
						<Card className="clickable quicklink" data-type="steel" elevation="0" sx={{ mt: 2 }}>
							<CardActionArea>
								<CardContent>Pokémon Go Pokédex</CardContent>
							</CardActionArea>
						</Card>
					</Link>
				</Box>
			</Container>

			<Container maxWidth="xl" sx={{ mt: 4 }}>
				<Box>
					<Box sx={{ mb: 1 }}>
						<h2>Pokédex by Game</h2>
					</Box>
					<Box>
						{games.map((game, i) => {
							return (
								<Link key={i} href={`./${game.url}/pokedex`} underline="none">
									<Chip
										label={game.title}
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
					<Box sx={{ mb: 1 }}>
						<h2>Pokémon by Game</h2>
					</Box>
					<Box>
						{typesArray.map((type, i) => {
							return (
								<Chip
									key={i}
									label={type}
									data-type={type}
									clickable
									sx={{ mr: 1, mb: 1 }}
								/>
							)
						})}
					</Box>
				</Box>
			</Container>

			{/* <Container maxWidth="xl" sx={{ mt: 4 }}>
				<Box>
					<h2>Most Recent Updates</h2>
				</Box>
			</Container> */}

			<Container maxWidth="xl" sx={{ mt: 4 }}>
				<Box>
					<h2>Project Notes</h2>
					<Card className="projectNotes" elevation="5">
						<CardContent>
							<h3>Drifloon Database is Making Moves!</h3>
							<p><strong>We moved.</strong> Drifloon Database 1.0 was built using Airtable as the backend/API. Recently Google's Tables project was launched. While still in beta, it's a cheaper version of Airtable that is exactly what this project needs. So, now Drifloon Database is built on Node, React, and Tables!</p>
						</CardContent>
					</Card>
				</Box>
			</Container>

			<Footer />

		</Box>
	)
}

export default Home