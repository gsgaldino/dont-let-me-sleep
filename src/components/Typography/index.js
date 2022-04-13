import React from 'react';

import * as S from './styles';

const Typography = ({ as, children }) => {
  return (
    <S.Container as={as}>
      {children}
    </S.Container>
  );
};

export default Typography;
