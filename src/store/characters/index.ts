import create from 'zustand';

import { CharactersState } from './types';

export const useCharacters = create<CharactersState>(set => ({
  characters: [],
  pageble: null,
  updateCharacters: characters => set(() => ({ characters })),
}));
