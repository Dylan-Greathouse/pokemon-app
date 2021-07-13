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
                'caught': 0
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