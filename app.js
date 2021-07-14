import pokemon from './assets/pokemon.js'; 
import { constructPokeArray, findById, getRandomNumber, isValid } from './utils.js';
import { getPokeArray, setPokeProp, setPokeArray } from './storage-utils.js';
import { renderPokemon } from './render-pokemon.js';

const buttonChoice = document.getElementById('choice');

let rounds = 0;

setPokeArray(constructPokeArray(pokemon));


// Render pokemon function main page 
function whosThatPokemon(){
    const pokeArray = getPokeArray();
    rounds++;
    let current3 = [];
    for (let i = 0; i < 3; i++){
        let randNum = getRandomNumber(pokeArray.length);
        while (!isValid(randNum)) {
            randNum = getRandomNumber(pokeArray.length);
        }
        current3.push(findById(pokeArray, randNum));
        setPokeProp(randNum, 'encounteredLast', true);
    } 
    renderPokemon(current3);

}
whosThatPokemon();

  // Get a random number between 0 and pokemon array length
  // check if pokemon with that id is valid for this round
    // if so, update that pokemons encountered and encountered last attribute
    // if not roll again
  // once there are three pokemon chosen, render them all, update 
  // the current sessions pokemon object to reflect that none of 
  // the other pokemon were encountered last

