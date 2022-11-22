import React from 'react';

import Link from '@mui/material/Link';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { GetLocations } from '../utils/GetLocations';
import { formatURL } from '../utils/utils';

const Locations = (...params) => {
	const dex = params[0].dex;
	const pokemon = params[0].pokemon;

	const isEqual = (game1, game2) => {
		if (game1.length !== game2.length) { return false; }

		for (let i = 0; i < game1.length; i++) {
			if (game1[i].location !== game2[i].location) { return false; }
		}

		return true;
	}

	let sword, shield, brilliantDiamond, shiningPearl, legendsArceus;
	if (dex === 'gen8') {
		sword = GetLocations(dex, 'Sword', pokemon);
		shield = GetLocations(dex, 'Shield', pokemon);
		brilliantDiamond = GetLocations(dex, 'Brilliant Diamond', pokemon);
		shiningPearl = GetLocations(dex, 'Shining Pearl', pokemon);
		legendsArceus = GetLocations(dex, 'Legends: Arceus', pokemon);
	}

	return (
		<TableContainer>
			<Table>
				<TableBody>
					{sword || shield ?
						isEqual(sword, shield) ? (
							<TableRow>
								<TableCell sx={{ maxWidth: 200 }}>
									<h3 className='game sword'>Sword</h3>
									<h3 className='game shield'>Shield</h3>
								</TableCell>
								<TableCell>
									{sword.map((l, i) => (
										<React.Fragment key={i}>
											{l.method === 'None' ? (
												<span>{l.location}</span>
											) : (
												<span><Link href={`/locations/sword-shield/${formatURL(l.location)}`} underline="none">{l.location}</Link></span>
											)}
										</React.Fragment>
									))}
								</TableCell>
							</TableRow>
						) : (
							<>
								<TableRow>
									<TableCell sx={{ maxWidth: 200 }}>
										<h3 className='game sword'>Sword</h3>
									</TableCell>
									<TableCell>
										{sword.map((l, i) => (
											<React.Fragment key={i}>
												{l.method === 'None' ? (
													<span>{l.location}</span>
												) : (
													<span><Link href={`/locations/sword-shield/${formatURL(l.location)}`} underline="none">{l.location}</Link></span>
												)}
											</React.Fragment>
										))}
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell sx={{ maxWidth: 200 }}>
										<h3 className='game shield'>Shield</h3>
									</TableCell>
									<TableCell>
										{shield.map((l, i) => (
											<React.Fragment key={i}>
												{l.method === 'None' ? (
													<span>{l.location}</span>
												) : (
													<span><Link href={`/locations/sword-shield/${formatURL(l.location)}`} underline="none">{l.location}</Link></span>
												)}
											</React.Fragment>
										))}
									</TableCell>
								</TableRow>
							</>
						)
					: null}

					{brilliantDiamond || shiningPearl ?
						isEqual(brilliantDiamond, shiningPearl) ? (
							<TableRow>
								<TableCell sx={{ maxWidth: 200 }}>
									<h3 className='game brilliantDiamond'>Brilliant Diamond</h3>
									<h3 className='game shiningPearl'>Shining Pearl</h3>
								</TableCell>
								<TableCell>
									{brilliantDiamond.map((l, i) => (
										<React.Fragment key={i}>
											{l.method === 'None' ? (
												<span>{l.location}</span>
											) : (
												<span><Link href={`/locations/brilliant-diamond-shining-pearl/${formatURL(l.location)}`} underline="none">{l.location}</Link></span>
											)}
										</React.Fragment>
									))}
								</TableCell>
							</TableRow>
						) : (
							<>
								<TableRow>
									<TableCell sx={{ maxWidth: 200 }}>
										<h3 className='game brilliantDiamond'>Brilliant Diamond</h3>
									</TableCell>
									<TableCell>
										{brilliantDiamond.map((l, i) => (
											<React.Fragment key={i}>
												{l.method === 'None' ? (
													<span>{l.location}</span>
												) : (
													<span><Link href={`/locations/brilliant-diamond-shining-pearl/${formatURL(l.location)}`} underline="none">{l.location}</Link></span>
												)}
											</React.Fragment>
										))}
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell sx={{ maxWidth: 200 }}>
										<h3 className='game shiningPearl'>Shining Pearl</h3>
									</TableCell>
									<TableCell>
										{shiningPearl.map((l, i) => (
											<React.Fragment key={i}>
												{l.method === 'None' ? (
													<span>{l.location}</span>
												) : (
													<span><Link href={`/locations/brilliant-diamond-shining-pearl/${formatURL(l.location)}`} underline="none">{l.location}</Link></span>
												)}
											</React.Fragment>
										))}
									</TableCell>
								</TableRow>
							</>
						)
					: null}
					
					{legendsArceus ? (
						<TableRow>
							<TableCell sx={{ maxWidth: 200 }}>
								<h3 className='game legendsArceus'>Legends: Arceus</h3>
							</TableCell>
							<TableCell>
								{legendsArceus.map((l, i) => (
									<React.Fragment key={i}>
										{l.method === 'None' ? (
											<span>{l.location}</span>
										) : (
											<span><Link href={`/locations/legends-arceus/${formatURL(l.location)}`} underline="none">{l.location}</Link></span>
										)}
									</React.Fragment>
								))}
							</TableCell>
						</TableRow>
					) : null}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default Locations