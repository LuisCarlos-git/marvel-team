type Variants = 'minimal' | 'fullInformations';

export type InformativeCardProps = {
  image: string;
  heroName: string;
  description: string;
  variant?: Variants;
  comicsPageQuantity: number;
  comicsLaunchDate: string;
  price: number;
};

export type StyledWithVariant = {
  variant: Variants;
};
