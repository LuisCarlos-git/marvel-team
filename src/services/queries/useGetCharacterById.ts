import { useQuery } from '@tanstack/react-query';
import { charactersSrvices } from 'services/http/services';

export const useGetCharacterById = (characterId: string) => {
  const enabledQuery = characterId.length > 0;
  const query = useQuery(
    ['characterById', { characterId }],
    () => charactersSrvices.getCharacterById(characterId),
    {
      enabled: enabledQuery,
    }
  );

  return {
    characterByIdData: query.data,
    characterByIdIsError: query.isError,
    characterByIdIsFetching: query.isFetching,
  };
};
