import styled, { css } from 'styled-components';
import * as FavoriteStyles from 'screens/Favorites/styles';
import * as HomeStyles from 'screens/Home/styles';
import * as InformativeCardStyles from 'components/Cards/InformativeCard/styles';

export const Banner = styled(FavoriteStyles.Banner)``;
export const BannerContent = styled(FavoriteStyles.BannerContent)``;
export const Goback = styled(FavoriteStyles.Goback)``;
export const ContentHeader = styled(HomeStyles.ContentHeader)`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings[16]};
    max-width: ${theme.generalMaxWidth};
    margin: 0 auto;

    ${theme.media.min(768)} {
      padding: 0 0;
    }
  `}
`;
export const InfoHeroCardWrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings[16]};
    max-width: ${theme.generalMaxWidth};
    margin: 5rem auto 4rem;

    ${theme.media.min(768)} {
      padding: 0 0;
    }
  `}
`;

export const ComicsWrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings[16]};
    max-width: ${theme.generalMaxWidth};
    margin: 5rem auto 4rem;

    ${InformativeCardStyles.Wrapper}:not(:first-child) {
      margin-top: 5rem;
    }

    ${theme.media.min(768)} {
      padding: 0 0;
    }
  `}
`;

export const PaginationWrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings[16]};
    max-width: ${theme.generalMaxWidth};
    display: flex;
    justify-content: flex-end;
    margin: 0 auto;
    ${theme.media.min(768)} {
      padding: 0 0;
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
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;
