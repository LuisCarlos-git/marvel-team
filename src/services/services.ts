import { GetCharactersResponse } from './types/index';
import { api } from './api';

const BASE_PATH = 'characters';

const getCharacters = async () => {
  const response = await api.get<GetCharactersResponse>(BASE_PATH);

  return response.data;
};

export const services = {
  getCharacters,
};
