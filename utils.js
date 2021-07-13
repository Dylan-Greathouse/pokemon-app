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