import pokemonDataRaw from './assets/pokemon.js';
import { constructPokeArray, getRandomNumber, isValid } from './utils.js';
import { getPokeArray, setPokeProp, setPokeArray, incrementPokeProp } from './storage-utils.js';
import { renderPokemon } from './render-pokemon.js';

setPokeArray(constructPokeArray(pokemonDataRaw));

for (let pokemon of pokemonDataRaw) {
    let myImage = document.createElement('img');
    myImage.src = pokemon.path;
}

export function newRound(totalRounds = 1) {
    const pokeArray = getPokeArray();
    let currentThree = [];
    for (let i = 0; i < 3; i++) {
        let randNum = getRandomNumber(pokeArray.length);
        while (!isValid(randNum)) {
            randNum = getRandomNumber(pokeArray.length);
        }
        let randomPokemon = pokeArray[randNum];
        currentThree.push(randomPokemon);
        setPokeProp(randomPokemon.id, 'encounteredLast', true);
    }
    for (let pokemon of currentThree) {
        incrementPokeProp(pokemon.id, 'encountered');
    }
    renderPokemon(currentThree, totalRounds);
}

newRound();
