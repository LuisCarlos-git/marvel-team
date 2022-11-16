import { SearchState } from './types';

export const searchResultsSelector = (state: SearchState) => state.searchResult;
export const resetSearchResultsSelector = (state: SearchState) =>
  state.resetSearchResults;
export const updateSearchCharactersSelector = (state: SearchState) =>
  state.updateSearchCharacters;

export const characterNameSelector = (state: SearchState) =>
  state.characterName;

export const setCharacterNameSelector = (state: SearchState) =>
  state.setCharacterName;
