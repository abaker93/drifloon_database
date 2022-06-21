import { useState, useEffect } from "react";

export const GetPoke = (dex, primary, poke) => {
	const [pokemon, setPokemon] = useState([])

	useEffect(() => {
		const getPokemon = async () => {
			const fetchedPokemon = await fetch(`/api/${dex}`, { method: 'GET' })
			const read = await fetchedPokemon.json()
			const filter = read.filter(a => a[primary] === poke)

			setPokemon(filter)
		}
		getPokemon()
	}, [dex])

	return pokemon
}