import { GetCharactersResponse } from 'services/http/types';
import { ReturnToDomain } from './types';

class CharacterMapper {
  toDomain(percistenceObject: GetCharactersResponse): ReturnToDomain {
    return {
      characters: percistenceObject.data.results.map(character => ({
        ...character,
        thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
      })),
      pageble: {
        count: percistenceObject.data.count,
        offset: percistenceObject.data.offset,
        limit: percistenceObject.data.limit,
        total: percistenceObject.data.total,
      },
    };
  }
}

export const characterMapper = new CharacterMapper();
