import { useQuery } from '@tanstack/react-query';
import { charactersSrvices } from '../services';

export const useGetCharacters = (offset: number) => {
  return useQuery(
    ['characters', offset],
    async () => await charactersSrvices.getCharacters({ offset }),
    {
      refetchOnWindowFocus: false,
      staleTime: 60 * 60 * 60 * 3,
      suspense: true,
    }
  );
};
