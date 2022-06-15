export const ChooseDex = (game) => {
	let info = {
		dex: "",
		dexTitle: "",
		gameTitle: "",
	};

	switch (game) {
		case "national":
			info.dex = "national";
			info.dexTitle = "National";
			info.gameTitle = "National Pokédex";
			info.primary = "national";
			info.artwork = "artwork";
			break;
		case "red-blue":
			info.dex = "gen1";
			info.dexTitle = "Red & Blue";
			info.gameTitle = "Pokémon Red & Pokémon Blue";
			info.primary = "kanto";
			info.artwork = "spriteNorRB";
			break;
		case "yellow":
			info.dex = "gen1";
			info.dexTitle = "Yellow";
			info.gameTitle = "Pokémon Yellow";
			info.primary = "kanto";
			info.artwork = "spriteNorY";
			break;
		case "gold-silver":
			info.dex = "gen2";
			info.dexTitle = "Gold & Silver";
			info.gameTitle = "Pokémon Gold & Pokémon Silver";
			info.primary = "johto";
			info.artwork = "spriteNorGS";
			break;
		case "crystal":
			info.dex = "gen2";
			info.dexTitle = "Crystal";
			info.gameTitle = "Pokémon Crystal";
			info.primary = "johto";
			info.artwork = "spriteNorC";
			break;
		case "ruby-sapphire":
			info.dex = "gen3";
			info.dexTitle = "Ruby & Sapphire";
			info.gameTitle = "Pokémon Ruby & Pokémon Sapphire";
			info.primary = "hoenn";
			info.artwork = "spriteNorRS";
			break;
		case "firered-leafgreen":
			info.dex = "gen3";
			info.dexTitle = "FireRed & LeafGreen";
			info.gameTitle = "Pokémon FireRed & Pokémon LeafGreen";
			info.primary = "kanto";
			info.artwork = "spriteNorFRLG";
			break;
		case "emerald":
			info.dex = "gen3";
			info.dexTitle = "Emerald";
			info.gameTitle = "Pokémon Emerald";
			info.primary = "hoenn";
			info.artwork = "spriteNorE";
			break;
		case "diamond-pearl":
			info.dex = "gen4";
			info.dexTitle = "Diamond & Pearl";
			info.gameTitle = "Pokémon Diamond & Pokémon Pearl";
			info.primary = "sinnoh";
			info.artwork = "spriteNorDP";
			break;
		case "platinum":
			info.dex = "gen4";
			info.dexTitle = "Platinum";
			info.gameTitle = "Pokémon Platinum";
			info.primary = "sinnoh";
			info.artwork = "spriteNorP";
			break;
		case "heartgold-soulsilver":
			info.dex = "gen4";
			info.dexTitle = "HeartGold & SoulSilver";
			info.gameTitle = "Pokémon HeartGold & Pokémon SoulSilver";
			info.primary = "johto";
			info.artwork = "spriteNorHGSS";
			break;
		case "black-white":
			info.dex = "gen5";
			info.dexTitle = "Black & White";
			info.gameTitle = "Pokémon Black & Pokémon White";
			info.primary = "unova";
			info.artwork = "spriteNorBW";
			break;
		case "black-2-white-2":
			info.dex = "gen5";
			info.dexTitle = "Black 2 & White 2";
			info.gameTitle = "Pokémon Black 2 & Pokémon White 2";
			info.primary = "unova";
			info.artwork = "spriteNorB2W2";
			break;
		case "x-y":
			info.dex = "gen6";
			info.dexTitle = "X & Y";
			info.gameTitle = "Pokémon X & Pokémon Y";
			info.primary = "kalos";
			info.artwork = "spriteNorXY";
			break;
		case "omega-ruby-alpha-sapphire":
			info.dex = "gen6";
			info.dexTitle = "Omega Ruby & Alpha Sapphire";
			info.gameTitle = "Pokémon Omega Ruby & Pokémon Alpha Sapphire";
			info.primary = "hoenn";
			info.artwork = "spriteNorORAS";
			break;
		case "sun-moon":
			info.dex = "gen7";
			info.dexTitle = "Sun & Moon";
			info.gameTitle = "Pokémon Sun & Pokémon Moon";
			info.primary = "alola";
			info.artwork = "spriteNorSM";
			break;
		case "ultra-sun-ultra-moon":
			info.dex = "gen7";
			info.dexTitle = "Ultra Sun & Ultra Moon";
			info.gameTitle = "Pokémon Ultra Sun & Pokémon Ultra Moon";
			info.primary = "alola";
			info.artwork = "spriteNorUSUM";
			break;
		case "lets-go-pikachu-eevee":
			info.dex = "gen7";
			info.dexTitle = "Let's Go Pikachu & Let's Go Eevee";
			info.gameTitle = "Pokémon Let's Go Pikachu & Pokémon Let's Go Eevee";
			info.primary = "kanto";
			info.artwork = "spriteNorLGPLGE";
			break;
		case "pokemon-go":
			info.dex = "gen8";
			info.dexTitle = "Pokémon Go";
			info.gameTitle = "Pokémon Go";
			info.primary = "national";
			info.artwork = "spriteNorGO";
			break;
		case "sword-shield":
			info.dex = "gen8";
			info.dexTitle = "Sword & Shield";
			info.gameTitle = "Pokémon Sword & Pokémon Shield";
			info.primary = "galar";
			info.artwork = "spriteNorSS";
			break;
		case "brilliant-diamond-shining-pearl":
			info.dex = "gen8";
			info.dexTitle = "Brilliant Diamond & Shining Pearl";
			info.gameTitle = "Pokémon Brilliant Diamond & Pokémon Shining Pearl";
			info.primary = "sinnoh";
			info.artwork = "spriteNorBDSP";
			break;
		case "legends-arceus":
			info.dex = "gen8";
			info.dexTitle = "Legends: Arceus";
			info.gameTitle = "Pokémon Legends: Arceus";
			info.primary = "hisui";
			info.artwork = "spriteNorLA";
			break;
		case "scarlet-violet":
			info.dex = "gen9";
			info.dexTitle = "Scarlet & Violet";
			info.gameTitle = "Pokémon Scarlet & Pokémon Violet";
			info.primary = "kanto";
			info.artwork = "spriteNorSV";
			break;
		default:
			info.dex = "national";
			info.dexTitle = "National";
			info.gameTitle = "National Pokédex";
			info.primary = "national";
			info.artwork = "artwork";
	}

	return info;
};

export const formatDexNum = (num) => {
	num = String(num);
	while (num.length < 3) num = "0" + num;
	return num;
};

export const totalStats = (...stats) => {
	return stats.reduce((sum, a) => sum + a, 0);
};