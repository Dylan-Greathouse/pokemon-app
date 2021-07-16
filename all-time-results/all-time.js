import { getAllSessions } from '../storage-utils.js';


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

