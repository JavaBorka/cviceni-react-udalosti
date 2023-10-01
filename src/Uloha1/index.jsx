import React from 'react'

// Zadání: Po kliku na tlačítko zobraz bublinu s textem „Ahoj“.

export const Uloha1 = () => {

	const onclickHandler = () => {
		alert('Ahoj Baška')
	}
	return <button onClick={onclickHandler}>Ukaž bublinu</button>
}
