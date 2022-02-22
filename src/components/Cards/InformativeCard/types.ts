type Variants = 'minimal' | 'fullInformations';

export type InformativeCardProps = {
  image?: string;
  heroName?: string;
  description?: string;
  variant?: Variants;
  comicsPageQuantity?: number;
  comicsLaunchDate?: Date;
  price?: number;
  title?: string;
};

export type StyledWithVariant = {
  variant: Variants;
};
