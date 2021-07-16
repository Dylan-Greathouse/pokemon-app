import { getAllSessions } from '../storage-utils.js';
import { renderPokeResults } from '../results/render-results.js';

const allTimeResults = getAllSessions();

const resultsDiv = document.getElementById('results-data');
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
        winnersUl.appendChild(renderPokeResults(pokemon));
    } 


}
renderAllResults();