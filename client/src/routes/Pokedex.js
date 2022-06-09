import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const Pokedex = () => {
	const params = useParams();

	console.log(params)

	return (
		<>
			<Header />
			
			<Container maxWidth="xl" sx={{ mt: 10 }}>
				<Box>
					<h1>Pokedex</h1>
				</Box>
			</Container>

			<Footer />
		</>
	)
}

export default Pokedex;