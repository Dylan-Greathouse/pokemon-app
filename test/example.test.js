// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { constructPokeArray } from '../utils.js';
import { CURRENT_SESSION, getPokeArray, setPokeArray } from '../storage-utils.js';
const test = QUnit.test;

// Storage Utils: Need for other functions to work
test('should construct pokemon from raw data', (expect) => {
    const fakePokeData = [{
        '_id':'5cef3501ef6005a77cd4fd17',
        'pokemon':'bulbasaur',
        'id':1,
        'species_id':1,
        'height':7,
        'weight':69,
        'base_experience':64,
        'type_1':'grass',
        'type_2':'poison',
        'attack':49,
        'defense':49,
        'hp':45,
        'special_attack':65,
        'special_defense':65,
        'speed':45,
        'ability_1':'overgrow',
        'ability_2':'NA',
        'ability_hidden':'chlorophyll',
        'color_1':'#78C850',
        'color_2':'#A040A0',
        'color_f':'#81A763',
        'egg_group_1':'monster',
        'egg_group_2':'plant',
        'url_image':'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        'generation_id':1,
        'evolves_from_species_id':'NA',
        'evolution_chain_id':1,
        'shape_id':8,
        'shape':'quadruped',
        'pokebase':'bulbasaur',
        'pokedex':'http://www.pokemon.com/us/pokedex/bulbasaur'
    },
    {
        '_id':'5cef3501ef6005a77cd4fd19',
        'pokemon':'ivysaur',
        'id':2,
        'species_id':2,
        'height':10,
        'weight':130,
        'base_experience':142,
        'type_1':'grass',
        'type_2':'poison',
        'attack':62,
        'defense':63,
        'hp':60,
        'special_attack':80,
        'special_defense':80,
        'speed':60,
        'ability_1':'overgrow',
        'ability_2':'NA',
        'ability_hidden':'chlorophyll',
        'color_1':'#78C850',
        'color_2':'#A040A0',
        'color_f':'#81A763',
        'egg_group_1':'monster',
        'egg_group_2':'plant',
        'url_image':'http://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
        'generation_id':1,
        'evolves_from_species_id':'1',
        'evolution_chain_id':1,
        'shape_id':8,
        'shape':'quadruped',
        'pokebase':'ivysaur',
        'pokedex':'http://www.pokemon.com/us/pokedex/ivysaur'
    },
    {
        '_id':'5cef3501ef6005a77cd4fd1a',
        'pokemon':'charmander',
        'id':5,
        'species_id':4,
        'height':6,
        'weight':85,
        'base_experience':62,
        'type_1':'fire',
        'type_2':'NA',
        'attack':52,
        'defense':43,
        'hp':39,
        'special_attack':60,
        'special_defense':50,
        'speed':65,
        'ability_1':'blaze',
        'ability_2':'NA',
        'ability_hidden':'solar-power',
        'color_1':'#F08030',
        'color_2':'NA',
        'color_f':'NA',
        'egg_group_1':'monster',
        'egg_group_2':'dragon',
        'url_image':'http://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        'generation_id':1,
        'evolves_from_species_id':'NA',
        'evolution_chain_id':2,
        'shape_id':6,
        'shape':'upright',
        'pokebase':'charmander',
        'pokedex':'http://www.pokemon.com/us/pokedex/charmander'
    }];
    
    const expected = [
        {
            'id': 1,
            'name': 'bulbasaur',
            'path': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
            'encountered': 0,
            'caught': 0,
            'encounteredLast': false
        },
        {
            'id': 2,
            'name': 'ivysaur',
            'path': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
            'encountered': 0,
            'caught': 0,
            'encounteredLast': false
        },
        {
            'id': 5,
            'name': 'charmander',
            'path': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
            'encountered': 0,
            'caught': 0,
            'encounteredLast': false
        }
    ];
    const actual = constructPokeArray(fakePokeData);
    expect.deepEqual(actual, expected);
});

test('should set CURRENT_SESSION to stringified pokeArray in local storage', (expect) => {
    const fakePokeArray = [
        {
            'id': 1,
            'name': 'bulbasaur',
            'path': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
            'encountered': 0,
            'caught': 0,
            'encounteredLast': false
        },
        {
            'id': 2,
            'name': 'ivysaur',
            'path': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
            'encountered': 0,
            'caught': 0,
            'encounteredLast': false
        },
        {
            'id': 5,
            'name': 'charmander',
            'path': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
            'encountered': 0,
            'caught': 0,
            'encounteredLast': false
        }
    ];
    setPokeArray(fakePokeArray);
    const expected = JSON.stringify(fakePokeArray);
    const actual = localStorage.getItem('CURRENT_SESSION');
    expect.deepEqual(expected, actual);
});

test('does  incrementPokeProp increase property value when called', (expect) => {
    const fakePokeArray = [
        {
            'id': 1,
            'name': 'bulbasaur',
            'path': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
            'encountered': 0,
            'caught': 0,
            'encounteredLast': false
        },
        {
            'id': 2,
            'name': 'ivysaur',
            'path': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
            'encountered': 0,
            'caught': 0,
            'encounteredLast': false
        },
        {
            'id': 5,
            'name': 'charmander',
            'path': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
            'encountered': 0,
            'caught': 0,
            'encounteredLast': false
        }
    ]; const pokeString = JSON.stringify(fakePokeArray);
    localStorage.setItem(CURRENT_SESSION, pokeString);
    const fakeArray = getPokeArray();
    expect.deepEqual(fakeArray, fakePokeArray);
});


