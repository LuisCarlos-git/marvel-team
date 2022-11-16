import { useNavigate } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Heading from 'components/Heading';
import { InformativeCard } from 'components/Cards';

import { useDetailsScreen } from './useDetailsScreen';

import * as Styled from './styles';

export const Details = () => {
  const navigate = useNavigate();
  const { characterByIdData } = useDetailsScreen();

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
          {characterByIdData &&
            characterByIdData.character.map(heroItem => (
              <InformativeCard
                variant="minimal"
                heroName={heroItem.name}
                image={heroItem.thumbnail}
                description={heroItem.description}
                key={heroItem.id}
              />
            ))}
        </Styled.InfoHeroCardWrapper>
      </Styled.Banner>
      <Footer />
    </>
  );
};
