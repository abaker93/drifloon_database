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
				name: pokemon.values.name ? pokemon.values.name.stringValue : n,
				national: pokemon.values.national ? pokemon.values.national.numberValue : n,
				type1: pokemon.values.type1 ? pokemon.values.type1.stringValue : n,
				type2: pokemon.values.type2 ? pokemon.values.type2.stringValue : n,
				artwork: pokemon.values.artwork ? pokemon.values.artwork.stringValue : n,
				id: pokemon.values.id ? pokemon.values.id.stringValue : n,
			})
		}
		return nd
	} else if (key === 'gen1') {
		const gen1 = [];
		const gen1I = tablesClient.listRowsAsync({ parent: p.GEN_1_TABLE })
		for await (const pokemon of gen1I) {
			gen1.push({
				name:					pokemon.values.name 				?	pokemon.values.name.stringValue 				: n,
				national: 		pokemon.values.national 		? pokemon.values.national.numberValue 		: n,
				kanto:				pokemon.values.kantoDex 		? pokemon.values.kantoDex.numberValue 		: n,
				category: 		pokemon.values.category 		? pokemon.values.category.stringValue 		: n,
				type1:				pokemon.values.type1 				? pokemon.values.type1.stringValue 				: n,
				type2:				pokemon.values.type2 				? pokemon.values.type2.stringValue 				: n,
				
				redText:			pokemon.values.redText 			? pokemon.values.redText.stringValue 			: n,
				greenText:		pokemon.values.greenText		? pokemon.values.greenText.stringValue 		: n,
				blueText:			pokemon.values.blueText 		? pokemon.values.blueText.stringValue 		: n,
				yellowText:		pokemon.values.yellowText		? pokemon.values.yellowText.stringValue		: n,
				
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
				sp:						pokemon.values.sp						? pokemon.values.sp.numberValue						: n,
				sp50Min:			pokemon.values.sp50Min			? pokemon.values.sp50Min.numberValue			: n,
				sp50Max:			pokemon.values.sp50Max			? pokemon.values.sp50Max.numberValue			: n,
				sp100Min:			pokemon.values.sp100Min			? pokemon.values.sp100Min.numberValue			: n,
				sp100Max:			pokemon.values.sp100Max			? pokemon.values.sp100Max.numberValue			: n,
				spd:					pokemon.values.spd					? pokemon.values.spd.numberValue					: n,
				spd50Min:			pokemon.values.spd50Min			? pokemon.values.spd50Min.numberValue			: n,
				spd50Max:			pokemon.values.spd50Max			? pokemon.values.spd50Max.numberValue			: n,
				spd100Min:		pokemon.values.spd100Min		? pokemon.values.spd100Min.numberValue		: n,
				spd100Max:		pokemon.values.spd100Max		? pokemon.values.spd100Max.numberValue		: n,
				
				spriteNorRB:	pokemon.values.spriteNorRB	? pokemon.values.spriteNorRB.stringValue	: n,
				spriteNorY:		pokemon.values.spriteNorY		? pokemon.values.spriteNorY.stringValue		: n,
				spriteBackRB:	pokemon.values.spriteBackRB	? pokemon.values.spriteBackRB.stringValue	: n,
				spriteBackY:	pokemon.values.spriteBackY	? pokemon.values.spriteBackY.stringValue	: n,

				updateTime: pokemon.values.updateTime ?	pokemon.values.updateTime.structValue.fields.seconds.numberValue : n,
				id: pokemon.values.id ? pokemon.values.id.stringValue : n,
			})
		}
		return gen1;
	} else {
		return n;
	}
}

app.get('/api/national', async (req, res, next) => {
	try {
		let results = null;

		const key = 'national'

		const value = await client.get(key);
		if (value) {
			results = JSON.parse(value);
			console.log('from CACHE data [NATIONAL]')
		} else {
			console.log('from SOURCE data [NATIONAL]')
			results = await callListRows(key);
			client.set(key, JSON.stringify(results), {EX: 60});
		}

		res.json(results)
	} catch (err) {
		next(err)
	}
})

app.get('/api/gen1', async (req, res, next) => {
	try {
		let results = null;

		const key = 'gen1'

		const value = await client.get(key);
		if (value) {
			results = JSON.parse(value);
			console.log('from CACHE data [GEN 1]')
		} else {
			console.log('from SOURCE data [GEN 1]')
			results = await callListRows(key)
			client.set(key, JSON.stringify(results), {EX: 60});
		}

		res.json(results)
	} catch (err) {
		next (err)
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