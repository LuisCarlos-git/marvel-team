import styled, { css } from 'styled-components';
import * as HomeStyles from '../Home/styles';

import { BANNER } from 'assets';

export const Content = styled(HomeStyles.Content)``;
export const BannerContent = styled(HomeStyles.BannerContent)`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: ${theme.generalMaxWidth};
    padding: 5.8rem ${theme.spacings[16]} 0;
    position: relative;

    ${theme.media.min(768)} {
      padding: 10.9rem 0 0;
      margin-bottom: 5rem;
    }
  `}
`;
export const HeroList = styled(HomeStyles.HeroList)``;
export const Banner = styled.div`
  ${({ theme }) => css`
    background-image: url(${BANNER});
    background-size: auto 30rem;
    background-repeat: repeat-x;
    min-height: 80vh;

    ${theme.media.min(768)} {
      margin-bottom: 5rem;
      background-size: auto 50rem;
      min-height: 80vh;
    }
  `}
`;

export const Goback = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: 1rem;
    right: 1.6rem;
    font-size: ${theme.font.sizes[16]};
    color: ${theme.colors.redSuperLighthen};
    border: 0;
    background: none;
    cursor: pointer;

    ${theme.media.min(768)} {
      margin-bottom: 5rem;
      background-size: auto 50rem;
    }
  `}
`;

export const DontFav = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background: white;
    border-radius: ${theme.radii.small};
    padding: ${theme.spacings[16]};
    height: 30rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;
