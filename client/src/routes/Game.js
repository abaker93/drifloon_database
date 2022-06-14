import React from "react";

import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Game = () => {
	const params = useParams();

	let paramsDex;

	const game = url => {
		switch(url) {
			case 'national':
				paramsDex = 'national';
				return 'National Pokédex';
			case 'red-blue':
				paramsDex = 'gen1';
				return 'Red & Blue';
			case 'yellow':
				paramsDex = 'gen1';
				return 'Yellow';
			default:
				paramsDex = 'national';
				return 'Not a valid game';
		}
	}

	console.log(paramsDex)
	
	// const [dex, setDex] = useState([])

	// useEffect(() => {
	// 	const getAPI = async () => {
	// 		const fetchedNational = await fetch('/api/data', {
	// 				method: 'GET',
	// 				// credentials: 'same-origin',
	// 		})
	// 		const read = await fetchedNational.json()
	// 		setDex(read.national)
	// 	}
		
	// 	getAPI()

	// })

	return (
		<>
			<Header />
				
				<Container maxWidth="xl" sx={{ mt: 10 }}>
					<Box>
						<h1>{game(params.game)}</h1>
					</Box>
				</Container>

				<Container maxWidth="xl" sx={{ mt: 4 }}>
					<Box>
						{/* {dex.map((pokemon, i) => (
							<div key={i}>
								<img style={{ width: '100px' }} src={pokemon.values.artwork} alt={`${pokemon.values.name}`} />
								<p>{pokemon.values.national} | {pokemon.values.name}</p>
								<p>{pokemon.values.type1} | {pokemon.values.type2}</p>
							</div>
						))} */}
					</Box>
				</Container>

			<Footer />
		</>
	)
}

export default Game;