import { getAllSessions } from '../storage-utils.js';
import { renderPokeResult } from '../results/render-results.js';

// eslint-disable-next-line no-unused-vars
const allTimeResults = getAllSessions();

// eslint-disable-next-line no-unused-vars
const resultsDiv = document.getElementById('results-data');
// eslint-disable-next-line no-unused-vars
const winners = document.getElementById('winners');





function getTopPokemon(allTimeResults) {
    let winners = allTimeResults.map((result) => {
        return result.reduce((a, b) => {
            if (a.caught > b.caught) {
                return a;
            } else {
                return b;
            }
        });
    });
    return winners;
}


function renderAllResults(allTimeResults){
    const winnersUl = document.getElementById('round-winners');
    const winners = getTopPokemon(allTimeResults);
    for (let pokemon of winners){
        winnersUl.appendChild(renderPokeResult(pokemon));
    } 


}
renderAllResults();