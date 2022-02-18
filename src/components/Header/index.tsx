import Heading from 'components/Heading';

import { useMediaQuery } from 'hooks';

import { IRON_MAN, USER_ICON } from 'assets';

import * as Styled from './styles';

const Header = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <Styled.Wrapper>
      <Styled.Content>
        <Styled.LogoWrapper>
          <Styled.Logo src={IRON_MAN} />
          {isDesktop && (
            <Heading fontColor="white" fontSize={36}>
              Marvel Strike Team
            </Heading>
          )}
        </Styled.LogoWrapper>

        <Styled.TeamListButtonWrapper>
          <Styled.TeamListButton>
            Your Team
            <img src={USER_ICON} />
          </Styled.TeamListButton>
        </Styled.TeamListButtonWrapper>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default Header;
