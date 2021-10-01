import React from 'react';

import * as S from './Spinner.style';

const Spinner = () => (
  <S.SpinnerWrapper>
    <S.Image
      src="/images/loading-spinner@2x.png"
      srcSet="/images/loading-spinner.png, /images/loading-spinner@2x.png, /images/loading-spinner@3x.png"
      alt="loading spinner"
    />
  </S.SpinnerWrapper>
);

export default Spinner;
