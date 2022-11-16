import Footer from 'components/Footer';
import Header from 'components/Header';
import Heading from 'components/Heading';
import SearchHero from 'components/SearchHero';
import { HeroCardSimple } from 'components/Cards';

import * as Styled from './styles';

import { useHomeScreen } from './useHomeScreen';

export const Home = () => {
  const {
    characters,
    addFavorites,
    removeFavorites,
    isFavoriteHero,
    searchResult,
    handleChangeSearchCharacter,
    characterName,
  } = useHomeScreen();

  return (
    <>
      <Header />
      <Styled.Banner>
        <Styled.BannerContent>
          <Heading fontColor="white" responsiveSize={32}>
            Explore the most powerful <br /> characters in Marvel
          </Heading>
          <SearchHero
            onInputChange={handleChangeSearchCharacter}
            initialValue={characterName}
          />
        </Styled.BannerContent>
      </Styled.Banner>
      <Styled.Content>
        <Styled.ContentHeader>
          <Heading>Characters</Heading>
          <Heading levels="h3"># results</Heading>
        </Styled.ContentHeader>
        {!searchResult.length ? (
          <Styled.HeroList>
            {characters.map(hero => (
              <HeroCardSimple
                key={hero.id}
                heroId={hero.id}
                heroName={hero.name}
                description={hero.description}
                image={hero.thumbnail}
                onFav={hero => addFavorites(hero)}
                onFavRemove={removeFavorites}
                isFavorite={isFavoriteHero(hero.id)}
              />
            ))}
          </Styled.HeroList>
        ) : (
          <Styled.HeroList>
            {searchResult.map(hero => (
              <HeroCardSimple
                key={hero.id}
                heroId={hero.id}
                heroName={hero.name}
                description={hero.description}
                image={hero.thumbnail}
                onFav={hero => addFavorites(hero)}
                onFavRemove={removeFavorites}
                isFavorite={isFavoriteHero(hero.id)}
              />
            ))}
          </Styled.HeroList>
        )}
      </Styled.Content>
      <Footer />
    </>
  );
};
