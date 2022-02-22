import { FAVORITE_ICON, FAVORITE_WHITE_ICON } from 'assets';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './styles';
import { HeroCardSimpleProps } from './types';

const HeroCardSimple = ({
  image,
  heroName,
  description,
  isFavorite = false,
  onFav,
  heroId,
  onFavRemove,
}: HeroCardSimpleProps) => {
  const navigate = useNavigate();
  const onClick = useCallback(() => {
    const heroData = {
      id: heroId,
      heroName,
      description,
      image,
    };

    if (isFavorite && !!onFavRemove) {
      onFavRemove(heroId);
      return;
    }

    !!onFav && onFav(heroData);
  }, [description, heroId, heroName, onFav, onFavRemove, isFavorite, image]);

  return (
    <Styled.Wrapper onClick={() => navigate(`/details/${heroId}`)}>
      <Styled.ImageWrapper>
        <img src={image} alt="" />
      </Styled.ImageWrapper>
      <Styled.InformationsContent>
        <Styled.FavButton
          onClick={e => {
            onClick();
            e.stopPropagation();
          }}
          isFavorite={isFavorite}
        >
          <img src={isFavorite ? FAVORITE_WHITE_ICON : FAVORITE_ICON} />
        </Styled.FavButton>
        <Styled.CustomHeading fontSize={32}>{heroName}</Styled.CustomHeading>
        <Styled.HeroDescription>{description}</Styled.HeroDescription>
      </Styled.InformationsContent>
    </Styled.Wrapper>
  );
};

export default HeroCardSimple;
