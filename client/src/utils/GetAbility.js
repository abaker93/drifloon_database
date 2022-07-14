import { useState, useEffect } from "react";

export const GetAbility = (abil) => {
	const [ability, setAbility] = useState([])

	useEffect(() => {
		const getAbility = async () => {
			const fetched = await fetch(`/api/abilities`, { method: 'GET' })
			const read = await fetched.json()
			const filter = read.filter(a => a.ability.toLowerCase().replaceAll(' ', '-').includes(abil))

			setAbility(filter)
		}
		getAbility()
	}, [abil])

	return ability
}