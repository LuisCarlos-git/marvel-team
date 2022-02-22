import { RootState } from 'store/store';

export const charactersStatusSelector = (state: RootState) =>
  state.characterReducer.getCharactersStatus;

export const characterSelector = (state: RootState) =>
  state.characterReducer.characters;

export const favoriteSelector = (state: RootState) =>
  state.characterReducer.favorites;

export const searchCharactersSelector = (state: RootState) =>
  state.characterReducer.searchCharacters;

export const characterByIdSelector = (state: RootState) =>
  state.characterReducer.characterById;

export const comicsSelector = (state: RootState) =>
  state.characterReducer.comics;

export const comicsStatusSelector = (state: RootState) =>
  state.characterReducer.comicsStatus;
