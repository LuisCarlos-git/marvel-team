import { useNavigate } from 'react-router-dom';

import { favoriteSelector } from 'store/selectors';
import { removeFavorites } from 'store/actions/charactersActions';

import { useAppDispatch, useAppSelector } from 'store/hooks';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Heading from 'components/Heading';
import { HeroCardSimple } from 'components/Cards';

import * as Styled from './styles';

export const Favorite = () => {
  const favorites = useAppSelector(favoriteSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
          {!favorites.length ? (
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
                  isFavorite={!!favorites.find(item => item.id === hero.id)}
                  onFavRemove={heroId =>
                    dispatch(removeFavorites({ id: heroId }))
                  }
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
