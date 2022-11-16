import { useCallback, useEffect } from 'react';

import { useGetCharacters } from 'services/queries/useGetCharacters';
import { useGetSeachCharacter } from 'services/queries/useGetSeachCharacter';

import { useCharacters } from 'store/characters';
import { useFavorites } from 'store/favorites';
import {
  charactersSelector,
  updateCharactersSelector,
} from 'store/characters/selectors';
import {
  addFavoriteSelector,
  removeFavoriteSelector,
  favoritesSelector,
} from 'store/favorites/selectors';
import { useSearchHero } from 'store/search';
import {
  characterNameSelector,
  resetSearchResultsSelector,
  searchResultsSelector,
  setCharacterNameSelector,
  updateSearchCharactersSelector,
} from 'store/search/selectors';

import { useDebounce } from 'hooks';

export const useHomeScreen = () => {
  const characterName = useSearchHero(characterNameSelector);
  const setCharacterName = useSearchHero(setCharacterNameSelector);

  const characters = useCharacters(charactersSelector);
  const updateCharacter = useCharacters(updateCharactersSelector);

  const addFavorite = useFavorites(addFavoriteSelector);
  const removeFavorite = useFavorites(removeFavoriteSelector);
  const favorites = useFavorites(favoritesSelector);

  const updateSearchCharacters = useSearchHero(updateSearchCharactersSelector);
  const searchResult = useSearchHero(searchResultsSelector);
  const resetSearchResults = useSearchHero(resetSearchResultsSelector);

  const debouncedValue = useDebounce(characterName);

  const {
    charactersFetchIsError,
    charactersFetchIsFetching,
    charactersFetchResult,
  } = useGetCharacters(0);

  const {
    searchCharacterData,
    searchCharacterIsError,
    searchCharacterIsFetching,
  } = useGetSeachCharacter(debouncedValue);

  const handleChangeSearchCharacter = useCallback(
    characterName => {
      setCharacterName(characterName);

      if (!characterName.length) {
        resetSearchResults();
      }
    },
    [resetSearchResults, setCharacterName]
  );

  useEffect(() => {
    if (
      charactersFetchResult &&
      !charactersFetchIsError &&
      !charactersFetchIsFetching
    ) {
      updateCharacter(charactersFetchResult.characters);
    }
  }, [
    charactersFetchIsError,
    charactersFetchIsFetching,
    charactersFetchResult,
    updateCharacter,
  ]);

  useEffect(() => {
    if (
      searchCharacterData &&
      !searchCharacterIsError &&
      !searchCharacterIsFetching
    ) {
      updateSearchCharacters(searchCharacterData.characters);
    }
  }, [
    searchCharacterData,
    searchCharacterIsError,
    searchCharacterIsFetching,
    updateSearchCharacters,
  ]);

  const isFavoriteHero = useCallback(
    (id: number): boolean => {
      return !!favorites.find(item => item.id === id);
    },
    [favorites]
  );

  return {
    characters,
    addFavorite,
    removeFavorite,
    isFavoriteHero,
    handleChangeSearchCharacter,
    searchResult,
    characterName,
  };
};
