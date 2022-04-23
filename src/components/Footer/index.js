import React from 'react';

import Logo from '../Logo';

import * as S from './styles';

function Footer() {
  return (
    <S.Footer>
      <S.Wrapper>
        <Logo variant="dark" />
      </S.Wrapper>
    </S.Footer>
  );
}

export default Footer;
