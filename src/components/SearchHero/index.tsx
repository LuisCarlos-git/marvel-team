import { SEARCH_ICON } from 'assets';
import * as Styled from './styles';

const SearchHero = () => (
  <Styled.Wrapper>
    <Styled.TextField placeholder="Type in a character name" />
    <Styled.SearchButton>
      <img src={SEARCH_ICON} />
    </Styled.SearchButton>
  </Styled.Wrapper>
);

export default SearchHero;
