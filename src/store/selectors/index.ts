import { RootState } from 'store/store';

export const statusSelector = (state: RootState) =>
  state.characterReducer.status;

export const characterSelector = (state: RootState) =>
  state.characterReducer.characters;

export const favoriteSelector = (state: RootState) =>
  state.characterReducer.favorites;

export const searchCharactersSelector = (state: RootState) =>
  state.characterReducer.searchCharacters;
