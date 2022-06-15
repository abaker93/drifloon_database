import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Chip from '@mui/material/Chip';

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { GetDex } from '../utils/GetDex';
import { ChooseDex, formatDexNum, totalStats } from '../utils/utils';

const Pokedex = () => {
	const params = useParams();

	const dex = ChooseDex(params.game).dex;
	const dexTitle = ChooseDex(params.game).dexTitle;

	const getDex = GetDex(dex);
	const latestDex = GetDex('gen8');

	return (
		<>
			<Header />
			
			<Container maxWidth="xl" sx={{ mt: 10 }}>
				<Box>
					<h1>{dexTitle} Pokédex</h1>
				</Box>
			</Container>

			<Container maxWidth='xl' sx={{ mt: 4 }}>
				<Box>
					{getDex.map((p) => (
						<Box key={p.id}>
							<img style={{ width: '100px' }} src={p.artwork} alt={p.name} />
							<p><span className="no">No.</span> {formatDexNum(p.national)}</p>
							<h2>{p.name}</h2>
							{dex==='national'
								? latestDex
									.filter(pName => pName.name === p.name)
									.map(poke => (
										<div key={poke.id}>
											<div>
												<Chip label={poke.type1} size="small" />
												{poke.type2 ? <Chip label={poke.type2} size="small" /> : null}
											</div>
											<div>
												<div>
													<p>HP</p>
													<p>{poke.hp}</p>
												</div>
												<div>
													<p>Att</p>
													<p>{poke.att}</p>
												</div>
												<div>
													<p>Def</p>
													<p>{poke.def}</p>
												</div>
												<div>
													<p>Sp.A</p>
													<p>{poke.spAtt}</p>
												</div>
												<div>
													<p>Sp.D</p>
													<p>{poke.spDef}</p>
												</div>
												<div>
													<p>Spd</p>
													<p>{poke.spd}</p>
												</div>
												<div>
													<p>Total</p>
													<p>{totalStats(poke.hp, poke.att, poke.def, poke.spAtt, poke.spDef, poke.spd)}</p>
												</div>
											</div>
										</div>
									))
								: 'not national'
							}
						</Box>
					))}
				</Box>
			</Container>

			<Footer />
		</>
	)
}

export default Pokedex;