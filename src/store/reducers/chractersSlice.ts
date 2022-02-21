import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  fetchCharacters,
  fetchCharactersByName,
} from 'store/actions/charactersActions';
import { CharactersState, Favorite, Status } from '../types/charactersTypes';

const REDUCER_NAME = 'characters';

const initialState = {
  characters: [],
  favorites: [],
  status: Status.IDLE,
  searchCharacters: [],
  searchStatus: Status.IDLE,
} as CharactersState;

const characterSlice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Favorite>) => {
      state.favorites.push(action.payload);
    },
    removeFavorites: (state, action: PayloadAction<{ id: number }>) => {
      state.favorites = state.favorites.filter(
        item => item.id !== action.payload.id
      );
    },

    clearSearchIfNameByEmpty: state => {
      state.searchCharacters = [];
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCharacters.pending, state => {
        state.status = Status.PENDING;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.characters = action.payload.data.results;
        state.status = Status.SUCCEEDED;
      });

    builder
      .addCase(fetchCharactersByName.pending, state => {
        state.searchStatus = Status.PENDING;
      })
      .addCase(fetchCharactersByName.fulfilled, (state, action) => {
        state.searchCharacters = action.payload.data.results;
      });
  },
});

export const noAsyncActions = characterSlice.actions;

export default characterSlice.reducer;
