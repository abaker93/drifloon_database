import { useState, useEffect } from "react";

export const GetEggGroup = (group) => {
	const [eggGroup, setEggGroup] = useState([])

	useEffect(() => {
		const getEggGroup = async () => {
			const fetched = await fetch(`/api/egggroups`, { method: 'GET' })
			const read = await fetched.json()
			const filter = read.filter(e => e.eggGroup.toLowerCase().replaceAll(' ', '-').includes(group))

			setEggGroup(filter)
		}
		getEggGroup()
	}, [group])

	return eggGroup
}