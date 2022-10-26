import Footer from 'components/Footer';
import Header from 'components/Header';
import Heading from 'components/Heading';
import SearchHero from 'components/SearchHero';
import { HeroCardSimple } from 'components/Cards';

import * as Styled from './styles';

import { useHome } from './useHome';

export const Home = () => {
  const { characters, addFavorites, removeFavorites, favorites } = useHome();

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
        <Styled.ContentHeader>
          <Heading>Characters</Heading>
          <Heading levels="h3"># results</Heading>
        </Styled.ContentHeader>
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
              isFavorite={!!favorites.find(fav => fav.id === hero.id)}
            />
          ))}
        </Styled.HeroList>
      </Styled.Content>
      <Footer />
    </>
  );
};
