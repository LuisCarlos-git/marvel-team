import { useEffect, useState } from 'react';

const useMediaQuery = (query: string) => {
  const [isVerified, setIsVerified] = useState(
    !!window.matchMedia(query).matches
  );
  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const documentChangeHandler = () => setIsVerified(!!mediaQueryList.matches);

    try {
      mediaQueryList.addEventListener('change', documentChangeHandler);
    } catch (err) {
      mediaQueryList.addListener(documentChangeHandler);
    }

    return () => {
      try {
        mediaQueryList.removeEventListener('change', documentChangeHandler);
      } catch (e) {
        mediaQueryList.removeListener(documentChangeHandler);
      }
    };
  }, [query]);

  return isVerified;
};

export default useMediaQuery;
