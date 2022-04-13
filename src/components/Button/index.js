import React from 'react';

import * as S from './styles';

const Button = ({ children, onClick }) => {
  return (
    <S.Container onClick={onClick}>
      {children}
    </S.Container>
  );
};

export default Button;
