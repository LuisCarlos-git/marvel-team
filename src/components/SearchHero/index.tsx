import { useState } from 'react';

import { SEARCH_ICON } from 'assets';

import * as Styled from './styles';

const SearchHero = () => {
  const [heroName, setHeroName] = useState('');

  return (
    <Styled.Wrapper>
      <Styled.TextField
        placeholder="Type in a character name"
        value={heroName}
      />
      <Styled.SearchButton>
        <img src={SEARCH_ICON} />
      </Styled.SearchButton>
    </Styled.Wrapper>
  );
};

export default SearchHero;
