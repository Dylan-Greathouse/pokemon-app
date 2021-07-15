import { getPokeArray } from '../storage-utils.js';
export function resultsData() {
    const resultsData = document.getElementById('dataUl');
    const pokeArray = getPokeArray();
    for (let pokeElement of pokeArray){
        if (pokeElement.encountered !== 0) {
            resultsData.append(renderPokeResults(pokeElement));
        }
    }
}

export function renderPokeResults(pokemon) {
    const dataLi = document.createElement('li');
    dataLi.classList.add('dataLi');
    const dataDiv = document.createElement('div');
    dataDiv.classList.add('dataDiv');
    const dataSpan1 = document.createElement('span');
    const dataSpan2 = document.createElement('span');
    const dataImg = document.createElement('img');
    dataImg.classList.add('dataImg');
    dataImg.src = pokemon['path'];
    dataSpan1.textContent = `Encounters: ${pokemon['encountered']}`;
    dataSpan2.textContent = `Captured: ${pokemon['caught']}`;
    dataDiv.append(dataSpan1, dataSpan2);
    dataLi.append(dataImg, dataDiv);


    return dataLi;

}