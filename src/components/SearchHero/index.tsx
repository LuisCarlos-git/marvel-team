import { useState, useCallback } from 'react';

import { useAppDispatch } from 'store/hooks';

import {
  fetchCharactersByName,
  clearSearchIfNameByEmpty,
} from 'store/actions/charactersActions';

import { SEARCH_ICON } from 'assets';

import * as Styled from './styles';

const SearchHero = () => {
  const dispatch = useAppDispatch();
  const [heroName, setHeroName] = useState('');

  const searchHeroByName = useCallback(() => {
    dispatch(fetchCharactersByName({ heroName }));
  }, [dispatch, heroName]);

  return (
    <Styled.Wrapper>
      <Styled.TextField
        placeholder="Type in a character name"
        value={heroName}
        onChange={e => {
          if (!e.target.value) {
            dispatch(clearSearchIfNameByEmpty());
          }
          setHeroName(e.target.value);
        }}
      />
      <Styled.SearchButton onClick={searchHeroByName}>
        <img src={SEARCH_ICON} />
      </Styled.SearchButton>
    </Styled.Wrapper>
  );
};

export default SearchHero;
