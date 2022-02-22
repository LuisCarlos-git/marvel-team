import styled, { css, DefaultTheme } from 'styled-components';

export const Wrapper = styled.ul`
  ${({ theme }) => css`
    display: flex;
    list-style: none;

    li:not(:first-child) {
      margin-left: ${theme.spacings[16]};
    }
  `}
`;

const pageItemModifiers = {
  active: () => css`
    width: 3.5rem;
    height: 3.5rem;
    transform: translateY(-1rem);
  `,
};

export const PageItem = styled.button<{ active: boolean }>`
  ${({ theme, active }) => css`
    font-size: ${theme.font.sizes[16]};
    width: 3rem;
    background: ${theme.colors.whiteLighthen};
    border: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 3rem;
    border-radius: ${theme.radii.small};
    cursor: pointer;

    ${active && pageItemModifiers.active()}
  `}
`;

export const PrevNextButton = styled.button`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes[16]};
    width: 10rem;
    background: ${theme.colors.whiteLighthen};
    border: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 3rem;
    border-radius: ${theme.radii.small};
    cursor: pointer;
  `}
`;
