import { useNavigate } from 'react-router-dom';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Heading from 'components/Heading';
import { HeroCardSimple } from 'components/Cards';

import * as Styled from './styles';
import { useFavoritesScreen } from './useFavoritesScreen';

export const Favorite = () => {
  const navigate = useNavigate();
  const { favorites, favoritesIsEmpty, removeFavorites, isFavoriteHero } =
    useFavoritesScreen();

  return (
    <>
      <Header />
      <Styled.Banner>
        <Styled.BannerContent>
          <Styled.Goback onClick={() => navigate(-1)}>
            Return to previous page
          </Styled.Goback>
          <Heading fontColor="white" responsiveSize={32}>
            Here is your own strike <br /> team choice
          </Heading>
        </Styled.BannerContent>
        <Styled.Content>
          {favoritesIsEmpty ? (
            <Styled.DontFav>
              <Heading>You don&apos;t have favorites</Heading>
            </Styled.DontFav>
          ) : (
            <Styled.HeroList>
              {favorites.map(hero => (
                <HeroCardSimple
                  key={hero.id}
                  heroId={hero.id}
                  heroName={hero.heroName}
                  description={hero.description}
                  image={hero.image}
                  isFavorite={isFavoriteHero(hero.id)}
                  onFavRemove={removeFavorites}
                />
              ))}
            </Styled.HeroList>
          )}
        </Styled.Content>
      </Styled.Banner>
      <Footer />
    </>
  );
};
