import { FavoritesState } from './types';

export const favoritesSelector = (state: FavoritesState) => state.favorites;
export const addFavoriteSelector = (state: FavoritesState) =>
  state.addFavorites;
export const removeFavoriteSelector = (state: FavoritesState) =>
  state.removeFavorite;
