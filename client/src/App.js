import React, { useState, useEffect } from "react";

const App = () => {
	const [national, setNational] = useState([])

	useEffect(() => {
		const getNational = async () => {
			const fetchedNational = await fetch('/api/data', {
					method: 'GET',
					credentials: 'same-origin',
			})
			const read = await fetchedNational.json()
			setNational(read.national)
		}
		
		getNational()
	}, [])

	return (
		<>
			{national.map((poke, i) => (
				<div key={i}>
						<img src={poke.values.artwork} alt={`${poke.values.name} artwork`} />
						{poke.values.national} | {poke.values.name}
				</div>
			))}
		</>
	)
}

export default App