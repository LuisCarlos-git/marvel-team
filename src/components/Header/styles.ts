import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.black};
    padding: ${theme.spacings[16]};

    ${theme.media.min(768)} {
      padding: ${theme.spacings[42]};
    }
  `}
`;

export const Content = styled.header`
  display: flex;
  justify-content: space-between;

  max-width: 130rem;
  width: 100%;
  margin: 0 auto;
`;
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Logo = styled.img`
  ${({ theme }) => css`
    padding-right: ${theme.spacings[18]};
  `}
`;
export const TeamListButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TeamListButton = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.red};
    border: 0;
    padding: ${theme.spacings[8]};
    color: ${theme.font.colors.white};
    font-size: ${theme.font.sizes[16]};
    border-radius: ${theme.radii.large} ${theme.radii.small};
    width: 14rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
      width: 2.8rem;
      margin-left: 1rem;
    }

    ${theme.media.min(768)} {
      width: 17.9rem;
      height: 5.9rem;
      font-size: ${theme.font.sizes[24]};

      img {
        width: 3rem;
        margin-left: 1rem;
      }
    }
  `}
`;
