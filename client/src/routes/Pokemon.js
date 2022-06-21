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
import { GetPoke } from '../utils/GetPoke';
import { ChooseDex, formatDexNum, totalStats } from '../utils/utils';

const Pokemon = () => {
	const params = useParams()

	const dex = ChooseDex(params.game).dex;
	const primary = ChooseDex(params.game).primary;
	const pokedexId = parseInt(params.pokedexId);

	console.log(dex)
	console.log(primary)
	console.log(pokedexId)

	const getPoke = GetPoke(dex, primary, pokedexId);

	return (
		<>
			<Header />

			<Container maxWidth="xl" sx={{ mt: 10 }}>
				<Box>
					<h1>Pokemon Route</h1>
				</Box>
			</Container>

			<Container maxWidth="xl" sx={{ mt: 4 }}>
				<Box>
					{getPoke.map((p, i) => (
						<Box key={i}>
							<p>{p.name}</p>
						</Box>
					))}
				</Box>
			</Container>

			<Footer />
		</>
	)
}

export default Pokemon;