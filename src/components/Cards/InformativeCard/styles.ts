import { StyledWithVariant } from './types';
import Heading from 'components/Heading';
import styled, { css, DefaultTheme } from 'styled-components';

const wrapperModfiers = {
  fullInformations: (theme: DefaultTheme) => css`
    ${theme.media.min(768)} {
      display: flex;
      padding-right: 7rem;
      border-radius: ${theme.radii.small} ${theme.radii.xxlarge};
    }
  `,
  minimal: (theme: DefaultTheme) => css`
    ${theme.media.min(768)} {
      display: flex;
      padding: 5.6rem 7rem 5.6rem 10rem;
      border-radius: ${theme.radii.small} ${theme.radii.xlarge};
    }
  `,
};

const imageWrapperModfiers = {
  fullInformations: (theme: DefaultTheme) => css`
    ${theme.media.min(768)} {
      margin-right: 4rem;
      width: 24.8rem;
    }
  `,
  minimal: (theme: DefaultTheme) => css`
    ${theme.media.min(768)} {
      margin-right: 4rem;
      width: 20rem;
      height: 20rem;
      border-radius: 50%;
    }
  `,
};

const infoContentModfiers = {
  fullInformations: (theme: DefaultTheme) => css`
    ${theme.media.min(768)} {
      padding: ${theme.spacings[20]} 0 3rem 5.4rem;
    }
  `,
  minimal: (theme: DefaultTheme) => css`
    ${theme.media.min(768)} {
      padding: 0;
    }
  `,
};

export const Wrapper = styled.div<StyledWithVariant>`
  ${({ theme, variant }) => css`
    max-width: ${theme.generalMaxWidth};
    width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: ${theme.radii.small};
    overflow: hidden;
    background: ${theme.colors.white};

    ${!!variant && wrapperModfiers[variant](theme)}
  `}
`;
export const ImageWrapper = styled.img<StyledWithVariant>`
  ${({ theme, variant }) => css`
    width: 100%;
    object-fit: cover;

    ${!!variant && imageWrapperModfiers[variant](theme)}
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

export const InfoContent = styled.div<StyledWithVariant>`
  ${({ theme, variant }) => css`
    padding: ${theme.spacings[16]} ${theme.spacings[24]} ${theme.spacings[30]};

    ${!!variant && infoContentModfiers[variant](theme)}
  `}
`;
export const Description = styled.p<StyledWithVariant>`
  ${({ theme, variant }) => css`
    margin-top: ${theme.spacings[16]};
    font-size: ${theme.font.sizes[12]};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    -webkit-box-orient: vertical;
    word-wrap: break-word;

    ${theme.media.min(768)} {
      font-size: ${theme.font.sizes[variant === 'fullInformations' ? 20 : 24]};
      margin-top: ${theme.spacings[24]};
    }
  `}
`;

export const ComicsInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: ${theme.spacings[8]};
  `}
`;
export const ComicsItem = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes[16]};

    &:not(:last-child) {
      margin-right: ${theme.spacings[16]};
    }
  `}
`;
