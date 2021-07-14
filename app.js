import pokemon from './assets/pokemon.js';
import { constructPokeArray, getRandomNumber, isValid } from './utils.js';
import { getPokeArray, setPokeProp, setPokeArray, incrementPokeProp } from './storage-utils.js';
import { renderPokemon } from './render-pokemon.js';

setPokeArray(constructPokeArray(pokemon));


// use find by index rather than find by id

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



  // Get a random number between 0 and pokemon array length
  // check if pokemon with that id is valid for this round
    // if so, update that pokemons encountered and encountered last attribute
    // if not roll again
  // once there are three pokemon chosen, render them all, update 
  // the current sessions pokemon object to reflect that none of 
  // the other pokemon were encountered last

