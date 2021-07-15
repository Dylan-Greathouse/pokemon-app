
export const CURRENT_SESSION = 'CURRENT_SESSION';
export const ALL_SESSIONS = 'ALL_SESSIONS';

export function setPokeArray(pokeArray) {
    localStorage.setItem(CURRENT_SESSION, JSON.stringify(pokeArray));
}

export function getPokeArray() {
    const pokeString = localStorage.getItem(CURRENT_SESSION);
    return JSON.parse(pokeString);
}

export function setPokeProp(id, property, value) {
    const pokeArray = getPokeArray();
    for (let pokemon of pokeArray) {
        if (pokemon.id === id) {
            pokemon[property] = value;
        }
    }
    setPokeArray(pokeArray);
}

export function incrementPokeProp(id, property) {
    const pokeArray = getPokeArray();
    for (let pokemon of pokeArray) {
        if (pokemon.id === id) {
            pokemon[property] = pokemon[property] + 1;
        }
    }
    setPokeArray(pokeArray);
}

export function updateEncntrdLast(current3) {
    let pokeArray = getPokeArray();
    for (let pokemon of pokeArray) {
        if (current3.indexOf(pokemon.id) === -1) {
            pokemon.encounteredLast = false;
        }
    }
    setPokeArray(pokeArray);
}