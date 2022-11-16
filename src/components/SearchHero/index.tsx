import React, { useCallback, useState } from 'react';

import { SearchHeroProps } from './types';

import { SEARCH_ICON } from 'assets';

import * as Styled from './styles';

const SearchHero = ({ initialValue = '', onInputChange }: SearchHeroProps) => {
  const [heroName, setHeroName] = useState(initialValue);

  const handleChangeInput = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      setHeroName(ev.target.value);
      onInputChange && onInputChange(ev.target.value);
    },
    [onInputChange]
  );

  return (
    <Styled.Wrapper>
      <Styled.TextField
        placeholder="Type in a character name"
        value={heroName}
        onChange={handleChangeInput}
      />
      <Styled.SearchButton>
        <img src={SEARCH_ICON} />
      </Styled.SearchButton>
    </Styled.Wrapper>
  );
};

export default SearchHero;
