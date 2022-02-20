/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MARVEL_API_PUBLIC: string;
  readonly VITE_MARVEL_API_PRIVATE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
