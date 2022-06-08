import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "./theme";

const Home = lazy(() => import("./routes/Home"));
const Pokedex = lazy(() => import("./routes/Pokedex"));
const Pokemon = lazy(() => import("./routes/Pokemon"));
const Gradients = lazy(() => import("./routes/Gradients"));

export default function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="gradients" element={<Gradients />} />
                <Route path="pokedex">
                  <Route path=":pokedex">
                    <Route index element={<Pokedex />} />
                    <Route path=":pokedexId">
                      <Route index element={<Pokemon />} />
                      <Route path=":pokedexAltId" element={<Pokemon />} />
                    </Route>
                  </Route>
                </Route>
              </Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}







// import React, { useState, useEffect } from "react";

// const App = () => {
// 	const [national, setNational] = useState([])
// 	const [gen1, setGen1] = useState([])

// 	useEffect(() => {
// 		const getAPI = async () => {
// 			const fetchedNational = await fetch('/api/data', {
// 					method: 'GET',
// 					credentials: 'same-origin',
// 			})
// 			const read = await fetchedNational.json()
// 			setNational(read.national)
// 			setGen1(read.gen1)
// 		}
		
// 		getAPI()

// 	}, [])

// 	return (
// 		<>
// 			{national.map((pokemon, i) => (
// 				<div key={i}>
// 						<img style={{ width: "100px" }} src={pokemon.values.artwork} alt={`${pokemon.values.name} artwork`} />
// 						<p>{pokemon.values.national} | {pokemon.values.name}</p>
// 						{gen1
// 							.filter(poke => poke.values.name === pokemon.values.name)
// 							.map((poke, i) => (
// 								<div key={i}>{poke.values.type1} | {poke.values.type2}</div>
// 							))}
// 				</div>
// 			))}
// 		</>
// 	)
// }

// export default App