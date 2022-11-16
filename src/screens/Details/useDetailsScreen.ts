import { useParams } from 'react-router-dom';
import { useGetCharacterById } from 'services/queries/useGetCharacterById';

export const useDetailsScreen = () => {
  const { heroId } = useParams();
  const { characterByIdData, characterByIdIsError, characterByIdIsFetching } =
    useGetCharacterById(heroId!);

  return {
    characterByIdData,
    characterByIdIsError,
    characterByIdIsFetching,
  };
};
