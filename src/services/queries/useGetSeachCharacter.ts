import { useQuery } from '@tanstack/react-query';
import { charactersSrvices } from '../http/services';

export const useGetSeachCharacter = (characterName: string) => {
  const isEnabledQuery = characterName.length > 0;
  return useQuery(
    ['characters', { characterName }],
    async () => await charactersSrvices.getSearchCharacters(characterName),
    {
      refetchOnWindowFocus: false,
      staleTime: 60 * 60 * 500,
      enabled: isEnabledQuery,
    }
  );
};
