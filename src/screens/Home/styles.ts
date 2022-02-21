import styled, { css } from 'styled-components';
import * as SearchHeroStyles from 'components/SearchHero/styles';

import { BANNER } from 'assets';

export const Content = styled.div`
  ${({ theme }) => css`
    padding: 5rem ${theme.spacings[16]};
    max-width: ${theme.generalMaxWidth};
    margin: 0 auto;
  `}
`;
export const HeroList = styled.ul`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 5rem;

    ${theme.media.min(768)} {
      grid-template-columns: repeat(2, 1fr);
      gap: 5rem;
    }

    ${theme.media.min(1200)} {
      grid-template-columns: repeat(4, 1fr);
    }
  `}
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 4rem;
`;

export const BannerContent = styled.div`
  width: 100%;
  max-width: 70rem;
`;

export const Banner = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-image: url(${BANNER});
    padding: 5rem ${theme.spacings[16]};

    ${SearchHeroStyles.Wrapper} {
      margin-top: 2rem;
    }

    ${theme.media.min(768)} {
      padding: 0;
      height: 50rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  `}
`;
