import { useNavigate } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Heading from 'components/Heading';

import * as Styled from './styles';
import { InformativeCard } from 'components/Cards';

export const Details = () => {
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
            Discover all comics this <br /> character took part in
          </Heading>
        </Styled.BannerContent>

        <Styled.InfoHeroCardWrapper>
          <InformativeCard
            variant="minimal"
            heroName="miranha"
            image="image"
            description="{heroItem.description}"
            key="{heroItem.id}"
          />
        </Styled.InfoHeroCardWrapper>
      </Styled.Banner>
      <Footer />
    </>
  );
};
