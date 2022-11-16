import { useCallback, useMemo } from 'react';
import { useFavorites } from 'store/favorites';
import {
  removeFavoriteSelector,
  favoritesSelector,
} from 'store/favorites/selectors';

export const useFavoritesScreen = () => {
  const favorites = useFavorites(favoritesSelector);
  const removeFavorites = useFavorites(removeFavoriteSelector);

  const isFavoriteHero = useCallback(
    (id: number) => {
      return !!favorites.find(item => item.id === id);
    },
    [favorites]
  );

  const favoritesIsEmpty = useMemo(() => {
    return favorites.length === 0;
  }, [favorites]);

  return {
    favorites,
    favoritesIsEmpty,
    isFavoriteHero,
    removeFavorites,
  };
};
