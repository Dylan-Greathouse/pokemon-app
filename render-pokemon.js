export function renderPokemon(current3Array) {
        // radio variables
    const pokemon1Radio = document.getElementById('pokemon1-radio');
    const pokemon2Radio = document.getElementById('pokemon2-radio');
    const pokemon3Radio = document.getElementById('pokemon3-radio');

    // image radios
    const pokemon1Image = document.getElementById('pokemon1-image');
    const pokemon2Image = document.getElementById('pokemon2-image');
    const pokemon3Image = document.getElementById('pokemon3-image');  


    pokemon1Radio.value = current3Array[0]['id'];
    
    pokemon1Image.src = current3Array[0]['path'];

    pokemon2Radio.value = current3Array[1]['id'];
    pokemon2Image.src = current3Array[1]['path'];

    pokemon3Radio.value = current3Array[2]['id'];
    pokemon3Image.src = current3Array[2]['path'];


}