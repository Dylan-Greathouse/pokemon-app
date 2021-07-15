// import { getPokeArray } from '../storage-utils';

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
//                 colorsArray.push(''); //water color here
//                 break;
//             case 'fire':
//                 colorsArray.push(''); //fire color here
//                 break;
//             case 'grass':
//                 colorsArray.push(''); //bug color here 
//                 break;
//             case 'bug':
//                 colorsArray.push(''); //bug color here
//                 break;
//             case 'normal':
//                 colorsArray.push(''); //normal color here
//                 break;
//             default:
//         }
//     }
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
//                     backgroundColor: [
//                         // background colors here
//                     ],
//                     borderColor: [
//                         // black
//                     ],
//                     borderWidth: 1
//                 },
//                 {
//                     label: 'Captures',
//                     data: captured,
//                     backgroundColor: [
//                         // background colors
//                     ],
//                     borderColor: [
//                         // black
//                     ],
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