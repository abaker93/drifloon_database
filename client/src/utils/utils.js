export const ChooseDex = (game) => {
	let info = {
		dex: '',
		dexTitle: '',
		gameTitle: ''
	}
	
	switch(game) {
		case 'national':
			info.dex = 'national';
			info.dexTitle = 'National';
			info.gameTitle = 'National Pokédex';
			info.primary = 'national';
			info.artwork = 'artwork';
			break;
		case 'red-blue':
			info.dex = 'gen1';
			info.dexTitle = 'Red & Blue';
			info.gameTitle = 'Pokémon Red & Pokémon Blue';
			info.primary = 'kanto';
			info.artwork = 'spriteNorRB';
			break;
		case 'yellow':
			info.dex = 'gen1';
			info.dexTitle = 'Yellow';
			info.gameTitle = 'Pokémon Yellow';
			info.primary = 'kanto';
			info.artwork = 'spriteNorY';
			break;
		default:
			info.dex = 'national';
			info.dexTitle = 'National';
			info.gameTitle = 'National Pokédex';
			info.primary = 'national';
			info.artwork = 'artwork';
	}

	return info
}

export const formatDexNum = num => {
	num = String(num);
	while (num.length < 3) num = '0' + num;
	return num;
}

export const totalStats = (hp, att, def, spatt, spdef, spd) => {
	return(hp + att + def + spatt + spdef + spd)
}