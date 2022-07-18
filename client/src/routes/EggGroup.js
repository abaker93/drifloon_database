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

import Header from '../components/Header';
import Footer from '../components/Footer';
import EggGroupPokemon from '../components/EggGroupPokemon';

import { GetEggGroup } from '../utils/GetEggGroup';

const EggGroup = () => {
	const params = useParams();

	const eggGroup = GetEggGroup(params.eggGroup) ;
	console.log(eggGroup)

	return (
		<Box id="EggGroup">
			<Header />

				{eggGroup.map((e, i) => (
					<Box key={i}>
						
						<Container className="title" maxWidth="xl" sx={{ mt: 10 }}>
							<h1>{e.eggGroup}</h1>
						</Container>
						
						<Container className="description" maxWidth="xl" sx={{ mt: 4 }}>
							<Card>
								<CardContent>
									<p>{e.description}</p>
								</CardContent>
							</Card>
						</Container>
						
						<Container className="pokemon" maxWidth="xl" sx={{ mt: 4}}>
							{e.gen8EggGroups ? (
								<Box>
									<h2>Pokémon in {e.eggGroup} Egg Group</h2>
									<TableContainer>
										<Table size="small">
											<TableHead>
												<TableRow>
													<TableCell sx={{ width: 20 }}>#</TableCell>
													<TableCell>Name</TableCell>
													<TableCell sx={{ width: 150 }}>Type</TableCell>
													<TableCell>Other Group</TableCell>
												</TableRow>
											</TableHead>
											<TableBody>
												{e.gen8EggGroups.map((d, i) => (
													<EggGroupPokemon key={i} dex="gen8" pokemon={d} eggGroup={e.eggGroup} />
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

export default EggGroup;