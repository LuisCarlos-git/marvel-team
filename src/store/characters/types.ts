import { Character, Pageble } from 'services/mappers/character/types';

export type CharactersState = {
  characters: Character[];
  pageble: Pageble | null;
  updateCharacters: (characters: Character[]) => void;
};
