import React from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Chip from '@mui/material/Chip';

import { GetPoke } from '../utils/GetPoke';
import { formatDexNum, formatURL } from '../utils/utils';

const EggGroupPokemon = (...params) => {
	const pokemon = GetPoke(params[0].dex, 'national', params[0].pokemon);
	const eggGroup = params[0].eggGroup;

	return (
		<TableRow hover>
			{pokemon.map((p, i) => (
				<React.Fragment key={i}>
					<TableCell>{formatDexNum(p.national)}</TableCell>
					<TableCell>
						<Link href={`/national/pokedex/${formatDexNum(p.national)}`} underline="none">{p.name}</Link>
					</TableCell>
					<TableCell>
						<Box className="types">
							<Chip data-type={p.type1} label={p.type1} size="small" />
							{p.type2 ? <Chip data-type={p.type2} label={p.type2} size="small" /> : null}
						</Box>
					</TableCell>
					<TableCell>
						{p.eggGroups.eggGroups.length > 1 ? (
							p.eggGroups.eggGroups
								.filter(e => e !== eggGroup)
								.map((e, i) => (
									<Link key={i} href={`/breeding/egg-groups/${formatURL(e)}`} underline="none">{e}</Link>
								))
						) : (<>&mdash;</>) }
					</TableCell>
				</React.Fragment>
			))}
		</TableRow>
	)
}

export default EggGroupPokemon