import { getPokeArray } from '../storage-utils.js';

export function renderResults() {
    const resultsUl = document.getElementById('poke-ul');
    const pokeArray = getPokeArray();
    for (let pokemon of pokeArray){
        if (pokemon.encountered !== 0) {
            resultsUl.append(renderPokeResult(pokemon));
        }
    }
}

export function renderPokeResult(pokemon) {
    const pokeLi = document.createElement('li');
    const propValuesWrpr = document.createElement('div');
    const encntrSpan = document.createElement('span');
    const cptrdSpan = document.createElement('span');
    const pokeImg = document.createElement('img');
    
    pokeLi.classList.add('poke-li');
    propValuesWrpr.classList.add('prop-values-wrapper');
    pokeImg.classList.add('poke-img');
    pokeImg.src = pokemon.path;
    encntrSpan.textContent = `Encounters: ${pokemon.encountered}`;
    cptrdSpan.textContent = `Captured: ${pokemon.caught}`;
    
    propValuesWrpr.append(encntrSpan, cptrdSpan);
    pokeLi.append(pokeImg, propValuesWrpr);

    return pokeLi;
}