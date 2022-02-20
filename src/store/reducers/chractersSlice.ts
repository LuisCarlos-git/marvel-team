import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './../store';
import { fetchCharacters } from 'store/actions/charactersActions';
import { CharactersState, Status } from '../types/charactersTypes';

const REDUCER_NAME = 'characters';

const initialState = {
  characters: [],
  status: Status.IDLE,
} as CharactersState;

const characterSlice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(fetchCharacters.pending, state => {
        state.status = Status.PENDING;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.characters = action.payload.data.results;
        state.status = Status.SUCCEEDED;
      });
  },
});

export const statusSelector = (state: RootState) =>
  state.characterReducer.status;

export const characterSelector = (state: RootState) =>
  state.characterReducer.characters;

export default characterSlice.reducer;
