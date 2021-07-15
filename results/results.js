import { makeNewChart, mungeCaptured, mungeEncountered, mungeNames } from './chart-api.js';
import { renderResults } from './render-results.js';

renderResults();

let encountered = mungeEncountered();
let captured = mungeCaptured();
let names = mungeNames();
let ctx = document.getElementById('myChart').getContext('2d');
// eslint-disable-next-line no-unused-vars
let pokeChart = new Chart(ctx, makeNewChart(names, captured, encountered));

