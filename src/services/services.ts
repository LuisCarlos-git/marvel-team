import {
  GetCharacterbyIdResponse,
  GetCharacterComicsProps,
  GetCharacterComicsResponse,
  GetCharactersResponse,
} from './types/index';
import { api } from './api';

const BASE_PATH = 'characters';
const LIMIT_CHARACTERS = 8;
const LIMIT_COMICS = 5;

const getCharacters = async ({ offset }: { offset: number }) => {
  const response = await api.get<GetCharactersResponse>(BASE_PATH, {
    params: {
      limit: LIMIT_CHARACTERS,
      offset,
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

const getCharacterById = async (heroId: string) => {
  const response = await api.get<GetCharacterbyIdResponse>(
    `${BASE_PATH}/${heroId}`
  );

  return response.data;
};

const getCharacterComics = async ({
  heroId,
  offset = 0,
}: GetCharacterComicsProps) => {
  const response = await api.get<GetCharacterComicsResponse>(
    `${BASE_PATH}/${heroId}/comics`,
    {
      params: {
        limit: LIMIT_COMICS,
        offset,
      },
    }
  );

  return response.data;
};

export const services = {
  getCharacters,
  getSearchCharacters,
  getCharacterById,
  getCharacterComics,
};
