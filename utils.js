import { getPokeArray } from './storage-utils.js';

export function constructPokeArray(pokeDataArray) {
    let newPokeArray = [];
    for (let pokeObject of pokeDataArray) {
        newPokeArray.push(
            {
                'name': pokeObject.pokemon,
                'id': pokeObject.id,
                'path': pokeObject.url_image,
                'encountered': 0,
                'encounteredLast': false,
                'caught': 0,
                'type': pokeObject.type_1
            }
        );
    }
    return newPokeArray;
}

export function findById(pokeArray, id) {
    for (let pokemon of pokeArray) {
        if (pokemon.id === id) {
            return pokemon;
        }
    }
    return null;
}

export function getRandomNumber(range){
    let randNum = Math.floor(Math.random() * range);
    return randNum;
}


export function isValid(randNum){
    const pokeArray = getPokeArray();
    if (randNum >= 0 && randNum < pokeArray.length) {
        let pokemon = pokeArray[randNum];
        if (pokemon.encounteredLast === true) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}