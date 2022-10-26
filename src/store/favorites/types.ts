type FavoriteCharacter = {
  id: number;
  heroName: string;
  description: string;
  image: string;
};

export type FavoritesState = {
  favorites: FavoriteCharacter[];
  addFavorites: (hero: FavoriteCharacter) => void;
  removeFavorite: (id: number) => void;
};
