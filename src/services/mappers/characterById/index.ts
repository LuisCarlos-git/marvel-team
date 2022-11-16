import { GetCharacterbyIdResponse } from './../../http/types/index';
import { ReturnToDomain } from './types';
class CharacterByIdMapper {
  toDomain(percistenceObject: GetCharacterbyIdResponse): ReturnToDomain {
    return {
      character: percistenceObject.data.results.map(character => ({
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

export const characterByIdMapper = new CharacterByIdMapper();
