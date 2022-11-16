import { Character } from 'services/mappers/character/types';

export type SearchState = {
  searchResult: Character[];
  updateSearchCharacters: (searchResult: Character[]) => void;
  resetSearchResults: () => void;
  characterName: string;
  setCharacterName: (characterName: string) => void;
};
