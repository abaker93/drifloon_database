import { useState, useEffect } from "react";

export const GetMoves = (dex, poke, type) => {
	const [moves, setMoves] = useState([])

	useEffect(() => {
		const getMoves = async () => {
			const fetchedMoves = await fetch(`/api/${dex}moves`, { method: 'GET' })
			const read = await fetchedMoves.json()
			const filter = read.filter(a => a.pokemon.includes(poke) && a.moveType.includes(type))

			setMoves(filter)
		}
		getMoves()
	}, [dex, poke, type])

	return moves
}