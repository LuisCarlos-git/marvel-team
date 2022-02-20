import { createAsyncThunk } from '@reduxjs/toolkit';
import { services } from 'services/services';

enum Actions {
  FETCH_CHARACTERS = '@charactrs/FETCH_CHARACTERS',
}

export const fetchCharacters = createAsyncThunk(
  Actions.FETCH_CHARACTERS,
  async () => {
    const response = await services.getCharacters();
    return response;
  }
);
