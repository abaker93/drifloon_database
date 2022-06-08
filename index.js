const { TablesServiceClient } = require('@google/area120-tables').v1alpha1;
const express = require('express')()
require('dotenv').config()
const p = process.env

express.get('/api/data', async (request, response) => {
	const tablesClient = new TablesServiceClient();
  const variables = {
    parent: p.parent,
  };

	const arr = [];

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

	const iterable = await tablesClient.listRowsAsync(variables);

  for await (const iterableResponse of iterable) {
		const n = null
    
		arr.push({
			name: iterableResponse.name,
			values: {
				// look into this later... there has to be a way to do this and make cleaner code
				// keys.map(key => [
				// 	'key': iterableResponse.values[key],
				// ])
				id: iterableResponse.values.id ? iterableResponse.values.id.stringValue : n,
				national: iterableResponse.values.national ? iterableResponse.values.national.numberValue : n,
				name: iterableResponse.values.name ? iterableResponse.values.name.stringValue : n,
				spriteNormalRB: iterableResponse.values.spriteNormalRB ? iterableResponse.values.spriteNormalRB.stringValue : n,
				spriteNormalY: iterableResponse.values.spriteNormalY ? iterableResponse.values.spriteNormalY.stringValue : n,
				spriteBackRB: iterableResponse.values.spriteBackRB ? iterableResponse.values.spriteBackRB.stringValue : n,
				spriteBackY: iterableResponse.values.spriteBackY ? iterableResponse.values.spriteBackY.stringValue : n,
				category: iterableResponse.values.category ? iterableResponse.values.category.stringValue : n,
				type1: iterableResponse.values.type1 ? iterableResponse.values.type1.stringValue : n,
				type2: iterableResponse.values.type2 ? iterableResponse.values.type2.stringValue : n,
				kantoDex: iterableResponse.values.kantoDex ? iterableResponse.values.kantoDex.numberValue : n,
				redText: iterableResponse.values.redText ? iterableResponse.values.redText.stringValue : n,
				greenText: iterableResponse.values.greenText ? iterableResponse.values.greenText.stringValue : n,
				blueText: iterableResponse.values.blueText ? iterableResponse.values.blueText.stringValue : n,
				yellowText: iterableResponse.values.yellowText ? iterableResponse.values.yellowText.stringValue : n,
				height: iterableResponse.values.height ? iterableResponse.values.height.numberValue : n,
				weight: iterableResponse.values.weight ? iterableResponse.values.weight.numberValue : n,
				catchRateRB: iterableResponse.values.catchRateRB ? iterableResponse.values.catchRateRB.numberValue : n,
				catchRateY: iterableResponse.values.catchRateY ? iterableResponse.values.catchRateY.numberValue : n,
				xpGrowth: iterableResponse.values.xpGrowth ? iterableResponse.values.xpGrowth.numberValue : n,
				growthRate: iterableResponse.values.growthRate ? iterableResponse.values.growthRate.stringValue : n,
				japanese: iterableResponse.values.japanese ? iterableResponse.values.japanese.stringValue : n,
				japaneseKata: iterableResponse.values.japaneseKata ? iterableResponse.values.japaneseKata.stringValue : n,
				french: iterableResponse.values.french ? iterableResponse.values.french.stringValue : n,
				german: iterableResponse.values.german ? iterableResponse.values.german.stringValue : n,
				korean: iterableResponse.values.korean ? iterableResponse.values.korean.stringValue : n,
				hp: iterableResponse.values.hp ? iterableResponse.values.hp.numberValue : n,
				hp50Min: iterableResponse.values.hp50Min ? iterableResponse.values.hp50Min.numberValue : n,
				hp50Max: iterableResponse.values.hp50Max ? iterableResponse.values.hp50Max.numberValue : n,
				hp100Min: iterableResponse.values.hp100Min ? iterableResponse.values.hp100Min.numberValue : n,
				hp100Max: iterableResponse.values.hp100Max ? iterableResponse.values.hp100Max.numberValue : n,
				att: iterableResponse.values.att ? iterableResponse.values.att.numberValue : n,
				att50Min: iterableResponse.values.att50Min ? iterableResponse.values.att50Min.numberValue : n,
				att50Max: iterableResponse.values.att50Max ? iterableResponse.values.att50Max.numberValue : n,
				att100Min: iterableResponse.values.att100Min ? iterableResponse.values.att100Min.numberValue : n,
				att100Max: iterableResponse.values.att100Max ? iterableResponse.values.att100Max.numberValue : n,
				def: iterableResponse.values.def ? iterableResponse.values.def.numberValue : n,
				def100Max: iterableResponse.values.def100Max ? iterableResponse.values.def100Max.numberValue : n,
				def100Min: iterableResponse.values.def100Min ? iterableResponse.values.def100Min.numberValue : n,
				sp: iterableResponse.values.sp ? iterableResponse.values.sp.numberValue : n,
				sp50Min: iterableResponse.values.sp50Min ? iterableResponse.values.sp50Min.numberValue : n,
				sp50Max: iterableResponse.values.sp50Max ? iterableResponse.values.sp50Max.numberValue : n,
				sp100Min: iterableResponse.values.sp100Min ? iterableResponse.values.sp100Min.numberValue : n,
				sp100Max: iterableResponse.values.sp100Max ? iterableResponse.values.sp100Max.numberValue : n,
				spd: iterableResponse.values.spd ? iterableResponse.values.spd.numberValue : n,
				spd50Min: iterableResponse.values.spd50Min ? iterableResponse.values.spd50Min.numberValue : n,
				spd50Max: iterableResponse.values.spd50Max ? iterableResponse.values.spd50Max.numberValue : n,
				spd100Min: iterableResponse.values.spd100Min ? iterableResponse.values.spd100Min.numberValue : n,
				spd100Max: iterableResponse.values.spd100Max ? iterableResponse.values.spd100Max.numberValue : n,
			},
			// data: iterableResponse.values
		})
  }

	response.json(arr)
	
})

express.listen(p.PORT, () =>
	console.log(`Express Server Running on port ${p.PORT}`)
)