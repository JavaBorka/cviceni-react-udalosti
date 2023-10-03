import React from 'react'

// Zadání: Předstírejme, že na stránce je složitý formulář, do kterého uživatel možná pracně vyplnil nějaká data. Po kliku na odkaz se radši uživatele zeptej pomocí `confirm`, jestli chce opravdu odejít na jinou stránku a tím ztratit rozpracovanou práci. Pokud otázku nepotvrdí, nechce odejít, zamez přesměrování pomocí `event.preventDefault()`.

// export const ZaverecnyBonus2 = () => {
// 	return (
// 		<>
// 			Odkaz: <a href="https://www.czechitas.cz/">www.czechitas.cz</a>
// 			<hr />
// 			Formulář:
// 			<form>
// 				<textarea
// 					rows={5}
// 					cols={60}
// 					defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aperiam vitae necessitatibus et perspiciatis consectetur, soluta quia vero porro hic, esse tempora sint eaque adipisci asperiores alias repudiandae tempore? Omnis?"
// 				/>
// 				<br />
// 				<button>uložit</button>
// 			</form>
// 		</>
// 	)
// }


// Řešení

export const ZaverecnyBonus2 = () => {

	return (
		<>
			Odkaz:{' '}
			<a
				href="https://www.czechitas.cz/"
				onClick={(event) => {
					if (
						!confirm(
							'Opravdu chcete odejít na jinou stránku? Můžete přijít o rozpracovanou práci.',
						)
					) {
						event.preventDefault()
					}
				}}
			>
				www.czechitas.cz
			</a>
			<hr />
			Formulář:
			<form>
				<textarea
					rows={5}
					cols={60}
					defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aperiam vitae necessitatibus et perspiciatis consectetur, soluta quia vero porro hic, esse tempora sint eaque adipisci asperiores alias repudiandae tempore? Omnis?"
				/>
				<br />
				<button>uložit</button>
			</form>
		</>
	)

// Ta metoda confirm vrátí true/false podle toho, zda klikneš na OK nebo Cancel.
// Ale confirm  je jen typ dialogového okna. Nic se tím fakticky nepotvrzuje. Je to stejné dialogové okno, jako dělá alert() nebo prompt(), jen každé slouží k jinému účelu. Alert jen vyhodí okýnko se zprávou. Prompt ji umožní zadat text. Confirm ti umožní vybrat OK nebo Cancel.
// Nic se tím skutečně nepotvrzuje, jen ti to vrátí hodnotu true/false a ty podle ní můžeš něco udělat.
// JavaScriptové události přidané na prvek, mají vždy přednost před výchozími akcemi nastavenými v prohlížeči. Spustí se vždy dřív, a ta výchozí (default) akce se spustí až jako poslední.
// Výchozí akce pro odkaz, je že prohlížeč načte tu stránku, kam dokaz vede, a zobrazí ji.
// Když se tady v té komponentě klikne na odkaz, tak se nejdřív spustí ta tvoje onClick událost a vykoná se kód uvnitř. Kdyby na tom prvku těch událostí bylo více, tak by se spustily postupně všechny a nakonec ta výchozí akce → načtení nové stránky. Když kdekoliv v tom řetězci událostí před výchozí akcí zavoláš preventDefault(), tak prohlížeči řekneš, že tu výchozí akci na konci nemá vykonat.
// Takže pokud se ti z confirm vrátí false, tak zavoláš preventDefault() a prohlížeč neskočí na ten odkaz, na který jsi klikla.
}
