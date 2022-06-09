// tutorial: https://betterprogramming.pub/make-a-team-roster-with-node-react-and-google-sheets-305b9f9ebbb1

import { RateLimiter } from 'limiter';

const { TablesServiceClient } = require('@google/area120-tables').v1alpha1;
const express = require('express')()
require('dotenv').config()
const p = process.env

express.get('/api/data', async (request, response) => {
	const tablesClient = new TablesServiceClient();
	const n = null;

	const limiter = new RateLimiter({ tokensPerInterval: 10, interval: "second" });

	// const keys = [
	// 	'id',							'national',				'name',
	// 	'spriteNormalRB',	'spriteNormalY',	'spriteBackRB',
	// 	'spriteBackY',		'category',				'type1',
	// 	'type2',					'kantoDex',				'redText',
	// 	'greenText',			'blueText',				'yellowText',
	// 	'height',					'weight',					'catchRate',
	// 	'baseFriendship',	'xpGrowth',				'growthRate',
	// 	'japanese',				'japaneseKata',		'french',
	// 	'german',					'korean',					'hp',
	// 	'hp50Min',				'hp50Max',				'hp100Min',
	// 	'hp100Max',				'att',						'att50Min',
	// 	'att50Max',				'att100Min',			'att100Max',
	// 	'def',						'def50Min',				'def50Max',
	// 	'def100Max',			'def100Min',			'sp',
	// 	'sp50Min',				'sp50Max',				'sp100Min',
	// 	'sp100Max',				'spd',						'spd50Min',
	// 	'spd50Max',				'spd100Min',			'spd100Max'
	// ]

	// const nationalDex = [];
	// const nationalIterable = await tablesClient.listRowsAsync(r);
  // for await (const ndIR of nationalIterable) {
	// 	nationalDex.push({ ndIR
	// 		name: ndIR.name,
	// 		values: {
	// 			id: ndIR.values.id ? ndIR.values.id.stringValue : n,
	// 			national: ndIR.values.national ? ndIR.values.national.numberValue : n,
	// 			name: ndIR.values.name ? ndIR.values.name.stringValue : n,
	// 			artwork: ndIR.values.artwork ? ndIR.values.artwork.stringValue : n,
	// 			type1: ndIR.values.type1 ? ndIR.values.artwork.type1 : n,
	// 			type2: ndIR.values.type2 ? ndIR.values.artwork.type2 : n,
	// 		},
	// 		data: ndIR.values,
	// 	})
  // }

	const gen1 = [];

	async function callListRows() {
		const gen1Iterable = await tablesClient.listRowsAsync({parent: p.GEN_1_TABLE});
		for await (const gen1IR of gen1Iterable) {
			gen1.push({
				name: gen1IR.name,
				values: {
					// look into this later... there has to be a way to do this and make cleaner code
					// keys.map(key => [
					// 	'key': gen1IR.values[key],
					// ])
					id: gen1IR.values.id ? gen1IR.values.id.stringValue : n,
					national: gen1IR.values.national ? gen1IR.values.national.numberValue : n,
					name: gen1IR.values.name ? gen1IR.values.name.stringValue : n,
					spriteNormalRB: gen1IR.values.spriteNormalRB ? gen1IR.values.spriteNormalRB.stringValue : n,
					spriteNormalY: gen1IR.values.spriteNormalY ? gen1IR.values.spriteNormalY.stringValue : n,
					spriteBackRB: gen1IR.values.spriteBackRB ? gen1IR.values.spriteBackRB.stringValue : n,
					spriteBackY: gen1IR.values.spriteBackY ? gen1IR.values.spriteBackY.stringValue : n,
					category: gen1IR.values.category ? gen1IR.values.category.stringValue : n,
					type1: gen1IR.values.type1 ? gen1IR.values.type1.stringValue : n,
					type2: gen1IR.values.type2 ? gen1IR.values.type2.stringValue : n,
					kantoDex: gen1IR.values.kantoDex ? gen1IR.values.kantoDex.numberValue : n,
					redText: gen1IR.values.redText ? gen1IR.values.redText.stringValue : n,
					greenText: gen1IR.values.greenText ? gen1IR.values.greenText.stringValue : n,
					blueText: gen1IR.values.blueText ? gen1IR.values.blueText.stringValue : n,
					yellowText: gen1IR.values.yellowText ? gen1IR.values.yellowText.stringValue : n,
					height: gen1IR.values.height ? gen1IR.values.height.numberValue : n,
					weight: gen1IR.values.weight ? gen1IR.values.weight.numberValue : n,
					catchRateRB: gen1IR.values.catchRateRB ? gen1IR.values.catchRateRB.numberValue : n,
					catchRateY: gen1IR.values.catchRateY ? gen1IR.values.catchRateY.numberValue : n,
					xpGrowth: gen1IR.values.xpGrowth ? gen1IR.values.xpGrowth.numberValue : n,
					growthRate: gen1IR.values.growthRate ? gen1IR.values.growthRate.stringValue : n,
					japanese: gen1IR.values.japanese ? gen1IR.values.japanese.stringValue : n,
					japaneseKata: gen1IR.values.japaneseKata ? gen1IR.values.japaneseKata.stringValue : n,
					french: gen1IR.values.french ? gen1IR.values.french.stringValue : n,
					german: gen1IR.values.german ? gen1IR.values.german.stringValue : n,
					korean: gen1IR.values.korean ? gen1IR.values.korean.stringValue : n,
					hp: gen1IR.values.hp ? gen1IR.values.hp.numberValue : n,
					hp50Min: gen1IR.values.hp50Min ? gen1IR.values.hp50Min.numberValue : n,
					hp50Max: gen1IR.values.hp50Max ? gen1IR.values.hp50Max.numberValue : n,
					hp100Min: gen1IR.values.hp100Min ? gen1IR.values.hp100Min.numberValue : n,
					hp100Max: gen1IR.values.hp100Max ? gen1IR.values.hp100Max.numberValue : n,
					att: gen1IR.values.att ? gen1IR.values.att.numberValue : n,
					att50Min: gen1IR.values.att50Min ? gen1IR.values.att50Min.numberValue : n,
					att50Max: gen1IR.values.att50Max ? gen1IR.values.att50Max.numberValue : n,
					att100Min: gen1IR.values.att100Min ? gen1IR.values.att100Min.numberValue : n,
					att100Max: gen1IR.values.att100Max ? gen1IR.values.att100Max.numberValue : n,
					def: gen1IR.values.def ? gen1IR.values.def.numberValue : n,
					def100Max: gen1IR.values.def100Max ? gen1IR.values.def100Max.numberValue : n,
					def100Min: gen1IR.values.def100Min ? gen1IR.values.def100Min.numberValue : n,
					sp: gen1IR.values.sp ? gen1IR.values.sp.numberValue : n,
					sp50Min: gen1IR.values.sp50Min ? gen1IR.values.sp50Min.numberValue : n,
					sp50Max: gen1IR.values.sp50Max ? gen1IR.values.sp50Max.numberValue : n,
					sp100Min: gen1IR.values.sp100Min ? gen1IR.values.sp100Min.numberValue : n,
					sp100Max: gen1IR.values.sp100Max ? gen1IR.values.sp100Max.numberValue : n,
					spd: gen1IR.values.spd ? gen1IR.values.spd.numberValue : n,
					spd50Min: gen1IR.values.spd50Min ? gen1IR.values.spd50Min.numberValue : n,
					spd50Max: gen1IR.values.spd50Max ? gen1IR.values.spd50Max.numberValue : n,
					spd100Min: gen1IR.values.spd100Min ? gen1IR.values.spd100Min.numberValue : n,
					spd100Max: gen1IR.values.spd100Max ? gen1IR.values.spd100Max.numberValue : n,
					updateTime: gen1IR.values.updateTime ? gen1IR.values.updateTime.structValue.fields.seconds.numberValue : n,
				},
				// data: gen1IR.values,
			})
		}
	}

	callListRows();

	response.json({
		// national: nationalDex,
		gen1: gen1
	})
	
})

express.listen(p.PORT, () =>
	console.log(`Express Server Running on port ${p.PORT}`)
)