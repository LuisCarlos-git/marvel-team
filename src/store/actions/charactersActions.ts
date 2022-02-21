import { createAsyncThunk } from '@reduxjs/toolkit';
import { services } from 'services/services';
import { noAsyncActions } from 'store/reducers/chractersSlice';

enum Actions {
  FETCH_CHARACTERS = '@characters/FETCH_CHARACTERS',
  FETCH_CHARACTER_BY_NAME = '@characters/FETCH_CHARACTER_BY_NAME',
}

export const fetchCharacters = createAsyncThunk(
  Actions.FETCH_CHARACTERS,
  async () => {
    const response = await services.getCharacters();
    return response;
  }
);

export const fetchCharactersByName = createAsyncThunk(
  Actions.FETCH_CHARACTER_BY_NAME,
  async ({ heroName }: { heroName: string }) => {
    const response = await services.getSearchCharacters(heroName);
    return response;
  }
);

export const { addFavorite, clearSearchIfNameByEmpty, removeFavorites } =
  noAsyncActions;
