import Lottie from 'react-lottie';

import { LOADING } from 'assets';

import * as Styled from './styles';

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LOADING,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Styled.Wrapper>
      <Lottie options={defaultOptions} height={500} width={400} />
    </Styled.Wrapper>
  );
};

export default Loading;
