import { incrementPokeProp, updateEncntrdLast } from './storage-utils.js';
import { newRound } from './app.js';
 

export function renderPokemon(current3, totalRounds) {

    const gym = document.getElementById('gym');
    const battleArea = document.createElement('div');
    battleArea.id = 'battle-area';
    battleArea.classList.add('pokemon-options');
    const rounds = document.getElementById('rounds');
    rounds.innerHTML = `<h1>ROUND ${totalRounds}</h1>`;
    
    for (let i = 0; i < 3; i++) {
        let label = document.createElement('label');
        let input = document.createElement('input');
        input.type = 'radio';
        input.name = 'pokemon';
        input.value = current3[i].id;
        let img = document.createElement('img');
        img.classList.add('.');
        img.src = current3[i].path;
        label.append(input, img);
        battleArea.append(label);
    }

    const choiceButton = document.createElement('button');

    choiceButton.addEventListener('click', () => {
        if (document.querySelector('input:checked')) {
            const selected = document.querySelector('input:checked');
            incrementPokeProp(Number(selected.value), 'caught');
            updateEncntrdLast(
                [current3[0].id, current3[1].id, current3[2].id]);
            if (totalRounds < 10) {
                totalRounds++;
                newRound(totalRounds);
            } else {
                window.location.replace('./results/results.html');
            }
        }
    });
    
    const btnWrapper = document.createElement('div');
    btnWrapper.append(choiceButton);

    choiceButton.textContent = '';
    btnWrapper.classList.add('btn');
    
    gym.innerHTML = '';
    gym.append(battleArea, btnWrapper);

}
