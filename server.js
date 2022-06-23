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
				
				artwork:			pokemon.values.artwork			?	pokemon.values.artwork.stringValue			: n,
				spriteNorRB:	pokemon.values.spriteNorRB	? pokemon.values.spriteNorRB.stringValue	: n,
				spriteNorY:		pokemon.values.spriteNorY		? pokemon.values.spriteNorY.stringValue		: n,
				spriteBackRB:	pokemon.values.spriteBackRB	? pokemon.values.spriteBackRB.stringValue	: n,
				spriteBackY:	pokemon.values.spriteBackY	? pokemon.values.spriteBackY.stringValue	: n,

				updateTime: pokemon.values.updateTime ?	pokemon.values.updateTime.structValue.fields.seconds.numberValue : n,
				id: pokemon.values.id ? pokemon.values.id.stringValue : n,
			})
		}
		return gen1;
	} else if (key === 'gen2') {
		const gen2 = [];
		const gen2I = tablesClient.listRowsAsync({ parent: p.GEN_2_TABLE })
		for await (const pokemon of gen2I) {
			const altForms = [];
			const altURLs = [];
			pokemon.values.altForms1	? pokemon.values.altForms1.listValue.values.map(alt => altForms.push(alt.stringValue))	: '';
			pokemon.values.altForms2	? pokemon.values.altForms2.listValue.values.map(alt => altForms.push(alt.stringValue))	: '';
			pokemon.values.gen2Alt1		? pokemon.values.gen2Alt1.listValue.values.map(alt => altURLs.push(alt.stringValue))		: '';
			pokemon.values.gen2Alt2		? pokemon.values.gen2Alt2.listValue.values.map(alt => altURLs.push(alt.stringValue))		: '';

			gen2.push({
				// data: pokemon.values,
				name:			pokemon.values.name 		?	pokemon.values.name.stringValue 		: n,
				category:	pokemon.values.category ? pokemon.values.category.stringValue : n,
				type1:		pokemon.values.type1 		? pokemon.values.type1.stringValue 		: n,
				type2:		pokemon.values.type2 		? pokemon.values.type2.stringValue 		: n,
				
				national: pokemon.values.national	? pokemon.values.national.numberValue : n,
				johto:		pokemon.values.johto		? pokemon.values.johto.numberValue 		: n,
				
				goldText:			pokemon.values.goldText 		? pokemon.values.goldText.stringValue			: n,
				silverText:		pokemon.values.silverText		? pokemon.values.silverText.stringValue		: n,
				crystalText:	pokemon.values.crystalText	? pokemon.values.crystalText.stringValue	: n,
				
				height:					pokemon.values.height		 			? pokemon.values.height.numberValue 				: n,
				weight:					pokemon.values.weight					? pokemon.values.weight.numberValue 				: n,
				catchRate:			pokemon.values.catchRate			? pokemon.values.catchRate.numberValue 			: n,
				MGendRatio:			pokemon.values.MGendRatio			? pokemon.values.MGendRatio.numberValue		 	: n,
				FGendRatio:			pokemon.values.FGendRatio			? pokemon.values.FGendRatio.numberValue		 	: n,
				xpGrowth:				pokemon.values.xpGrowth			 	? pokemon.values.xpGrowth.numberValue 			: n,
				growthRate:			pokemon.values.growthRate			? pokemon.values.growthRate.stringValue			: n,
				baseHappiness:	pokemon.values.baseHappiness	? pokemon.values.baseHappiness.numberValue	: n,
				
				wildHeldItemGSC:	{
					item:	pokemon.values.wildHeldItemGSC	? pokemon.values.wildHeldItemGSC.listValue.values.map(item => {return(item.stringValue)})	: n,
				},
				gen1TradeItem:	{
					item:	pokemon.values.gen1TradeItem	? pokemon.values.gen1TradeItem.listValue.values.map(item => {return(item.stringValue)})	: n,
				},

				eggSteps:	pokemon.values.eggSteps			 	? pokemon.values.eggSteps.numberValue	: n,
				eggGroups: {
					groups:	pokemon.values.eggGroups			?	pokemon.values.eggGroups.listValue.values.map(group => {return(group.stringValue)}) : n,
					urls:		pokemon.values.gen2EggGroups	? pokemon.values.gen2EggGroups.listValue.values.map(url => {return(url.stringValue)})	: n,
				},
				
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

				altForms: {
					forms:	altForms,
					urls:		altURLs,
				},
				
				artwork:					pokemon.values.artwork						?	pokemon.values.artwork.stringValue					: n,
				spriteNorG:				pokemon.values.spriteNorG					? pokemon.values.spriteNorG.stringValue				: n,
				spriteNorS:				pokemon.values.spriteNorS					? pokemon.values.spriteNorS.stringValue				: n,
				spriteNorC:				pokemon.values.spriteNorC					? pokemon.values.spriteNorC.stringValue				: n,
				spriteShinyG:			pokemon.values.spriteShinyG				? pokemon.values.spriteShinyG.stringValue			: n,
				spriteShinyS:			pokemon.values.spriteShinyS				? pokemon.values.spriteShinyS.stringValue			: n,
				spriteShinyC:			pokemon.values.spriteShinyC				? pokemon.values.spriteShinyC.stringValue			: n,
				spriteBackG:			pokemon.values.spriteBackG				? pokemon.values.spriteBackG.stringValue			: n,
				spriteBackS:			pokemon.values.spriteBackS				? pokemon.values.spriteBackS.stringValue			: n,
				spriteBackC:			pokemon.values.spriteBackC				? pokemon.values.spriteBackC.stringValue			: n,
				spriteBackShinyG:	pokemon.values.spriteBackShinyG		? pokemon.values.spriteBackShinyG.stringValue	: n,
				spriteBackShinyS:	pokemon.values.spriteBackShinyS		? pokemon.values.spriteBackShinyS.stringValue	: n,
				spriteBackShinyC:	pokemon.values.spriteBackShinyC		? pokemon.values.spriteBackShinyC.stringValue	: n,

				updateTime: pokemon.values.updateTime ?	pokemon.values.updateTime.structValue.fields.seconds.numberValue : n,
				id: pokemon.values.id ? pokemon.values.id.stringValue : n,
			})
		}
		return gen2;
	} else if (key === 'gen3') {
		const gen3 = [];
		const gen3I = tablesClient.listRowsAsync({ parent: p.GEN_3_TABLE })
		for await (const pokemon of gen3I) {
			const altForms = [];
			const altURLs = [];
			pokemon.values.altForms1	? pokemon.values.altForms1.listValue.values.map(alt => altForms.push(alt.stringValue))	: '';
			pokemon.values.altForms2	? pokemon.values.altForms2.listValue.values.map(alt => altForms.push(alt.stringValue))	: '';
			pokemon.values.gen3Alt1		? pokemon.values.gen3Alt1.listValue.values.map(alt => altURLs.push(alt.stringValue))		: '';
			pokemon.values.gen3Alt2		? pokemon.values.gen3Alt2.listValue.values.map(alt => altURLs.push(alt.stringValue))		: '';

			gen3.push({
				// data: pokemon.values,
				name:			pokemon.values.name 		?	pokemon.values.name.stringValue 		: n,
				category:	pokemon.values.category ? pokemon.values.category.stringValue : n,
				type1:		pokemon.values.type1 		? pokemon.values.type1.stringValue 		: n,
				type2:		pokemon.values.type2 		? pokemon.values.type2.stringValue 		: n,

				national: pokemon.values.national	? pokemon.values.national.numberValue : n,
				hoenn:		pokemon.values.hoenn		? pokemon.values.hoenn.numberValue 		: n,
				kanto:		pokemon.values.kanto		? pokemon.values.kanto.numberValue 		: n,

				rubyText:				pokemon.values.rubyText 			? pokemon.values.rubyText.stringValue				: n,
				sapphireText:		pokemon.values.sapphireText		? pokemon.values.sapphireText.stringValue		: n,
				fireRedText:		pokemon.values.fireRedText		? pokemon.values.fireRedText.stringValue		: n,
				leafGreenText:	pokemon.values.leafGreenText	? pokemon.values.leafGreenText.stringValue	: n,
				emeraldText:		pokemon.values.emeraldText		? pokemon.values.emeraldText.stringValue		: n,
				
				height:					pokemon.values.height		 			? pokemon.values.height.numberValue 				: n,
				weight:					pokemon.values.weight					? pokemon.values.weight.numberValue 				: n,
				catchRate:			pokemon.values.catchRate			? pokemon.values.catchRate.numberValue 			: n,
				MGendRatio:			pokemon.values.catchRate			? pokemon.values.catchRate.numberValue		 	: n,
				FGendRatio:			pokemon.values.catchRate			? pokemon.values.catchRate.numberValue		 	: n,
				dexCategory:		pokemon.values.dexCategory		? pokemon.values.dexCategory.stringValue		: n,
				colorCategory:	pokemon.values.colorCategory	? pokemon.values.colorCategory.stringValue	: n,
				footprint:			pokemon.values.footprint			? pokemon.values.footprint.stringValue			: n,

				evYield:	{
					yield:	pokemon.values.evYield	? pokemon.values.evYield.listValue.values.map(yield => {return(yield.stringValue)})	: n,
				},

				abilities: {
					abilities:	pokemon.values.abilities			?	pokemon.values.abilities.listValue.values.map(ability => {return(ability.stringValue)}) : n,
					urls:				pokemon.values.gen3Abilities	? pokemon.values.gen3Abilities.listValue.values.map(url => {return(url.stringValue)}) 		: n,
				},

				eggSteps:	pokemon.values.eggSteps			 	? pokemon.values.eggSteps.numberValue	: n,
				eggGroups: {
					groups:	pokemon.values.eggGroups			?	pokemon.values.eggGroups.listValue.values.map(group => {return(group.stringValue)}) : n,
					urls:		pokemon.values.gen3EggGroups	? pokemon.values.gen3EggGroups.listValue.values.map(url => {return(url.stringValue)})	: n,
				},

				heldItemRSE:	{
					item:	pokemon.values.heldItemRSE	? pokemon.values.heldItemRSE.listValue.values.map(item => {return(item.stringValue)})	: n,
				},
				heldItemFRLG:	{
					item:	pokemon.values.heldItemFRLG	? pokemon.values.heldItemFRLG.listValue.values.map(item => {return(item.stringValue)})	: n,
				},
				
				japanese:			pokemon.values.japanese			? pokemon.values.japanese.stringValue			: n,
				japaneseKata:	pokemon.values.japaneseKata	? pokemon.values.japaneseKata.stringValue	: n,
				french:				pokemon.values.french				? pokemon.values.french.stringValue				: n,
				german:				pokemon.values.german				? pokemon.values.german.stringValue				: n,
				korean:				pokemon.values.korean				? pokemon.values.korean.stringValue				: n,
				
				hp:								pokemon.values.hp								? pokemon.values.hp.numberValue								: n,
				hpHindering:			pokemon.values.hpHindering			? pokemon.values.hpHindering.numberValue			: n,
				hpNeutral:				pokemon.values.hpNeutral				? pokemon.values.hpNeutral.numberValue				: n,
				hpBeneficial:			pokemon.values.hpBeneficial			? pokemon.values.hpBeneficial.numberValue			: n,
				att:							pokemon.values.att							? pokemon.values.att.numberValue							: n,
				attHindering:			pokemon.values.attHindering			? pokemon.values.attHindering.numberValue			: n,
				attNeutral:				pokemon.values.attNeutral				? pokemon.values.attNeutral.numberValue				: n,
				attBeneficial:		pokemon.values.attBeneficial		? pokemon.values.attBeneficial.numberValue		: n,
				def:							pokemon.values.def							? pokemon.values.def.numberValue							: n,
				defHindering:			pokemon.values.defHindering			? pokemon.values.defHindering.numberValue			: n,
				defNeutral:				pokemon.values.defNeutral				? pokemon.values.defNeutral.numberValue				: n,
				defBeneficial:		pokemon.values.defBeneficial		? pokemon.values.defBeneficial.numberValue		: n,
				spAtt:						pokemon.values.spAtt						? pokemon.values.spAtt.numberValue						: n,
				spAttHindering:		pokemon.values.spAttHindering		? pokemon.values.spAttHindering.numberValue		: n,
				spAttNeutral:			pokemon.values.spAttNeutral			? pokemon.values.spAttNeutral.numberValue			: n,
				spAttBeneficial:	pokemon.values.spAttBeneficial	? pokemon.values.spAttBeneficial.numberValue	: n,
				spDef:						pokemon.values.spDef						? pokemon.values.spDef.numberValue						: n,
				spDefHindering:		pokemon.values.spDefHindering		? pokemon.values.spDefHindering.numberValue		: n,
				spDefNeutral:			pokemon.values.spDefNeutral			? pokemon.values.spDefNeutral.numberValue			: n,
				spDefBeneficial:	pokemon.values.spDefBeneficial	? pokemon.values.spDefBeneficial.numberValue	: n,
				spd:							pokemon.values.spd							? pokemon.values.spd.numberValue							: n,
				spdHindering:			pokemon.values.spdHindering			? pokemon.values.spdHindering.numberValue			: n,
				spdNeutral:				pokemon.values.spdNeutral				? pokemon.values.spdNeutral.numberValue				: n,
				spdBeneficial:		pokemon.values.spdBeneficial		? pokemon.values.spdBeneficial.numberValue		: n,

				altForms: {
					forms:	altForms,
					urls:		altURLs,
				},
				
				artwork:							pokemon.values.artwork							?	pokemon.values.artwork.stringValue							: n,
				spriteNorRS:					pokemon.values.spriteNorRS					? pokemon.values.spriteNorRS.stringValue					: n,
				spriteNorFRLG:				pokemon.values.spriteNorFRLG				? pokemon.values.spriteNorFRLG.stringValue				: n,
				spriteNorE:						pokemon.values.spriteNorE						? pokemon.values.spriteNorE.stringValue						: n,
				spriteShinyRS:				pokemon.values.spriteShinyRS				? pokemon.values.spriteShinyRS.stringValue				: n,
				spriteShinyFRLG:			pokemon.values.spriteShinyFRLG			? pokemon.values.spriteShinyFRLG.stringValue			: n,
				spriteShinyE:					pokemon.values.spriteShinyE					? pokemon.values.spriteShinyE.stringValue					: n,
				spriteBackRS:					pokemon.values.spriteBackRS					? pokemon.values.spriteBackRS.stringValue					: n,
				spriteBackFRLG:				pokemon.values.spriteBackFRLG				? pokemon.values.spriteBackFRLG.stringValue				: n,
				spriteBackE:					pokemon.values.spriteBackE					? pokemon.values.spriteBackE.stringValue					: n,
				spriteBackShinyRS:		pokemon.values.spriteBackShinyRS		? pokemon.values.spriteBackShinyRS.stringValue		: n,
				spriteBackShinyFRLG:	pokemon.values.spriteBackShinyFRLG	? pokemon.values.spriteBackShinyFRLG.stringValue	: n,
				spriteBackShinyE:			pokemon.values.spriteBackShinyE			? pokemon.values.spriteBackShinyE.stringValue			: n,

				updateTime: pokemon.values.updateTime ?	pokemon.values.updateTime.structValue.fields.seconds.numberValue : n,
				id: pokemon.values.id ? pokemon.values.id.stringValue : n,
			})
		}
		return gen3;
	} else if (key === 'gen8') {
		const gen8 = [];
		const gen8I = tablesClient.listRowsAsync({ parent: p.GEN_8_TABLE })
		for await (const pokemon of gen8I) {
			const altForms = [];
			const altURLs = [];
			pokemon.values.altForms1	? pokemon.values.altForms1.listValue.values.map(alt => altForms.push(alt.stringValue))	: n;
			pokemon.values.altForms2	? pokemon.values.altForms2.listValue.values.map(alt => altForms.push(alt.stringValue))	: '';
			pokemon.values.gen8Alt1		? pokemon.values.gen8Alt1.listValue.values.map(alt => altURLs.push(alt.stringValue))		: n;
			pokemon.values.gen8Alt2		? pokemon.values.gen8Alt2.listValue.values.map(alt => altURLs.push(alt.stringValue))		: '';

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
				eggCycles:		pokemon.values.eggCycles			? pokemon.values.eggCycles.numberValue 				: n,

				japanese:			pokemon.values.japanese			? pokemon.values.japanese.stringValue			: n,
				japaneseKata:	pokemon.values.japaneseKata	? pokemon.values.japaneseKata.stringValue	: n,
				french:				pokemon.values.french				? pokemon.values.french.stringValue				: n,
				german:				pokemon.values.german				? pokemon.values.german.stringValue				: n,
				korean:				pokemon.values.korean				? pokemon.values.korean.stringValue				: n,

				stats: {
					hp: {
						base:		pokemon.values.hp						? pokemon.values.hp.numberValue						: n,
						min50:	pokemon.values.hp50Min			? pokemon.values.hp50Min.numberValue			: n,
						max50:	pokemon.values.hp50Max			? pokemon.values.hp50Max.numberValue			: n,
						min100:	pokemon.values.hp100Min			? pokemon.values.hp100Min.numberValue			: n,
						max100:	pokemon.values.hp100Max			? pokemon.values.hp100Max.numberValue			: n,
					},
					att: {
						base:		pokemon.values.att					? pokemon.values.att.numberValue					: n,
						min50:	pokemon.values.att50Min			? pokemon.values.att50Min.numberValue			: n,
						max50:	pokemon.values.att50Max			? pokemon.values.att50Max.numberValue			: n,
						min100:	pokemon.values.att100Min		? pokemon.values.att100Min.numberValue		: n,
						max100:	pokemon.values.att100Max		? pokemon.values.att100Max.numberValue		: n,
					},
					def: {
						base:		pokemon.values.def					? pokemon.values.def.numberValue					: n,
						min50:	pokemon.values.def50Min			? pokemon.values.def50Min.numberValue			: n,
						max50:	pokemon.values.def50Max			? pokemon.values.def50Max.numberValue			: n,
						min100:	pokemon.values.def100Min		? pokemon.values.def100Min.numberValue		: n,
						max100:	pokemon.values.def100Max		? pokemon.values.def100Max.numberValue		: n,
					},
					spAtt: {
						base:		pokemon.values.spAtt				? pokemon.values.spAtt.numberValue				: n,
						min50:	pokemon.values.spAtt50Min		? pokemon.values.spAtt50Min.numberValue		: n,
						max50:	pokemon.values.spAtt50Max		? pokemon.values.spAtt50Max.numberValue		: n,
						min100:	pokemon.values.spAtt100Min	? pokemon.values.spAtt100Min.numberValue	: n,
						max100:	pokemon.values.spAtt100Max	? pokemon.values.spAtt100Max.numberValue	: n,
					},
					spDef: {
						base:		pokemon.values.spDef				? pokemon.values.spDef.numberValue				: n,
						min50:	pokemon.values.spDef50Min		? pokemon.values.spDef50Min.numberValue		: n,
						max50:	pokemon.values.spDef50Max		? pokemon.values.spDef50Max.numberValue		: n,
						min100:	pokemon.values.spDef100Min	? pokemon.values.spDef100Min.numberValue	: n,
						max100:	pokemon.values.spDef100Max	? pokemon.values.spDef100Max.numberValue	: n,
					},
					spd: {
						base:		pokemon.values.spd					? pokemon.values.spd.numberValue					: n,
						min50:	pokemon.values.spd50Min			? pokemon.values.spd50Min.numberValue			: n,
						max50:	pokemon.values.spd50Max			? pokemon.values.spd50Max.numberValue			: n,
						min100:	pokemon.values.spd100Min		? pokemon.values.spd100Min.numberValue		: n,
						max100:	pokemon.values.spd100Max		? pokemon.values.spd100Max.numberValue		: n,
					}
				},

				altForms: {
					forms:	altForms,
					urls:		altURLs,
				},

				artwork:				pokemon.values.artwork				?	pokemon.values.artwork.stringValue				: n,
				spriteNorSwSh:	pokemon.values.spriteNorSwSh	? pokemon.values.spriteNorSwSh.stringValue	: n,
				spriteNorLA:		pokemon.values.spriteNorLA		? pokemon.values.spriteNorLA.stringValue		: n,
				spriteNorH:			pokemon.values.spriteNorH			? pokemon.values.spriteNorH.stringValue			: n,
				spriteShinyLA:	pokemon.values.spriteShinyLA	? pokemon.values.spriteShinyLA.stringValue	: n,
				spriteShinyH:		pokemon.values.spriteShinyH		? pokemon.values.spriteShinyH.stringValue		: n,

				updateTime: pokemon.values.updateTime ?	pokemon.values.updateTime.structValue.fields.seconds.numberValue : n,
				id: pokemon.values.id ? pokemon.values.id.stringValue : n,
			})
		}
		return gen8;
	} else if (key === 'gen9') {
		const gen9 = [];
		const gen9I = tablesClient.listRowsAsync({ parent: p.GEN_9_TABLE })
		for await (const pokemon of gen9I) {
			gen9.push({
				// data: pokemon.values,
				name:		pokemon.values.name 	?	pokemon.values.name.stringValue 	: n,
				type1:	pokemon.values.type1 	? pokemon.values.type1.stringValue 	: n,
				type2:	pokemon.values.type2	? pokemon.values.type2.stringValue	: n,

				national: pokemon.values.national ? pokemon.values.national.numberValue : n,
				sV:				pokemon.values.sV				? pokemon.values.sV.numberValue				: n,

				artwork:	pokemon.values.artwork	?	pokemon.values.artwork.stringValue	: n,

				updateTime: pokemon.values.updateTime ?	pokemon.values.updateTime.structValue.fields.seconds.numberValue : n,
				id: pokemon.values.id ? pokemon.values.id.stringValue : n,
			})
		}
		return gen9;
	} else if (key === 'gen8moves') {
		const gen8Moves = [];
		const gen8MovesI = tablesClient.listRowsAsync({ parent: p.GEN_8_MOVES_TABLE })
		for await (const move of gen8MovesI) {
			const pokemon = [];
			move.values.pokemon1	? move.values.pokemon1.listValue.values.map(p => pokemon.push(p.stringValue))	: '';
			move.values.pokemon2	? move.values.pokemon2.listValue.values.map(p => pokemon.push(p.stringValue))	: '';
			move.values.pokemon3	? move.values.pokemon3.listValue.values.map(p => pokemon.push(p.stringValue))	: '';
			move.values.pokemon4	? move.values.pokemon4.listValue.values.map(p => pokemon.push(p.stringValue))	: '';
			move.values.pokemon5	? move.values.pokemon5.listValue.values.map(p => pokemon.push(p.stringValue))	: '';
			move.values.pokemon6	? move.values.pokemon6.listValue.values.map(p => pokemon.push(p.stringValue))	: '';
			move.values.pokemon7	? move.values.pokemon7.listValue.values.map(p => pokemon.push(p.stringValue))	: '';
			move.values.pokemon8	? move.values.pokemon8.listValue.values.map(p => pokemon.push(p.stringValue))	: '';

			gen8Moves.push({
				// data: move.values,
				move:	move.values.moves			? move.values.moves.stringValue			: n,
				url:	move.values.gen8Moves	? move.values.gen8Moves.stringValue	: n,

				pokemon:	pokemon,

				games:	move.values.games	?	move.values.games.listValue.values.map(g => {return(g.stringValue)}) : n,

				moveType:	move.values.moveType	?	move.values.moveType.stringValue	: n,
				level:		move.values.level			?	move.values.level.numberValue			: n,
				hm:				move.values.hm				?	move.values.hm.numberValue				: n,
				tm:				move.values.tm				?	move.values.tm.numberValue				: n,
				method:		move.values.method		?	move.values.method.stringValue		: n,
				
				type:				move.values.type				?	move.values.type.stringValue				: n,
				category:		move.values.category		?	move.values.category.stringValue		: n,
				power:			move.values.power				?	move.values.power.numberValue				: n,
				accuracy:		move.values.accuracy		?	move.values.accuracy.numberValue		: n,
				PP:					move.values.PP					?	move.values.PP.numberValue					: n,
				maxPP:			move.values.maxPP				?	move.values.maxPP.numberValue				: n,
				contact:		move.values.contact			?	move.values.contact.boolValue				: n,
				introduced:	move.values.introduced	?	move.values.introduced.numberValue	: n,
				effects:		move.values.effects			?	move.values.effects.numberValue			: n,
				moveTarget:	move.values.moveTarget	?	move.values.moveTarget.numberValue	: n,
				
				japanese:			move.values.japanese			?	move.values.japanese.numberValue			: n,
				japaneseKata:	move.values.japaneseKata	?	move.values.japaneseKata.numberValue	: n,
				french:				move.values.french				?	move.values.french.numberValue				: n,
				spanish:			move.values.spanish				?	move.values.spanish.numberValue				: n,
				korean:				move.values.korean				?	move.values.korean.numberValue				: n,
				
				descSwSh:	move.values.descSwSh	?	move.values.descSwSh.numberValue	: n,
				descBDSP:	move.values.descBDSP	?	move.values.descBDSP.numberValue	: n,
				descLA:		move.values.descLA		?	move.values.descLA.numberValue		: n,

				updateTime: move.values.updateTime ?	move.values.updateTime.structValue.fields.seconds.numberValue : n,
				id: move.values.id ? move.values.id.stringValue : n,
			})
		}
		return gen8Moves;
	} else {
		return 'no data here';
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
			client.set(key, JSON.stringify(results), {EX: (60 * 15)});
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