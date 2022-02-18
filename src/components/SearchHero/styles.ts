import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 67rem;
  width: 100%;
`;
export const TextField = styled.input`
  ${({ theme }) => css`
    height: 5rem;
    border: 0;
    width: 100%;
    padding-left: ${theme.spacings[16]};
    padding-right: ${theme.spacings[8]};
    font-size: ${theme.font.sizes[18]};
    border-bottom-left-radius: ${theme.radii.large};
    border-top-left-radius: ${theme.radii.small};

    ${theme.media.min(768)} {
      height: 7rem;
      font-size: ${theme.font.sizes[24]};
      padding-left: ${theme.spacings[30]};
      padding-right: ${theme.spacings[16]};
    }
  `}
`;
export const SearchButton = styled.button`
  ${({ theme }) => css`
    height: 5rem;
    background: ${theme.colors.red};
    border: 0;
    max-width: 7rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-bottom-right-radius: ${theme.radii.small};
    border-top-right-radius: ${theme.radii.large};

    img {
      width: 2rem;
    }

    ${theme.media.min(768)} {
      height: 7rem;
      max-width: 10rem;

      img {
        width: 2.6rem;
      }
    }
  `}
`;
