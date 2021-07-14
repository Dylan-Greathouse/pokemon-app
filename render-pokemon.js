import { incrementPokeProp, updateEncntrdLast } from './storage-utils.js';
import { newRound } from './app.js';
 

export function renderPokemon(current3) {

    const gym = document.getElementById('gym');
    const battleArea = document.createElement('div');
    battleArea.id = 'battle-area';
    
    for (let i = 0; i < 3; i++) {
        let label = document.createElement('label');
        let input = document.createElement('input');
        input.type = 'radio';
        input.name = 'pokemon';
        input.value = current3[i].id;
        let img = document.createElement('img');
        img.src = current3[i].path;
        label.append(input, img);
        battleArea.append(label);
    }

    const choiceButton = document.createElement('button');

    choiceButton.addEventListener('click', () => {
        const selected = document.querySelector('input:checked + img').previousSibling;
        incrementPokeProp(Number(selected.value), 'caught');
        updateEncntrdLast(
            [current3[0].id, current3[1].id, current3[2].id]);
        newRound();
    }); 
    
    choiceButton.textContent = 'I choose you!';
    battleArea.append(choiceButton);

    gym.innerHTML = '';
    gym.append(battleArea);

}
