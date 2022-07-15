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
import MaleRoundedIcon from '@mui/icons-material/MaleRounded';
import FemaleRoundedIcon from '@mui/icons-material/FemaleRounded';

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

						<Container className="evolution" maxWidth="xl" sx={{ mt: 4 }}>
							<h2>EVOLUTION</h2>
						</Container>

						<Container className="weaknesses" maxWidth="xl" sx={{ mt: 4 }}>
							<h2>Weaknesses</h2>
							{typesArray.map((t, i) => (
								<Weakness key={i} attType={t} type1={p.type1} type2={p.type2} />
							))}
						</Container>

						<Container className="abilities" maxWidth="xl" sx={{ mt: 4 }}>
							<Box>
								{p.abilities.abilities.length > 1 ? <h2>Abilities</h2> : <h2>Ability</h2>}
								{p.abilities.abilities.map((a, i) => (
									<Link key={i} href={`/abilities/${formatURL(a)}`} underline="none">
										<Card className="clickable small">
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
									<Card className="clickable small">
										<CardContent>
											{p.hiddenAbility.ability}
										</CardContent>
									</Card>
								</Link>
							</Box>
						</Container>

						<Container className="breeding" maxWidth="xl" sx={{ mt: 4 }}>
							<h2>Breeding</h2>
							<Box>
								{p.eggGroups.eggGroups.length > 1 ? <h3>Egg Groups</h3> : <h3>Egg Group</h3>}
								{p.eggGroups.eggGroups.map((e, i) => (
									<Link key={i} href={`/egg-groups/${formatURL(e)}`} underline="none">
										<Card className="clickable small">
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
								<p>{p.eggCycles * 257} steps</p>
							</Box>
						</Container>

						<Container className="moreInfo" maxWidth="xl" sx={{ mt: 4 }}>
							<h2>More Info</h2>
							<Box className="gendRatio">
								<h3>Gender Ratio</h3>
								<div
									className="genderPie"
									style={{
										height: 50,
										width: 50,
										borderRadius: '50%',
										backgroundImage: `conic-gradient(
											hsl(208, 91%, 40%) ${p.MGendRatio * 100}%,
											hsl(357, 92%, 71%) 0)`
									}}
								/>
								<p><span className="male"><MaleRoundedIcon /></span>{(p.MGendRatio * 100).toFixed(2)}%</p>
								<p><span className="female"><FemaleRoundedIcon /></span>{(p.FGendRatio * 100).toFixed(2)}%</p>
							</Box>
							<Box className="height">
								<h3>Height</h3>
								<p>{(p.height / 2.54).toFixed(2)}"</p>
								<p>{(p.height).toFixed(2)} cm</p>
							</Box>
							<Box className="weight">
								<h3>Weight</h3>
								<p>{(p.weight * 2.205).toFixed(2)} lb</p>
								<p>{(p.weight).toFixed(2)} kg</p>
							</Box>
							<Box className="evYield">
								<h3>EV Yield</h3>
								{p.evYield.map((ev, i) => (
									<Chip key={i} label={ev} size="small" />
								))}
							</Box>
							<Box className="catchRate">
								<h3>Catch Rate</h3>
								<p>{p.catchRate}</p>
							</Box>
							<Box className="baseFriendship">
								<h3>Base Friendship</h3>
								<p>{p.baseFriendship}</p>
							</Box>
							<Box className="baseExperience">
								<h3>Base Experience</h3>
								<p>{p.baseXP}</p>
							</Box>
							<Box className="growthRate">
								<h3>Growth Rate</h3>
								<p>{p.growthRate}</p>
							</Box>
						</Container>

						<Container className="descriptions" maxWidth="xl" sx={{ mt: 4 }}>
							<TabsUnstyled defaultValue={
								dex === 'gen1' ? 0
									: dex === 'gen2' ? 1
									: dex === 'gen3' ? 2
									: dex === 'gen4' ? 3
									: dex === 'gen5' ? 4
									: dex === 'gen6' ? 5
									: dex === 'gen7' ? 6
									: dex === 'gen8' ? 7
									: dex === 'gen9' ? 8
									: 7
							}>
								<TabsListUnstyled className="chipTabs">
									<TabUnstyled>
										<Chip label="Gen I" className="chipTab" clickable />
									</TabUnstyled>
									<TabUnstyled>
										<Chip label="Gen II" className="chipTab" clickable />
									</TabUnstyled>
									<TabUnstyled>
										<Chip label="Gen III" className="chipTab" clickable />
									</TabUnstyled>
									<TabUnstyled>
										<Chip label="Gen IV" className="chipTab" clickable />
									</TabUnstyled>
									<TabUnstyled>
										<Chip label="Gen V" className="chipTab" clickable />
									</TabUnstyled>
									<TabUnstyled>
										<Chip label="Gen VI" className="chipTab" clickable />
									</TabUnstyled>
									<TabUnstyled>
										<Chip label="Gen VII" className="chipTab" clickable />
									</TabUnstyled>
									<TabUnstyled>
										<Chip label="Gen VIII" className="chipTab" clickable />
									</TabUnstyled>
									<TabUnstyled>
										<Chip label="Gen IX" className="chipTab" clickable />
									</TabUnstyled>
								</TabsListUnstyled>
								<TabPanelUnstyled value={0}>
									Gen 1
								</TabPanelUnstyled>
								<TabPanelUnstyled value={1}>
									Gen 2
								</TabPanelUnstyled>
								<TabPanelUnstyled value={2}>
									Gen 3
								</TabPanelUnstyled>
								<TabPanelUnstyled value={3}>
									Gen 4
								</TabPanelUnstyled>
								<TabPanelUnstyled value={4}>
									Gen 5
								</TabPanelUnstyled>
								<TabPanelUnstyled value={5}>
									Gen 6
								</TabPanelUnstyled>
								<TabPanelUnstyled value={6}>
									Gen 7
								</TabPanelUnstyled>
								<TabPanelUnstyled value={7}>
									{dex === 'gen8'
									? (
										<Box>
											{p.swordText || p.shieldText
												? (
													<>
														<Box className="flavorText">
															<h3><span className="game sword">Sword</span></h3>
															<p>{p.galar ? <span><span>No.</span>{formatDexNum(p.galar)}</span> : null}{p.swordText}</p>
															{p.galarIOA ? <h6>Isle of Armor<span><span>No.</span>{formatDexNum(p.galarIOA)}</span></h6> : null}
															{p.galarCT ? <h6>Crown Tundra<span><span>No.</span>{formatDexNum(p.galarCT)}</span></h6> : null}
														</Box>
														<Box className="flavorText">
															<h3><span className="game shield">Shield</span></h3>
															<p>{p.galar ? <span><span>No.</span>{formatDexNum(p.galar)}</span> : null}{p.shieldText}</p>
															{p.galarIOA ? <h6>Isle of Armor<span><span>No.</span>{formatDexNum(p.galarIOA)}</span></h6> : null}
															{p.galarCT ? <h6>Crown Tundra<span><span>No.</span>{formatDexNum(p.galarCT)}</span></h6> : null}
														</Box>
													</>
												) : null
											}
											{p.brilliantDiamondText || p.shiningPearlText
												? (
													<>
														<Box className="flavorText">
															<h3><span className="game brilliantDiamond">Brilliant Diamond</span></h3>
															<p>{p.sinnoh ? <span><span>No.</span>{formatDexNum(p.sinnoh)}</span> : null}{p.brilliantDiamondText}</p>
														</Box>
														<Box className="flavorText">
															<h3><span className="game shiningPearl">Shining Pearl</span></h3>
															<p>{p.sinnoh ? <span><span>No.</span>{formatDexNum(p.sinnoh)}</span> : null}{p.shiningPearlText}</p>
														</Box>
													</>
												) : null
											}
											{p.legendsArceusText
												? (
													<Box className="flavorText">
														<h3><span className="game legendsArceus">Legends: Arceus</span></h3>
														<p>{p.hisui ? <span><span>No.</span>{formatDexNum(p.hisui)}</span> : null}{p.legendsArceusText}</p>
													</Box>
												) : null
											}
										</Box>
									)	: null
								}
								</TabPanelUnstyled>
								<TabPanelUnstyled value={8}>
									Gen 9
								</TabPanelUnstyled>
							</TabsUnstyled>
						</Container>

						<Container className="locations" maxWidth="xl" sx={{ mt: 4 }}>
							<h2>Locations</h2>
						</Container>

						<Container className="moves" maxWidth="xl" sx={{ mt: 4 }}>
							<Moves dex={dex} name={p.name} />
						</Container>

						<Container className="translations" maxWidth="xl" sx={{ mt: 4 }}>
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