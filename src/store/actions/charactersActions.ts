import { createAsyncThunk } from '@reduxjs/toolkit';
import { services } from 'services/services';
import { noAsyncActions } from 'store/reducers/chractersSlice';

enum Actions {
  FETCH_CHARACTERS = '@characters/FETCH_CHARACTERS',
  FETCH_CHARACTERS_BY_NAME = '@characters/FETCH_CHARACTERS_BY_NAME',
  FETCH_CHARACTERS_BY_ID = '@characters/FETCH_CHARACTERS_BY_ID',
  FETCH_CHARACTERS_COMICS = '@characters/FETCH_CHARACTERS_COMICS',
}

export const fetchCharacters = createAsyncThunk(
  Actions.FETCH_CHARACTERS,
  async (offset?: number) => {
    const hasOffset = offset ? offset : 0;
    const response = await services.getCharacters({ offset: hasOffset });
    return response;
  }
);

export const fetchCharactersByName = createAsyncThunk(
  Actions.FETCH_CHARACTERS_BY_NAME,
  async ({ heroName }: { heroName: string }) => {
    const response = await services.getSearchCharacters(heroName);
    return response;
  }
);

export const fetchCharactersById = createAsyncThunk(
  Actions.FETCH_CHARACTERS_BY_ID,
  async (heroId: string) => {
    const response = await services.getCharacterById(heroId);
    return response;
  }
);

export const fetchCharactersComics = createAsyncThunk(
  Actions.FETCH_CHARACTERS_COMICS,
  async ({ heroId, offset = 0 }: { heroId: string; offset?: number }) => {
    const response = await services.getCharacterComics({ heroId, offset });
    return response;
  }
);

export const { addFavorite, clearSearchIfNameByEmpty, removeFavorites } =
  noAsyncActions;
