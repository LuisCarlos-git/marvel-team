import create from 'zustand';
import { FavoritesState } from './types';

export const useFavorites = create<FavoritesState>((set, get) => ({
  favorites: [],
  addFavorites: hero => {
    const { favorites } = get();
    if (favorites.includes(hero)) return;
    set(state => ({ favorites: [...state.favorites, hero] }));
  },
  removeFavorite: id => {
    const { favorites } = get();
    if (!favorites.filter(item => item.id === id)) return;

    set(state => {
      const newFavorites = state.favorites.filter(fav => fav.id !== id);

      return {
        favorites: newFavorites,
      };
    });
  },
}));
