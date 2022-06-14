// GoogleAPI Tutorial: https://betterprogramming.pub/make-a-team-roster-with-node-react-and-google-sheets-305b9f9ebbb1
// Redis Tutorial: https://www.sitepoint.com/using-redis-node-js/

const { TablesServiceClient } = require('@google/area120-tables').v1alpha1;
const express = require('express');
const redis = require('redis');
require('dotenv').config();

const p = process.env
const client = redis.createClient();

(async () => {
  client.on('error', (err) => {
    console.log('Redis Client Error', err);
  });
  client.on('ready', () => console.log('Redis is ready'));

  await client.connect();

  await client.ping();
})();

const app = express();

const tablesClient = new TablesServiceClient();

async function callListRows(key) {
	const n = null;

	if (key === 'national') {
		const nd = [];
		const ndI = tablesClient.listRowsAsync({ parent: p.NATIONAL_DEX_TABLE })
		for await (const pokemon of ndI) {
			nd.push({
				name:			pokemon.values.name ? pokemon.values.name.stringValue : n,
				national:	pokemon.values.national ? pokemon.values.national.numberValue : n,
				type1:		pokemon.values.type1 ? pokemon.values.type1.stringValue : n,
				type2:		pokemon.values.type2 ? pokemon.values.type2.stringValue : n,
				artwork:	pokemon.values.artwork ? pokemon.values.artwork.stringValue : n,
				updateTime: pokemon.values.updateTime ?	pokemon.values.updateTime.structValue.fields.seconds.numberValue : n,
				id: pokemon.values.id ? pokemon.values.id.stringValue : n,
			})
		}
		return nd
	} else if (key === 'gen1') {
		const gen1 = [];
		const gen1I = tablesClient.listRowsAsync({ parent: p.GEN_1_TABLE })
		for await (const pokemon of gen1I) {
			gen1.push({
				name:			pokemon.values.name 		?	pokemon.values.name.stringValue 		: n,
				category:	pokemon.values.category ? pokemon.values.category.stringValue : n,
				type1:		pokemon.values.type1 		? pokemon.values.type1.stringValue 		: n,
				type2:		pokemon.values.type2 		? pokemon.values.type2.stringValue 		: n,
				
				national: pokemon.values.national	? pokemon.values.national.numberValue : n,
				kanto:		pokemon.values.kantoDex	? pokemon.values.kantoDex.numberValue : n,
				
				redText:		pokemon.values.redText 		? pokemon.values.redText.stringValue 		: n,
				greenText:	pokemon.values.greenText	? pokemon.values.greenText.stringValue 	: n,
				blueText:		pokemon.values.blueText 	? pokemon.values.blueText.stringValue 	: n,
				yellowText:	pokemon.values.yellowText	? pokemon.values.yellowText.stringValue	: n,
				
				height:				pokemon.values.height		 		? pokemon.values.height.numberValue 			: n,
				weight:				pokemon.values.weight				? pokemon.values.weight.numberValue 			: n,
				catchRateRB:	pokemon.values.catchRateRB	? pokemon.values.catchRateRB.numberValue 	: n,
				catchRateY:		pokemon.values.catchRateY		? pokemon.values.catchRateY.numberValue 	: n,
				xpGrowth:			pokemon.values.xpGrowth		 	? pokemon.values.xpGrowth.numberValue 		: n,
				growthRate:		pokemon.values.growthRate		? pokemon.values.growthRate.stringValue		: n,
				
				japanese:			pokemon.values.japanese			? pokemon.values.japanese.stringValue			: n,
				japaneseKata:	pokemon.values.japaneseKata	? pokemon.values.japaneseKata.stringValue	: n,
				french:				pokemon.values.french				? pokemon.values.french.stringValue				: n,
				german:				pokemon.values.german				? pokemon.values.german.stringValue				: n,
				korean:				pokemon.values.korean				? pokemon.values.korean.stringValue				: n,
				
				hp:					pokemon.values.hp					? pokemon.values.hp.numberValue					: n,
				hp50Min:		pokemon.values.hp50Min		? pokemon.values.hp50Min.numberValue		: n,
				hp50Max:		pokemon.values.hp50Max		? pokemon.values.hp50Max.numberValue		: n,
				hp100Min:		pokemon.values.hp100Min		? pokemon.values.hp100Min.numberValue		: n,
				hp100Max:		pokemon.values.hp100Max		? pokemon.values.hp100Max.numberValue		: n,
				att:				pokemon.values.att				? pokemon.values.att.numberValue				: n,
				att50Min:		pokemon.values.att50Min		? pokemon.values.att50Min.numberValue		: n,
				att50Max:		pokemon.values.att50Max		? pokemon.values.att50Max.numberValue		: n,
				att100Min:	pokemon.values.att100Min	? pokemon.values.att100Min.numberValue	: n,
				att100Max:	pokemon.values.att100Max	? pokemon.values.att100Max.numberValue	: n,
				def:				pokemon.values.def				? pokemon.values.def.numberValue				: n,
				def50Min:		pokemon.values.def50Min		? pokemon.values.def50Min.numberValue		: n,
				def50Max:		pokemon.values.def50Max		? pokemon.values.def50Max.numberValue		: n,
				def100Min:	pokemon.values.def100Min	? pokemon.values.def100Min.numberValue	: n,
				def100Max:	pokemon.values.def100Max	? pokemon.values.def100Max.numberValue	: n,
				sp:					pokemon.values.sp					? pokemon.values.sp.numberValue					: n,
				sp50Min:		pokemon.values.sp50Min		? pokemon.values.sp50Min.numberValue		: n,
				sp50Max:		pokemon.values.sp50Max		? pokemon.values.sp50Max.numberValue		: n,
				sp100Min:		pokemon.values.sp100Min		? pokemon.values.sp100Min.numberValue		: n,
				sp100Max:		pokemon.values.sp100Max		? pokemon.values.sp100Max.numberValue		: n,
				spd:				pokemon.values.spd				? pokemon.values.spd.numberValue				: n,
				spd50Min:		pokemon.values.spd50Min		? pokemon.values.spd50Min.numberValue		: n,
				spd50Max:		pokemon.values.spd50Max		? pokemon.values.spd50Max.numberValue		: n,
				spd100Min:	pokemon.values.spd100Min	? pokemon.values.spd100Min.numberValue	: n,
				spd100Max:	pokemon.values.spd100Max	? pokemon.values.spd100Max.numberValue	: n,
				
				spriteNorRB:	pokemon.values.spriteNorRB	? pokemon.values.spriteNorRB.stringValue	: n,
				spriteNorY:		pokemon.values.spriteNorY		? pokemon.values.spriteNorY.stringValue		: n,
				spriteBackRB:	pokemon.values.spriteBackRB	? pokemon.values.spriteBackRB.stringValue	: n,
				spriteBackY:	pokemon.values.spriteBackY	? pokemon.values.spriteBackY.stringValue	: n,

				updateTime: pokemon.values.updateTime ?	pokemon.values.updateTime.structValue.fields.seconds.numberValue : n,
				id: pokemon.values.id ? pokemon.values.id.stringValue : n,
			})
		}
		return gen1;
	} else if (key === 'gen8') {
			const gen8 = [];
			const gen8I = tablesClient.listRowsAsync({ parent: p.GEN_8_TABLE })
			for await (const pokemon of gen8I) {
				gen8.push({
					// data: pokemon.values,
					name:			pokemon.values.name 		?	pokemon.values.name.stringValue 		: n,
					category:	pokemon.values.category	? pokemon.values.category.stringValue	: n,
					type1:		pokemon.values.type1 		? pokemon.values.type1.stringValue 		: n,
					type2:		pokemon.values.type2 		? pokemon.values.type2.stringValue 		: n,
					
					national: pokemon.values.national ? pokemon.values.national.numberValue : n,
					galar:		pokemon.values.galar 		? pokemon.values.galar.numberValue		: n,
					galarIOA:	pokemon.values.galarIOA	? pokemon.values.galarIOA.numberValue	: n,
					galarCT:	pokemon.values.galarCT 	? pokemon.values.galarCT.numberValue 	: n,
					sinnoh:		pokemon.values.sinnoh 	? pokemon.values.sinnoh.numberValue 	: n,
					hisui:		pokemon.values.hisui 		? pokemon.values.hisui.numberValue 		: n,
					
					swordText:						pokemon.values.swordText 						? pokemon.values.swordText.stringValue 						: n,
					shieldText:						pokemon.values.shieldText						? pokemon.values.shieldText.stringValue 					: n,
					brilliantDiamondText:	pokemon.values.brilliantDiamondText	? pokemon.values.brilliantDiamondText.stringValue	: n,
					shiningPearlText:			pokemon.values.shiningPearlText			? pokemon.values.shiningPearlText.stringValue			: n,
					legendsArceusText:		pokemon.values.legendsArceusText		? pokemon.values.legendsArceusText.stringValue		: n,
					
					height:			pokemon.values.height						? pokemon.values.height.numberValue						: n,
					weight:			pokemon.values.weight						? pokemon.values.weight.numberValue						: n,
								// QUESTIONABLE ???????????
					abilities: {
						abilities:	pokemon.values.abilities			?	pokemon.values.abilities.listValue.values.map(ability => {return(ability.stringValue)}) : n,
						urls:				pokemon.values.gen8Abilities	? pokemon.values.gen8Abilities.listValue.values.map(url => {return(url.stringValue)}) 		: n,
					},
					hiddenAbility: {
						ability:	pokemon.values.hiddenAbility				? pokemon.values.hiddenAbility.stringValue				: n,
						url:			pokemon.values.gen8HiddenAbilities	? pokemon.values.gen8HiddenAbilities.stringValue	: n,
					},
					MGendRatio:			pokemon.values.MGendRatio			? pokemon.values.MGendRatio.numberValue				: n,
					FGendRatio:			pokemon.values.FGendRatio			? pokemon.values.FGendRatio.numberValue				: n,
					evYield:				pokemon.values.evYield				?	pokemon.values.evYield.listValue.values.map(ev => {return(ev.stringValue)})	: n,
					catchRate:			pokemon.values.catchRate			? pokemon.values.catchRate.numberValue 				: n,
					baseFriendship:	pokemon.values.baseFriendship	? pokemon.values.baseFriendship.numberValue 	: n,
					baseXP:					pokemon.values.baseXP					? pokemon.values.baseXP.numberValue 					: n,
					growthRate:			pokemon.values.growthRate			? pokemon.values.growthRate.stringValue				: n,
					eggGroups: {
						eggGroups:	pokemon.values.eggGroups			?	pokemon.values.eggGroups.listValue.values.map(group => {return(group.stringValue)}) : n,
						urls:				pokemon.values.gen8EggGroups	? pokemon.values.gen8EggGroups.listValue.values.map(url => {return(url.stringValue)})	: n,
					},
					eggCycles:			pokemon.values.eggCycles			? pokemon.values.eggCycles.numberValue 				: n,
					
					japanese:			pokemon.values.japanese			? pokemon.values.japanese.stringValue			: n,
					japaneseKata:	pokemon.values.japaneseKata	? pokemon.values.japaneseKata.stringValue	: n,
					french:				pokemon.values.french				? pokemon.values.french.stringValue				: n,
					german:				pokemon.values.german				? pokemon.values.german.stringValue				: n,
					korean:				pokemon.values.korean				? pokemon.values.korean.stringValue				: n,
					
					hp:						pokemon.values.hp						? pokemon.values.hp.numberValue						: n,
					hp50Min:			pokemon.values.hp50Min			? pokemon.values.hp50Min.numberValue			: n,
					hp50Max:			pokemon.values.hp50Max			? pokemon.values.hp50Max.numberValue			: n,
					hp100Min:			pokemon.values.hp100Min			? pokemon.values.hp100Min.numberValue			: n,
					hp100Max:			pokemon.values.hp100Max			? pokemon.values.hp100Max.numberValue			: n,
					att:					pokemon.values.att					? pokemon.values.att.numberValue					: n,
					att50Min:			pokemon.values.att50Min			? pokemon.values.att50Min.numberValue			: n,
					att50Max:			pokemon.values.att50Max			? pokemon.values.att50Max.numberValue			: n,
					att100Min:		pokemon.values.att100Min		? pokemon.values.att100Min.numberValue		: n,
					att100Max:		pokemon.values.att100Max		? pokemon.values.att100Max.numberValue		: n,
					def:					pokemon.values.def					? pokemon.values.def.numberValue					: n,
					def50Min:			pokemon.values.def50Min			? pokemon.values.def50Min.numberValue			: n,
					def50Max:			pokemon.values.def50Max			? pokemon.values.def50Max.numberValue			: n,
					def100Min:		pokemon.values.def100Min		? pokemon.values.def100Min.numberValue		: n,
					def100Max:		pokemon.values.def100Max		? pokemon.values.def100Max.numberValue		: n,
					spAtt:				pokemon.values.spAtt				? pokemon.values.spAtt.numberValue				: n,
					spAtt50Min:		pokemon.values.spAtt50Min		? pokemon.values.spAtt50Min.numberValue		: n,
					spAtt50Max:		pokemon.values.spAtt50Max		? pokemon.values.spAtt50Max.numberValue		: n,
					spAtt100Min:	pokemon.values.spAtt100Min	? pokemon.values.spAtt100Min.numberValue	: n,
					spAtt100Max:	pokemon.values.spAtt100Max	? pokemon.values.spAtt100Max.numberValue	: n,
					spDef:				pokemon.values.spDef				? pokemon.values.spDef.numberValue				: n,
					spDef50Min:		pokemon.values.spDef50Min		? pokemon.values.spDef50Min.numberValue		: n,
					spDef50Max:		pokemon.values.spDef50Max		? pokemon.values.spDef50Max.numberValue		: n,
					spDef100Min:	pokemon.values.spDef100Min	? pokemon.values.spDef100Min.numberValue	: n,
					spDef100Max:	pokemon.values.spDef100Max	? pokemon.values.spDef100Max.numberValue	: n,
					spd:					pokemon.values.spd					? pokemon.values.spd.numberValue					: n,
					spd50Min:			pokemon.values.spd50Min			? pokemon.values.spd50Min.numberValue			: n,
					spd50Max:			pokemon.values.spd50Max			? pokemon.values.spd50Max.numberValue			: n,
					spd100Min:		pokemon.values.spd100Min		? pokemon.values.spd100Min.numberValue		: n,
					spd100Max:		pokemon.values.spd100Max		? pokemon.values.spd100Max.numberValue		: n,
					
					// spriteNorRB:	pokemon.values.spriteNorRB	? pokemon.values.spriteNorRB.stringValue	: n,
					// spriteNorY:		pokemon.values.spriteNorY		? pokemon.values.spriteNorY.stringValue		: n,
					// spriteBackRB:	pokemon.values.spriteBackRB	? pokemon.values.spriteBackRB.stringValue	: n,
					// spriteBackY:	pokemon.values.spriteBackY	? pokemon.values.spriteBackY.stringValue	: n,
	
					updateTime: pokemon.values.updateTime ?	pokemon.values.updateTime.structValue.fields.seconds.numberValue : n,
					id: pokemon.values.id ? pokemon.values.id.stringValue : n,
				})
			}
			return gen8;
	} else {
		return n;
	}
}

app.get('/api/:gen', async(req, res, next) => {
	try {
		let results = null;
		const key = req.params.gen

		const value = await client.get(key);
		if (value) {
			results = JSON.parse(value);
			console.log(`CACHE data from ${key.toUpperCase()}`)
		} else {
			console.log(`SOURCE data from ${key.toUpperCase()}`)
			results = await callListRows(key);
			client.set(key, JSON.stringify(results), {EX: (60 * 3)});
		}

		res.json(results)
	} catch (err) {
		next(err)
	}
})

app.use(function (err, req, res, next) {
  console.error(err);
  res.set('Content-Type', 'text/html');
  res.status(500).send('<h1>Internal Server Error</h1>');
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Express server started on port: ${server.address().port}`);
});