import React from 'react';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { GetMoves } from '../utils/GetMoves';

const Moves = (...params) => {
	const getMovesLevel = GetMoves(params[0].dex, params[0].name, 'level');
	const getMovesEgg = GetMoves(params[0].dex, params[0].name, 'egg');
	const getMovesTM= GetMoves(params[0].dex, params[0].name, 'tm');
	const getMovesHM = GetMoves(params[0].dex, params[0].name, 'hm');

	return (
		<Box sx={{ mt: 10 }}>
			<h2>Moves</h2>
			{getMovesLevel ? (
				<Box>
					<h3>Level Up</h3>
					<TableContainer>
						<Table size="small">
							<TableHead>
								<TableRow>
									<TableCell sx={{ width: 20 }}>Lv.</TableCell>
									<TableCell>Move</TableCell>
									<TableCell sx={{ width: 100 }}>Type</TableCell>
									<TableCell sx={{ width: 20 }}>Cat.</TableCell>
									<TableCell sx={{ width: 20 }}>Pwr.</TableCell>
									<TableCell sx={{ width: 20 }}>Acc.</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{getMovesLevel.map((m, i) => (
									<TableRow key={i} hover>
										<TableCell sx={{ textAlign: 'center' }}>
											{m.level}
										</TableCell>
										<TableCell>
											{m.move}
										</TableCell>
										<TableCell>
											<Chip
												label={m.type}
												data-type={m.type}
												size="small"
											/>
											
										</TableCell>
										<TableCell>
											<img src={`/assets/${m.category}.svg`} alt={m.category} />
										</TableCell>
										<TableCell sx={{ textAlign: 'center' }}>
											{m.power ? m.power : <>&mdash;</>}
										</TableCell>
										<TableCell sx={{ textAlign: 'center' }}>
											{m.accuracy ? m.accuracy * 100 : <>&mdash;</>}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Box>
			) : null }
			{getMovesEgg.map((m, i) => (
				<Box key={i}>
					<h3>Egg Moves</h3>
					<p>{m.move}</p>
				</Box>	
			))}
			{getMovesHM.map((m, i) => (
				<Box key={i}>
					<h3>Moves learnt by TM</h3>
					<p>{m.move}</p>
				</Box>	
			))}
			{getMovesTM.map((m, i) => (
				<Box key={i}>
					<h3>Moves learnt by HM</h3>
					<p>{m.move}</p>
				</Box>	
			))}
		</Box>
	)
	
}

export default Moves