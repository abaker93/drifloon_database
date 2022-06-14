export const ChooseDex = (game) => {
	let info = {
		dex: '',
		title: ''
	}
	
	switch(game) {
		case 'national':
			info.dex = 'national';
			info.title = 'National'
			break;
		case 'red-blue':
			info.dex = 'gen1'
			info.title = 'Red & Blue'
			break;
		case 'yellow':
			info.dex = 'gen1'
			info.title = 'Yellow'
			break;
		default:
			info.dex = 'national'
			info.title = 'National'
	}

	return info
}