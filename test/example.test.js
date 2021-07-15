// IMPORT MODULES under test here:
// import { example } from '../example.js';
import pokemon from '../assets/pokemon.js';
import { constructPokeArray, findById, isValid } from '../utils.js';
import { CURRENT_SESSION, getPokeArray, incrementPokeProp, setPokeArray, setPokeProp, updateEncntrdLast } from '../storage-utils.js';
const test = QUnit.test;

// Storage Utils: Need for other functions to work
test(' construct poke Array func should construct pokemon Array from raw data', (expect) => {
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

test('set pokeyArray should set CURRENT_SESSION to stringified pokeArray in local storage', (expect) => {
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
    const actual = localStorage.getItem(CURRENT_SESSION);
    expect.deepEqual(expected, actual);
});

test('increment poke prop should increment Poke property value when called', (expect) => {
    let fakePokeArray = [
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
    incrementPokeProp(5, 'caught');
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
            'caught': 1,
            'encounteredLast': false
        }
    ]; 
    const actual = getPokeArray();
    expect.deepEqual(expected, actual);
});

test('set pokePropshould set encounteredLast property of given pokemon to true', (expect) => {
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
    setPokeProp(5, 'encounteredLast', true);
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
            'encounteredLast': true
        }
    ];
    const actual = getPokeArray();
    expect.deepEqual(expected, actual);
});

test('update encountered last func sets encountered last to false on all but the provided ids', (expect) => {
    const fakePokeString = `[{"name":"bulbasaur","id":1,"path":"http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png","encountered":1,"encounteredLast":true,"caught":0},{"name":"ivysaur","id":2,"path":"http://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png","encountered":1,"encounteredLast":true,"caught":0},{"name":"charmander","id":5,"path":"http://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png","encountered":1,"encounteredLast":true,"caught":0},{"name":"charmeleon","id":6,"path":"http://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png","encountered":1,"encounteredLast":true,"caught":0},{"name":"charizard","id":7,"path":"http://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png","encountered":0,"encounteredLast":false,"caught":0},{"name":"squirtle","id":10,"path":"http://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png","encountered":1,"encounteredLast":true,"caught":0},{"name":"wartortle","id":11,"path":"http://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png","encountered":1,"encounteredLast":true,"caught":0},{"name":"blastoise","id":12,"path":"http://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png","encountered":0,"encounteredLast":false,"caught":0},{"name":"caterpie","id":14,"path":"http://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png","encountered":0,"encounteredLast":false,"caught":0},{"name":"metapod","id":15,"path":"http://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png","encountered":0,"encounteredLast":false,"caught":0},{"name":"beedrill","id":19,"path":"http://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png","encountered":0,"encounteredLast":false,"caught":0},{"name":"weedle","id":17,"path":"http://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png","encountered":0,"encounteredLast":false,"caught":0},{"name":"kakuna","id":18,"path":"http://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png","encountered":0,"encounteredLast":false,"caught":0},{"name":"pidgey","id":21,"path":"http://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png","encountered":0,"encounteredLast":false,"caught":0}]`;
    localStorage.setItem(CURRENT_SESSION, fakePokeString);
    updateEncntrdLast([1, 2, 5]);
    const expected = `[{"name":"bulbasaur","id":1,"path":"http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png","encountered":1,"encounteredLast":true,"caught":0},{"name":"ivysaur","id":2,"path":"http://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png","encountered":1,"encounteredLast":true,"caught":0},{"name":"charmander","id":5,"path":"http://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png","encountered":1,"encounteredLast":true,"caught":0},{"name":"charmeleon","id":6,"path":"http://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png","encountered":1,"encounteredLast":false,"caught":0},{"name":"charizard","id":7,"path":"http://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png","encountered":0,"encounteredLast":false,"caught":0},{"name":"squirtle","id":10,"path":"http://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png","encountered":1,"encounteredLast":false,"caught":0},{"name":"wartortle","id":11,"path":"http://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png","encountered":1,"encounteredLast":false,"caught":0},{"name":"blastoise","id":12,"path":"http://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png","encountered":0,"encounteredLast":false,"caught":0},{"name":"caterpie","id":14,"path":"http://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png","encountered":0,"encounteredLast":false,"caught":0},{"name":"metapod","id":15,"path":"http://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png","encountered":0,"encounteredLast":false,"caught":0},{"name":"beedrill","id":19,"path":"http://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png","encountered":0,"encounteredLast":false,"caught":0},{"name":"weedle","id":17,"path":"http://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png","encountered":0,"encounteredLast":false,"caught":0},{"name":"kakuna","id":18,"path":"http://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png","encountered":0,"encounteredLast":false,"caught":0},{"name":"pidgey","id":21,"path":"http://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png","encountered":0,"encounteredLast":false,"caught":0}]`;
    const actual = JSON.stringify(getPokeArray());
    expect.deepEqual(expected, actual);
});

test('should return a pokemon from the poke array with the given id', (expect) => {
    
    setPokeArray(constructPokeArray(pokemon));
    const pokeArray = getPokeArray();
    
    const expected = {
        name: 'bulbasaur',
        id: 1,
        encounteredLast: false,
        caught: 0,
        path: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        encountered: 0
    };
    const actual = findById(pokeArray, 1);
    expect.deepEqual(actual, expected);
});

test('isValid should return false when passed an invalid index', (expect) => {
    setPokeArray(constructPokeArray(pokemon));
    const expected = false;
    const actual = isValid(47);
    expect.equal(expected, actual);
});

test('getPokeArray should return a well formed pokeArray object', (expect) => {
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
    setPokeArray(constructPokeArray(fakePokeData));
    const actual = getPokeArray();
    expect.deepEqual(expected, actual);
});
