import { favoritesSelector } from './../../store/favorites/selectors';
import { useEffect } from 'react';

import { useGetCharacters } from 'services/http/querys/useCharacter';
import { useCharacters } from 'store/characters';
import {
  charactersSelector,
  updateCharactersSelector,
} from 'store/characters/selectors';
import { useFavorites } from 'store/favorites';
import {
  addFavoriteSelector,
  removeFavoriteSelector,
} from 'store/favorites/selectors';

export const useHome = () => {
  const { data, isFetching, isError } = useGetCharacters(0);
  const updateCharacter = useCharacters(updateCharactersSelector);
  const characters = useCharacters(charactersSelector);
  const addFavorites = useFavorites(addFavoriteSelector);
  const removeFavorites = useFavorites(removeFavoriteSelector);
  const favorites = useFavorites(favoritesSelector);

  useEffect(() => {
    if (data && !isFetching && !isError) {
      updateCharacter(data.characters);
    }
  }, [updateCharacter, data, isError, isFetching]);

  return {
    characters,
    addFavorites,
    removeFavorites,
    favorites,
  };
};
