import { useQuery } from '@tanstack/react-query';
import { charactersSrvices } from '../http/services';

export const useGetCharacters = (offset: number) => {
  const { data, isError, isFetching } = useQuery(
    ['characters', offset],
    async () => await charactersSrvices.getCharacters({ offset }),
    {
      refetchOnWindowFocus: false,
      staleTime: 60 * 60 * 1000,
      suspense: true,
    }
  );

  return {
    charactersFetchResult: data,
    charactersFetchIsError: isError,
    charactersFetchIsFetching: isFetching,
  };
};
