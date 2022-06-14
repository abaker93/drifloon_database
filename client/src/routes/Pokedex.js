import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const Pokedex = () => {
	const params = useParams();
	// console.log(params.game)

	let dex = 'national';

	switch(params.game) {
		case 'national':
			dex = 'national';
			break;
		case 'red-blue':
			dex = 'gen1'
			break;
		case 'yellow':
			dex = 'gen1'
			break;
		default:
			dex = 'national'
	}

	const [data, setData] = useState([])

	useEffect(() => {
		const getData = async () => {
			const fetchedData = await fetch(`/api/${dex}`, { method: 'GET' })
			const read = await fetchedData.json()
			setData(read)
		}
		getData()
	}, [dex])

	return (
		<>
			<Header />
			
			<Container maxWidth="xl" sx={{ mt: 10 }}>
				<Box>
					<h1>Pokedex</h1>
					{data.length
						? data.map((poke, i) => (
							<Box key={i}>
								<img style={{ width: '100px' }} src={poke.artwork} alt={poke.name} />
							</Box>
						)) : null}
				</Box>
			</Container>

			<Footer />
		</>
	)
}

export default Pokedex;