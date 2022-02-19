import styled, { css } from 'styled-components';

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.black};
    padding: ${theme.spacings[24]} ${theme.spacings[16]};
    width: 100%;

    ${theme.media.min(768)} {
      padding: ${theme.spacings[32]} 0;
    }
  `}
`;
export const Content = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.generalMaxWidth};

    ${theme.media.min(768)} {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      align-items: center;
    }
  `}
`;
export const MarvelCopyright = styled.span`
  ${({ theme }) => css`
    color: ${theme.font.colors.white};
    font-size: ${theme.font.sizes[16]};
    display: block;
    margin-bottom: 1rem;

    ${theme.media.min(768)} {
      font-size: ${theme.font.sizes[20]};
    }
  `}
`;
export const DevelopedBy = styled.span`
  ${({ theme }) => css`
    color: ${theme.font.colors.white};
    font-size: ${theme.font.sizes[16]};

    display: block;

    span.developer {
      color: ${theme.font.colors.gray};
    }

    ${theme.media.min(768)} {
      font-size: ${theme.font.sizes[20]};
    }
  `}
`;
