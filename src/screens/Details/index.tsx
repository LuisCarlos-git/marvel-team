import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Heading from 'components/Heading';

import { characterByIdSelector, comicsSelector } from 'store/selectors';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import {
  fetchCharactersById,
  fetchCharactersComics,
} from 'store/actions/charactersActions';

import * as Styled from './styles';
import { InformativeCard } from 'components/Cards';

export const Details = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const hero = useAppSelector(characterByIdSelector);
  const comics = useAppSelector(comicsSelector);

  useEffect(() => {
    dispatch(fetchCharactersById(params.heroId!));
    dispatch(fetchCharactersComics(params.heroId!));
  }, [dispatch, params.heroId]);

  return (
    <>
      <Header />
      <Styled.Banner>
        <Styled.BannerContent>
          <Styled.Goback onClick={() => navigate(-1)}>
            Return to previous page
          </Styled.Goback>
          <Heading fontColor="white" responsiveSize={32}>
            Discover all comics this <br /> character took part in
          </Heading>
        </Styled.BannerContent>

        <Styled.InfoHeroCardWrapper>
          {hero &&
            hero.map(heroItem => (
              <InformativeCard
                variant="minimal"
                heroName={heroItem.name}
                image={`${heroItem.thumbnail.path}.${heroItem.thumbnail.extension}`}
                description={heroItem.description}
                key={heroItem.id}
              />
            ))}
        </Styled.InfoHeroCardWrapper>

        <Styled.ContentHeader>
          <Heading>Characters</Heading>
          <Heading levels="h3" fontSize={24} responsiveSize={20}>
            # results
          </Heading>
        </Styled.ContentHeader>

        <Styled.ComicsWrapper>
          {comics.map(comic => (
            <InformativeCard
              variant="fullInformations"
              key={comic.id}
              title={comic.title}
              image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              description={comic.description}
              price={comic.prices[0].price}
              comicsPageQuantity={comic.pageCount}
              comicsLaunchDate={comic.dates[0].date}
            />
          ))}
        </Styled.ComicsWrapper>
      </Styled.Banner>
      <Footer />
    </>
  );
};
