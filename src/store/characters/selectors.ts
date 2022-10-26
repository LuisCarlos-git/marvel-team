import { CharactersState } from './types';

export const charactersSelector = (state: CharactersState) => state.characters;
export const pagebleSelector = (state: CharactersState) => state.pageble;
export const updateCharactersSelector = (state: CharactersState) =>
  state.updateCharacters;
