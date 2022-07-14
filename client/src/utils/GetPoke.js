import { useState, useEffect } from "react";

export const GetPoke = (dex, primary, poke) => {
	const [pokemon, setPokemon] = useState([])

	useEffect(() => {
		const getPokemon = async () => {
			const fetchedPokemon = await fetch(`/api/${dex}`, { method: 'GET' })
			const read = await fetchedPokemon.json()
			let filter

			if (typeof poke === 'number') {
				filter = read.filter(a => a[primary] === poke)
			} else {
				filter = read.filter(a => a.name.includes(poke))
			}

			setPokemon(filter)
		}
		getPokemon()
	}, [dex, primary, poke])

	return pokemon
}