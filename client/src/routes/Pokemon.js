import React from "react";
import { useParams } from "react-router-dom";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';

import InfoIcon from '@mui/icons-material/Info';

import Header from "../components/Header";
import Footer from "../components/Footer";
import PokemonError from '../components/PokemonError';

import Moves from '../components/Moves';

import { ChooseDex } from "../utils/ChooseDex";
import { GetPoke } from '../utils/GetPoke';
import { typesArray } from "../utils/arrays";
import { formatDexNum, formatURL, totalStats } from '../utils/utils';

const StatBar = (...params) => {
	const label = params[0].label;
	const min = params[0].min;
	const max = params[0].max;
	const bar = params[0].bar;

	return (
		<Box className={`statBarContainer ${label}`}>
			<div className="statLabel">{label}</div>
			{max === undefined ? (
				<div className="statNum">{min}</div>
			) : (
				<div className="statNum">{min}-{max}</div>
			)}
			<div className="statBar">
				{max === undefined ? (
					<div
						className="statBarFill"
						style={{ width: `calc((${min} / ${bar}) * 100%)` }} />
				) : (
					<div
						className="statBarFill"
						style={{
							left: `calc((${min} / ${bar}) * 100%)`,
							width: `calc(((${max} / ${bar}) - (${min} / ${bar})) * 100%)`
						}}
					/>
				)}
			</div>
		</Box>
	)
}

const Weakness = (...params) => {
	const attType = params[0].attType;
	const type1 = params[0].type1;
	const type2 = params[0].type2;

	const defense = [
		[1, 2, 1, 1, 0.5, 1, 0.5, 1, 0.5, 2, 1, 1, 2, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 2, 1, 0.5, 1, 0.5, 1, 2],
    [1, 0.5, 0.5, 0.5, 0.5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2],
    [1, 1, 1, 0.5, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 0.5, 1],
    [1, 1, 1, 1, 1, 1, 0.5, 2, 1, 1, 1, 0.5, 1, 1, 0, 0.5, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 0.5, 0.5, 1, 1, 0.5, 1, 2],
    [1, 0.5, 2, 1, 0.5, 0.5, 1, 1, 2, 1, 1, 0.5, 2, 1, 1, 1, 0.5, 0.5],
    [1, 1, 1, 2, 0.5, 2, 0.5, 1, 0, 1, 1, 0.5, 2, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 0, 0.5, 1, 1, 1, 0.5, 1, 2, 1, 2, 1, 1],
    [1, 2, 0.5, 0.5, 0.5, 2, 1, 2, 0.5, 2, 1, 2, 1, 1, 1, 1, 1, 1],
    [1, 1, 2, 0, 2, 2, 1, 0.5, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1],
    [1, 2, 1, 1, 1, 0.5, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 0.5, 1, 0.5, 0.5, 2, 1, 2, 0.5, 1, 1, 1, 1, 1, 0.5],
    [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 0.5, 2, 1, 2, 1, 2, 1, 1],
    [0.5, 0.5, 2, 1, 2, 1, 2, 0.5, 2, 0.5, 1, 1, 1, 1, 1, 1, 2, 1],
    [0.5, 2, 1, 1, 0.5, 0.5, 2, 0, 2, 1, 1, 0.5, 0.5, 1, 0.5, 1, 0.5, 0.5],
    [1, 0.5, 0.5, 2, 2, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1]
	];

	const calcWeakness = (attType, type1, type2) => {
		if (type2) {
			let calc =
				defense[typesArray.indexOf(type1)][typesArray.indexOf(attType)] *
				defense[typesArray.indexOf(type2)][typesArray.indexOf(attType)];
			if (calc === 0.5) {
				return '1/2';
			} else if ( calc === 0.25) {
				return '1/4';
			} else {
				return calc;
			}
		} else {
			let calc =
				defense[typesArray.indexOf(type1)][typesArray.indexOf(attType)];
			if (calc === 0.5) {
				return '1/2';
			} else if ( calc === 0.25) {
				return '1/4';
			} else {
				return calc;
			}
		}
	};

	return (
			<Chip
				className={`${attType} weakness`}
				data-type={attType}
				label={calcWeakness(attType, type1, type2)} />
	)
}

const Pokemon = () => {
	const params = useParams()

	let dex;
	const primary = ChooseDex(params.game).primary;
	const pokedexId = parseInt(params.pokedexId);

	let getPoke;
	if (params.game === 'national') {
		dex = 'gen8'
		getPoke = GetPoke(dex, 'national', pokedexId);
	} else {
		dex = ChooseDex(params.game).dex;
		getPoke = GetPoke(dex, primary, pokedexId);
	};

	let maxBaseBar = 252;
	// let max50Bar;
	let max100Bar;
	const Max100Bar = (...params) => max100Bar = Math.max(...params)

	const infoTooltip = "Maximum values are based on a beneficial nature, 252 EVs, 31 IVs; minimum values are based on a hindering nature, 0 EVs, 0 IVs."

	return (
		<Box id="Pokemon">
			<Header game={params.game} />

			{getPoke.length === 0
				? <PokemonError />
				: getPoke.map((p, i) => (
					<Box key={i} data-type-one={p.type1} data-type-two={p.type2}>

						<Container className="header typeGradient">
							<Box>
								<p className="japanese">{p.japaneseKata}</p>
								<img src={p.artwork} alt={`${p.name} artwork`} />
							</Box>
						</Container>

						<Container className="title" maxWidth="xl" sx={{ mt: 4 }}>
							<h1><span><span className="no">No.</span>{formatDexNum(p[primary])}</span>{p.name}</h1>
							<p className="category">{p.category}</p>
							<Box className="types">
								<Chip className="icon" data-type={p.type1} label={p.type1} />
								{p.type2 ? <Chip className="icon" data-type={p.type2} label={p.type2} /> : null}
							</Box>
						</Container>

						<Container className="stats" maxWidth="xl" sx={{ mt: 4 }} aria-label="stats">
							<TabsUnstyled defaultValue={0}>
								<TabPanelUnstyled value={0} className="base">
									<StatBar label="HP" group="base" min={p.stats.hp.base} bar={maxBaseBar} />
									<StatBar label="ATT" group="base" min={p.stats.att.base} bar={maxBaseBar} />
									<StatBar label="DEF" group="base" min={p.stats.def.base} bar={maxBaseBar} />
									<StatBar label="S.ATT" group="base" min={p.stats.spAtt.base} bar={maxBaseBar} />
									<StatBar label="S.DEF" group="base" min={p.stats.spDef.base} bar={maxBaseBar} />
									<StatBar label="SPD" group="base" min={p.stats.spd.base} bar={maxBaseBar} />
									<Box className="statBarContainer total">
										<div className="statLabel">TOTAL:</div>
										<div className="statNum">{totalStats(p.stats.hp.base, p.stats.att.base, p.stats.def.base, p.stats.spAtt.base, p.stats.spDef.base, p.stats.spd.base)}</div>
									</Box>
								</TabPanelUnstyled>
								<TabPanelUnstyled value={1} className="lvl100">
									<p className="hidden">{Max100Bar(p.stats.hp.max100, p.stats.att.max100, p.stats.def.max100, p.stats.spAtt.max100, p.stats.spDef.max100, p.stats.spd.max100)}</p>
									<StatBar label="HP" min={p.stats.hp.min100} max={p.stats.hp.max100} bar={max100Bar} />
									<StatBar label="ATT" min={p.stats.att.min100} max={p.stats.att.max100} bar={max100Bar} />
									<StatBar label="DEF" min={p.stats.def.min100} max={p.stats.def.max100} bar={max100Bar} />
									<StatBar label="S.ATT" min={p.stats.spAtt.min100} max={p.stats.spAtt.max100} bar={max100Bar} />
									<StatBar label="S.DEF" min={p.stats.spDef.min100} max={p.stats.spDef.max100} bar={max100Bar} />
									<StatBar label="SPD" min={p.stats.spd.min100} max={p.stats.spd.max100} bar={max100Bar} />
									<Box className="statBarContainer total">
										<div className="statLabel">TOTAL:</div>
										<div className="statNum">
											{totalStats(
												p.stats.hp.min100, p.stats.att.min100, p.stats.def.min100, p.stats.spAtt.min100, p.stats.spDef.min100, p.stats.spd.min100
											)}-{totalStats(
												p.stats.hp.max100, p.stats.att.max100, p.stats.def.max100, p.stats.spAtt.max100, p.stats.spDef.max100, p.stats.spd.max100
											)}
										</div>
									</Box>
								</TabPanelUnstyled>
								<TabsListUnstyled className="chipTabs">
									<TabUnstyled>
										<Chip label="Base" className="chipTab" clickable />
									</TabUnstyled>
									{/* <TabUnstyled>
										<Chip label="Lvl 50" className="chipTab" clickable />
									</TabUnstyled> */}
									<TabUnstyled>
										<Chip label="Lvl 100" className="chipTab" clickable />
									</TabUnstyled>
									<Tooltip title={infoTooltip} placement="bottom">
										<InfoIcon className="infoHover" aria-label="info" />
									</Tooltip>
								</TabsListUnstyled>
							</TabsUnstyled>
						</Container>

						<Container maxWidth="xl" sx={{ mt: 4 }}>
							<h2>EVOLUTION</h2>
						</Container>

						<Container className="weaknesses" maxWidth="xl" sx={{ mt: 4 }}>
							{typesArray.map((t, i) => (
								<Weakness key={i} attType={t} type1={p.type1} type2={p.type2} />
							))}
						</Container>

						<Container maxWidth="xl" sx={{ mt: 4 }}>
							<Box>
								{p.abilities.abilities.length > 1 ? <h2>Abilities</h2> : <h2>Ability</h2>}
								{p.abilities.abilities.map((a, i) => (
									<Link key={i} href={`/abilities/${formatURL(a)}`} underline="none">
										<Card>
											<CardContent>
												{a}
											</CardContent>
										</Card>
									</Link>
								))}
							</Box>
							<Box>
								<h2>Hidden Ability</h2>
								<Link href={`/abilities/${formatURL(p.hiddenAbility.ability)}`} underline="none">
									<Card>
										<CardContent>
											{p.hiddenAbility.ability}
										</CardContent>
									</Card>
								</Link>
							</Box>
						</Container>

						<Container maxWidth="xl" sx={{ mt: 4 }}>
							<h2>Breeding</h2>
							<Box>
								{p.eggGroups.eggGroups.length > 1 ? <h2>Egg Groups</h2> : <h2>Egg Group</h2>}
								{p.eggGroups.eggGroups.map((e, i) => (
									<Link key={i} href={`/egg-groups/${formatURL(e)}`} underline="none">
										<Card>
											<CardContent>
												{e}
											</CardContent>
										</Card>
									</Link>
								))}
							</Box>
							<Box>
								<h3>Egg Cycles</h3>
								<p>{p.eggCycles}</p>
							</Box>
						</Container>

						<Container maxWidth="xl" sx={{ mt: 4 }}>
							<h2>More Info</h2>
							<Box>
								<h3>Gender Ratio</h3>
								<p>{(p.MGendRatio * 100).toFixed(2)}%</p>
								<p>{(p.FGendRatio * 100).toFixed(2)}%</p>
							</Box>
							<Box>
								<h3>Height</h3>
								<p>{(p.height / 2.54).toFixed(2)}"</p>
								<p>{(p.height).toFixed(2)} cm</p>
							</Box>
							<Box>
								<h3>Weight</h3>
								<p>{(p.weight * 2.205).toFixed(2)} lb</p>
								<p>{(p.weight).toFixed(2)} kg</p>
							</Box>
							<Box>
								<h3>EV Yield</h3>
								{p.evYield.map((ev, i) => (
									<Chip key={i} label={ev} size="small" />
								))}
							</Box>
							<Box>
								<h3>Catch Rate</h3>
								<p>{p.catchRate}</p>
							</Box>
							<Box>
								<h3>Base Friendship</h3>
								<p>{p.baseFriendship}</p>
							</Box>
							<Box>
								<h3>Base Experience</h3>
								<p>{p.baseXP}</p>
							</Box>
							<Box>
								<h3>Growth Rate</h3>
								<p>{p.growthRate}</p>
							</Box>
						</Container>

						<Container maxWidth="xl" sx={{ mt: 4 }}>
							<h2>Text</h2>
							{dex === 'gen8'
								? (
									<Box>
										{p.swordText || p.shieldText
											? (
												<>
													<Box>
														<h3>Sword</h3>
														{p.galar ? <h6><span className="no">No.</span>{p.galar}</h6> : null}
														<p>{p.swordText}</p>
														{p.galarIOA ? <h6><span>Isle of Armor</span><span className="no">No.</span>{p.galarIOA}</h6> : null}
														{p.galarCT ? <h6><span>Crown Tundra</span><span className="no">No.</span>{p.galarCT}</h6> : null}
													</Box>
													<Box>
														<h3>Shield</h3>
														{p.galar ? <h6><span className="no">No.</span>{p.galar}</h6> : null}
														<p>{p.shieldText}</p>
														{p.galarIOA ? <h6><span>Isle of Armor</span><span className="no">No.</span>{p.galarIOA}</h6> : null}
														{p.galarCT ? <h6><span>Crown Tundra</span><span className="no">No.</span>{p.galarCT}</h6> : null}
													</Box>
												</>
											) : null
										}
										{p.brilliantDiamondText || p.shiningPearlText
											? (
												<>
													<Box>
														<h3>Brilliant Diamond</h3>
														{p.sinnoh ? <h6><span className="no">No.</span>{p.sinnoh}</h6> : null}
														<p>{p.brilliantDiamondText}</p>
													</Box>
													<Box>
														<h3>Shining Pearl</h3>
														{p.sinnoh ? <h6><span className="no">No.</span>{p.sinnoh}</h6> : null}
														<p>{p.shiningPearlText}</p>
													</Box>
												</>
											) : null
										}
										{p.legendsArceusText
											? (
												<Box>
													<h3>Legends: Arceus</h3>
													{p.hisui ? <h6><span className="no">No.</span>{p.hisui}</h6> : null}
													<p>{p.legendsArceusText}</p>
												</Box>
											) : null
										}
									</Box>
								)	: null
							}
						</Container>

						<Container maxWidth="xl" sx={{ mt: 4 }}>
							<h2>Locations</h2>
						</Container>

						<Container maxWidth="xl" sx={{ mt: 4 }}>
							<Moves dex={dex} name={p.name} />
						</Container>

						<Container maxWidth="xl" sx={{ mt: 4 }}>
							<h2>Names & Translations</h2>
							<Box>
								<Chip label="English" />
								<p>{p.name}</p>
							</Box>
							<Box>
								<Chip label="Japanese" />
								<p>{p.japanese}</p>
								<p>{p.japaneseKata}</p>
							</Box>
							<Box>
								<Chip label="French" />
								<p>{p.french}</p>
							</Box>
							<Box>
								<Chip label="German" />
								<p>{p.german}</p>
							</Box>
							<Box>
								<Chip label="Korean" />
								<p>{p.korean}</p>
							</Box>
						</Container>

					</Box>
				))
			}

			<Footer />
		</Box>
	)
}

export default Pokemon;