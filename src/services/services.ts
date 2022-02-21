import { GetCharactersResponse } from './types/index';
import { api } from './api';

const BASE_PATH = 'characters';
const LIMIT = 8;

const getCharacters = async () => {
  const response = await api.get<GetCharactersResponse>(BASE_PATH, {
    params: {
      limit: LIMIT,
    },
  });

  return response.data;
};

const getSearchCharacters = async (heroName: string) => {
  const response = await api.get<GetCharactersResponse>(BASE_PATH, {
    params: {
      nameStartsWith: heroName,
    },
  });

  return response.data;
};

export const services = {
  getCharacters,
  getSearchCharacters,
};
