import { useState, useEffect } from "react";

export const GetLocations = (dex, game, poke) => {
	const [locations, setLocations] = useState([])

	useEffect(() => {
		const getLocations = async () => {
			const fetched = await fetch(`/api/${dex}loc`, { method: 'GET' })
			const read = await fetched.json()
			const filter = read.filter(l => l.games.includes(game) && l.pokemon.includes(poke))
			const sort = filter.sort((a, b) => (a.location > b.location) ? 1 : -1)

			setLocations(sort)
		}
		getLocations()
	}, [dex, game, poke])

	return locations
}