import React from 'react';

import moon from '../../assets/moon.svg';

import * as S from './styles';

function Star() {
  return (
    <S.Container>
      <img src={moon} alt="Desenho de uma lua crescente com uma estrela pendurada" />
    </S.Container>
  );
}

export default Star;
