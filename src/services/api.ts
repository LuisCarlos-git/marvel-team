import axios from 'axios';
import md5 from 'md5';

const BASE_URL = 'http://gateway.marvel.com/v1/public';

const defaultParams = () => {
  const ts = new Date().getTime();
  const publicKey = import.meta.env.VITE_MARVEL_API_PUBLIC;
  const privateKey = import.meta.env.VITE_MARVEL_API_PRIVATE;
  const md5Hash = md5(`${ts}${privateKey}${publicKey}`);

  return {
    ts,
    apikey: publicKey,
    hash: md5Hash,
  };
};

export const api = axios.create({
  baseURL: BASE_URL,
  params: {
    ...defaultParams(),
  },
});
