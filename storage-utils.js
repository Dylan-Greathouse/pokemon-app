export const CURRENT_SESSION = 'CURRENT_SESSION';
export const ALL_SESSIONS = 'ALL_SESSIONS';

export function setPokeArray(pokeArray) {
    localStorage.setItem('CURRENT_SESSION', JSON.stringify(pokeArray));
}

