import { useCallback, useEffect } from 'react';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Heading from 'components/Heading';
import SearchHero from 'components/SearchHero';
import { HeroCardSimple } from 'components/Cards';

import { useAppDispatch, useAppSelector } from 'store/hooks';

import {
  fetchCharacters,
  addFavorite,
  removeFavorites,
} from 'store/actions/charactersActions';

import {
  characterSelector,
  charactersStatusSelector,
  favoriteSelector,
  searchCharactersSelector,
} from 'store/selectors';

import * as Styled from './styles';
import Paginate from 'components/Paginate';
import Loading from 'components/Loading';

export const Home = () => {
  const characters = useAppSelector(characterSelector);
  const charactersStatus = useAppSelector(charactersStatusSelector);
  const favorites = useAppSelector(favoriteSelector);
  const searchResults = useAppSelector(searchCharactersSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  const newCharacters = useCallback(
    (offset: number) => {
      dispatch(fetchCharacters(offset));
    },
    [dispatch]
  );

  return (
    <>
      <Header />
      <Styled.Banner>
        <Styled.BannerContent>
          <Heading fontColor="white" responsiveSize={32}>
            Explore the most powerful <br /> characters in Marvel
          </Heading>
          <SearchHero />
        </Styled.BannerContent>
      </Styled.Banner>
      <Styled.Content>
        {charactersStatus === 'pending' ? (
          <Loading />
        ) : (
          <>
            <Styled.ContentHeader>
              <Heading>Characters</Heading>
              <Heading levels="h3" fontSize={24} responsiveSize={20}>
                # results
              </Heading>
            </Styled.ContentHeader>
            <Styled.HeroList>
              {!searchResults.length && characters.results
                ? characters.results.map(hero => (
                    <HeroCardSimple
                      key={hero.id}
                      heroId={hero.id}
                      heroName={hero.name}
                      description={hero.description}
                      image={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                      isFavorite={!!favorites.find(item => item.id === hero.id)}
                      onFav={heroData => dispatch(addFavorite(heroData))}
                      onFavRemove={heroId =>
                        dispatch(removeFavorites({ id: heroId }))
                      }
                    />
                  ))
                : searchResults.map(hero => (
                    <HeroCardSimple
                      key={hero.id}
                      heroId={hero.id}
                      heroName={hero.name}
                      description={hero.description}
                      image={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                      isFavorite={!!favorites.find(item => item.id === hero.id)}
                      onFav={heroData => dispatch(addFavorite(heroData))}
                      onFavRemove={heroId =>
                        dispatch(removeFavorites({ id: heroId }))
                      }
                    />
                  ))}
            </Styled.HeroList>
            {!searchResults.length && (
              <Styled.PaginationWrapper>
                <Paginate
                  limit={characters.limit}
                  offset={characters.offset}
                  total={characters.total}
                  updateOffset={newCharacters}
                />
              </Styled.PaginationWrapper>
            )}
          </>
        )}
      </Styled.Content>
      <Footer />
    </>
  );
};
