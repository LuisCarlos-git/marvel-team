import { StyledFavButtonProps } from './types';
import styled, { css } from 'styled-components';
import Heading from 'components/Heading';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    border-radius: ${theme.radii.small};

    background: ${theme.colors.white};
    overflow: hidden;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    ${theme.media.min(768)} {
      border-radius: ${theme.radii.small} ${theme.radii.large};
      max-width: 27rem;
    }
  `}
`;
export const CustomHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
  }
`;
export const InformationsContent = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings[16]} ${theme.spacings[24]} ${theme.spacings[30]};
    position: relative;
  `}
`;
export const HeroDescription = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings[16]};
    font-size: ${theme.font.sizes[12]};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
  `}
`;

export const FavButton = styled.button<StyledFavButtonProps>`
  ${({ theme, isFavorite }) => css`
    position: absolute;
    top: -3rem;
    right: 1rem;
    width: 5.4rem;
    height: 5.4rem;
    border-radius: 50%;
    border: 0;
    background: ${isFavorite ? theme.colors.red : theme.colors.whiteLighthen};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;

    img {
      color: ${theme.colors.black};
    }
  `}
`;
