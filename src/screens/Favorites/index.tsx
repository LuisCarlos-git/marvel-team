import { useNavigate } from 'react-router-dom';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Heading from 'components/Heading';
import { HeroCardSimple } from 'components/Cards';

import * as Styled from './styles';

export const Favorite = () => {
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
        <Styled.Content>favorites</Styled.Content>
      </Styled.Banner>
      <Footer />
    </>
  );
};
