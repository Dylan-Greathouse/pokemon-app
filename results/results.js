import { makeNewChart, mungeCaptured, mungeEncountered, mungeNames, colorsFromType } from './chart-api.js';
import { renderResults } from './render-results.js';
import { getPokeArray } from '../storage-utils.js';

const pokeArray = getPokeArray().filter(pokemon => pokemon.encountered > 0);

renderResults();

let encountered = mungeEncountered(pokeArray);
let captured = mungeCaptured(pokeArray);
let names = mungeNames(pokeArray);
let colors = colorsFromType(pokeArray);
let ctx = document.getElementById('myChart').getContext('2d');
let ctx2 = document.getElementById('myChart2').getContext('2d');
// eslint-disable-next-line no-unused-vars
let pokeChart = new Chart(ctx, makeNewChart(names, captured, encountered, colors, 'pie'));
// eslint-disable-next-line no-unused-vars
let pokeChart2 = new Chart(ctx2, makeNewChart(names, captured, encountered, colors, 'bar'));

