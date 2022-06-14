const { TablesServiceClient } = require('@google/area120-tables').v1alpha1;
const express = require('express');
const redis = require('redis');
require('dotenv').config();

const p = process.env
const redisClient = redis.createClient();

(async () => {
  redisClient.on('error', (err) => {
    console.log('Redis Client Error', err);
  });
  redisClient.on('ready', () => console.log('Redis is ready'));

  await redisClient.connect();

  await redisClient.ping();
})();

const app = express();

const tablesClient = new TablesServiceClient();

async function callListRows() {
	const nd = [];
	const ndI = tablesClient.listRowsAsync({ parent: p.NATIONAL_DEX_TABLE })
	for await (const pokemon of ndI) {
		nd.push(pokemon.values)
	}
	return nd
}

app.get('/api', async (req, res, next) => {
	try {
		let results = null;

		const key = 'national'

		const value = await redisClient.get(key);
		if (value) {
			results = JSON.parse(value);
			console.log('from CACHE data')
		} else {
			console.log('from SOURCE data')
			results = await callListRows();
			redisClient.setEx(key, 5, JSON.stringify(results));
		}

		res.json({
			results
		})
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