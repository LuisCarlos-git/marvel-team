import create from 'zustand';
import { SearchState } from './types';

export const useSearchHero = create<SearchState>(set => ({
  searchResult: [],
  characterName: '',
  updateSearchCharacters: searchResult =>
    set(() => ({ searchResult: searchResult })),
  resetSearchResults: () => set(() => ({ searchResult: [] })),
  setCharacterName: characterName => set(() => ({ characterName })),
}));
