import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  fetchCharacters,
  fetchCharactersById,
  fetchCharactersByName,
  fetchCharactersComics,
} from 'store/actions/charactersActions';
import {
  CharactersState,
  Favorite,
  Status,
  CharacterById,
} from '../types/charactersTypes';

const REDUCER_NAME = 'characters';

const initialState = {
  characters: [],
  favorites: [],
  getCharactersStatus: Status.IDLE,
  searchCharacters: [],
  searchStatus: Status.IDLE,
  characterById: [],
  characterByIdStatus: Status.IDLE,
  comics: [],
  comicsStatus: Status.IDLE,
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
        state.getCharactersStatus = Status.PENDING;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.characters = action.payload.data.results;
        state.getCharactersStatus = Status.SUCCEEDED;
      });

    builder
      .addCase(fetchCharactersByName.pending, state => {
        state.searchStatus = Status.PENDING;
      })
      .addCase(fetchCharactersByName.fulfilled, (state, action) => {
        state.searchCharacters = action.payload.data.results;
      });

    builder
      .addCase(fetchCharactersById.pending, state => {
        state.characterByIdStatus = Status.PENDING;
      })
      .addCase(fetchCharactersById.fulfilled, (state, action) => {
        state.characterById = action.payload.data.results;
      });

    builder
      .addCase(fetchCharactersComics.pending, state => {
        state.comicsStatus = Status.PENDING;
      })
      .addCase(fetchCharactersComics.fulfilled, (state, action) => {
        state.comics = action.payload.data.results;
      });
  },
});

export const noAsyncActions = characterSlice.actions;

export default characterSlice.reducer;
