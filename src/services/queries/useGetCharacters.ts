import { useQuery } from '@tanstack/react-query';
import { charactersSrvices } from '../http/services';

export const useGetCharacters = (offset: number) => {
  const query = useQuery(
    ['characters', offset],
    async () => await charactersSrvices.getCharacters({ offset }),
    {
      refetchOnWindowFocus: false,
      staleTime: 60 * 60 * 1000,
      suspense: true,
    }
  );

  return {
    charactersData: query.data,
    charactersIsError: query.isError,
    charactersIsFetching: query.isFetching,
  };
};
