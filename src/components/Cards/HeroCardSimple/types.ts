export type HeroCardSimpleProps = {
  heroId: number;
  image: string;
  heroName: string;
  description: string;
  isFavorite?: boolean;
  onFav?: (heroData: HeroData) => void;
  onFavRemove?: (id: number) => void;
  onPrefetchData?: () => void;
};

type HeroData = {
  id: number;
  heroName: string;
  description: string;
  image: string;
};

export type StyledFavButtonProps = {
  isFavorite: boolean;
};
