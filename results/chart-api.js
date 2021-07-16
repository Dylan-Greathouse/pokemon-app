import { getPokeArray } from '../storage-utils.js';

Chart.defaults.color = 'black';
Chart.defaults.font.size = 14;

export function mungeEncountered(pokeArray) {
    let encounteredArray = [];
    for (let pokemon of pokeArray) {
        encounteredArray.push(pokemon.encountered);
    } return encounteredArray;
}

export function mungeCaptured(pokeArray) {
    let capturedArray = [];
    for (let pokemon of pokeArray) {
        capturedArray.push(pokemon.caught);
    } return capturedArray;
}

export function mungeNames(pokeArray) {
    let namesArray = [];
    for (let pokemon of pokeArray) {
        namesArray.push(pokemon.name);
    } return namesArray;
}

export function colorsFromType() {
    let colorsArray = [];
    let pokeArray = getPokeArray();
    for (let pokemon of pokeArray) {
        switch (pokemon.type) {
            case 'water':
                colorsArray.push('rgba(85, 205, 252, 0.7)'); 
                break;
            case 'fire':
                colorsArray.push('rgba(157, 2, 8, 0.7)');
                break;
            case 'grass':
                colorsArray.push('rgba(79, 122, 45, 0.8)');
                break;
            case 'bug':
                colorsArray.push('rgba(153, 219, 140, 0.9)');
                break;
            case 'normal':
                colorsArray.push('rgba(126, 141, 133, 0.7)');
                break;
            default:
        }
    } return colorsArray;
}

export function makeNewChart(names, captured, encountered, colors, chartType) {
    return {
        type: chartType,
        data: {
            labels: names,
            datasets: [
                {
                    label: 'Encounters',
                    data: encountered,
                    backgroundColor: colors,
                    borderColor: 'white',
                    borderWidth: 2,
                    color: 'white'
                    
                },
                {
                    label: 'Captures',
                    data: captured,
                    backgroundColor: colors,
                    borderColor: 'black',
                    borderWidth: 2, 
                }
            ]
        },
        options: {
            plugins:{
                legend: {
                    labels:{
                        color: 'black',
                        font:{
                            size: 12
                        }
                    }
                },
                scales: {
                    
                    y: {
                        beginAtZero: true
                    }
                } }
                
        } 
    };
}