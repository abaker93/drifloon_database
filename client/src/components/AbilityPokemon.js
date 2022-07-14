import React from 'react';

import Link from '@mui/material/Link';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { GetPoke } from '../utils/GetPoke';
import { formatDexNum, formatURL } from '../utils/utils';

const AbilityPokemon = (...params) => {
	const pokemon = GetPoke(params[0].dex, 'national', params[0].pokemon);
	const ability = params[0].ability;
	const type = params[0].type;

	if (type === 'hidden') {
		return (
			<TableRow hover>
				{pokemon.map((p, i) => (
					<React.Fragment key={i}>
						<TableCell>{formatDexNum(p.national)}</TableCell>
						<TableCell>
							<Link href={`/national/pokedex/${formatDexNum(p.national)}`} underline="none">{p.name}</Link>
						</TableCell>
						<TableCell>
							{p.abilities.abilities ? (
								p.abilities.abilities.map((a, i) => (
									<Link key={i} href={`/abilities/${formatURL(a)}`} underline="none">{a}</Link>
								))
							) : (<>&mdash;</>) }
						</TableCell>
					</React.Fragment>
				))}
			</TableRow>
		)
	} else {
		return (
			<TableRow hover>
				{pokemon.map((p, i) => (
					<React.Fragment key={i}>
						<TableCell>{formatDexNum(p.national)}</TableCell>
						<TableCell>
							<Link href={`/national/pokedex/${formatDexNum(p.national)}`} underline="none">{p.name}</Link>
						</TableCell>
						<TableCell>
							{p.abilities.abilities.length > 1 ? (
								p.abilities.abilities
									.filter(a => a !== ability)
									.map((a, i) => (
										<Link key={i} href={`/abilities/${formatURL(a)}`} underline="none">{a}</Link>
									))
							) : (<>&mdash;</>) }
						</TableCell>
						<TableCell>
							{p.hiddenAbility.ability ? (
								<Link key={i} href={`/abilities/${formatURL(p.hiddenAbility.ability)}`} underline="none">{p.hiddenAbility.ability}</Link>
							) : (<>&mdash;</>) }
						</TableCell>
					</React.Fragment>
				))}
			</TableRow>
		)
	}
}

export default AbilityPokemon