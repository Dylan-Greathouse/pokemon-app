// import { getPokeArray } from '../storage-utils.js';

// export function mungeEncountered() {
//     const pokeArray = getPokeArray();
//     let encounteredArray = [];
//     for (let pokemon of pokeArray) {
//         encounteredArray.push(pokemon.encountered);
//     }
// }

// export function mungeCaptured() {
//     const pokeArray = getPokeArray();
//     let capturedArray = [];
//     for (let pokemon of pokeArray) {
//         capturedArray.push(pokemon.caught);
//     }
// }

// export function mungeNames() {
//     const pokeArray = getPokeArray();
//     let namesArray = [];
//     for (let pokemon of pokeArray) {
//         namesArray.push(pokemon.name);
//     }
// }

// export function colorsFromType() {
//     // types are grass, fire, water, bug and normal
//     let colorsArray = [];
//     let pokeArray = getPokeArray();
//     for (let pokemon of pokeArray) {
//         switch (pokemon.type_1) {
//             case 'water':
//                 colorsArray.push('rgb(85, 205, 252)'); //water color here
//                 break;
//             case 'fire':
//                 colorsArray.push('rgb(157, 2, 8)'); //fire color here
//                 break;
//             case 'grass':
//                 colorsArray.push('rgb(79, 119, 45)'); //grass color here 
//                 break;
//             case 'bug':
//                 colorsArray.push('rgb(153, 217, 140)'); //bug color here
//                 break;
//             case 'normal':
//                 colorsArray.push('rgb(126, 141, 133)'); //normal color here
//                 break;
//             default:
//         }
//     } return colorsArray;
// }

// export function makeNewChart(names, captured, encountered, colors) {
//     return {
//         type: 'bar',
//         data: {
//             labels: names,
//             datasets: [
//                 {
//                     label: 'Encounters',
//                     data: encountered,
//                     backgroundColor: colors,
//                     borderColor: colors,
//                     borderWidth: 1
//                 },
//                 {
//                     label: 'Captures',
//                     data: captured,
//                     backgroundColor: colors,
//                     borderColor: colors,
//                     borderWidth: 1 
//                 }
//             ]
//         },
//         options: {
//             scales: {
//                 y: {
//                     beginAtZero: true
//                 }
//             }
//         }
//     };
// }