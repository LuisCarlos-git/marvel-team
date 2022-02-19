import { FAVORITE_ICON, FAVORITE_WHITE_ICON } from 'assets';
import * as Styled from './styles';
import { HeroCardSimpleProps } from './types';

const HeroCardSimple = ({
  image,
  heroName,
  description,
  isFavorite,
}: HeroCardSimpleProps) => (
  <Styled.Wrapper>
    <Styled.ImageWrapper>
      <img src={image} alt="" />
    </Styled.ImageWrapper>
    <Styled.InformationsContent>
      <Styled.FavButton isFavorite={isFavorite}>
        <img src={isFavorite ? FAVORITE_WHITE_ICON : FAVORITE_ICON} />
      </Styled.FavButton>
      <Styled.CustomHeading fontSize={32}>{heroName}</Styled.CustomHeading>
      <Styled.HeroDescription>{description}</Styled.HeroDescription>
    </Styled.InformationsContent>
  </Styled.Wrapper>
);

export default HeroCardSimple;
