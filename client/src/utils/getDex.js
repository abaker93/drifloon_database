import { useState, useEffect } from "react";

export const GetDex = dex => {
	const [pokemon, setPokemon] = useState([])

	useEffect(() => {
		const getPokemon = async () => {
			const fetchedPokemon = await fetch(`/api/${dex}`, { method: 'GET' })
			const read = await fetchedPokemon.json()
			setPokemon(read)
		}
		getPokemon()
	}, [dex])

	return pokemon
}