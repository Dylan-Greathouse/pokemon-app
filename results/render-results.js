import { getPokeArray } from '../storage-utils.js';

export function renderResults() {
    const resultsData = document.getElementById('dataUl');
    const pokeArray = getPokeArray();
    for (let pokeElement of pokeArray){
        if (pokeElement.encountered !== 0) {
            resultsData.append(renderPokeResults(pokeElement));
        }
    }
}

export function renderPokeResults(pokemon) {
    const pokeLi = document.createElement('li');
    pokeLi.classList.add('dataLi');
    const propValuesWrpr = document.createElement('div');
    propValuesWrpr.classList.add('dataDiv');
    const encntrSpan = document.createElement('span');
    const cptrdSpan = document.createElement('span');
    const pokeImg = document.createElement('img');
    pokeImg.classList.add('dataImg');
    pokeImg.src = pokemon['path'];
    encntrSpan.textContent = `Encounters: ${pokemon['encountered']}`;
    cptrdSpan.textContent = `Captured: ${pokemon['caught']}`;
    propValuesWrpr.append(encntrSpan, cptrdSpan);
    pokeLi.append(pokeImg, propValuesWrpr);

    return pokeLi;
}