import React from 'react'

// Zadání 1: Dopiš komponentu `Pozdrav`, aby v tlačítku byl text „Pozdrav DOPLŇ_JMÉNO_VE_ČTVRTÉM_PÁDĚ“.
// Zadání 2: Na klik zobraz bublinu s textem „Ahoj DOPLŇ_JMÉNO_V_PÁTÉM_PÁDĚ“.

// Na stránce by se pak uživateli měla ukázat dvě tlačítka `<button>Pozdrav Martina</button><button>Pozdrav Anetu</button>` a po kliku vyskočit bublina s textem „Ahoj Martine“ nebo „Ahoj Aneto“.

const Pozdrav = ({ jmenoVeCtvrtemPade, jmenoVPatemPade }) => {

	const onclickHandler = () => {
		alert('ahoj ' + jmenoVPatemPade)
	}

	return (
		<>
		<button onClick={onclickHandler}>Pozdrav {jmenoVeCtvrtemPade}</button>
		</>
	)
}

// Zadání 3: Do komponenty `Uloha4` přidej ještě dvě použití komponenty `Pozdrav`. Jednou s tvým jménem a jednou se jménem kouče.

export const Uloha4 = () => {
	return (
		<>
			<Pozdrav jmenoVeCtvrtemPade="Martina" jmenoVPatemPade="Martine" />
			<Pozdrav jmenoVeCtvrtemPade="Anetu" jmenoVPatemPade="Aneto" />
			<Pozdrav jmenoVeCtvrtemPade="Barču" jmenoVPatemPade="Barčo" />
			<Pozdrav jmenoVeCtvrtemPade="Luďka" jmenoVPatemPade="Luďku" />
		</>
	)
}