import React from 'react';

import Logo from '../Logo';
import LanguageSelector from '../LanguageSelector';

import * as S from './styles';

function Header() {
  return (
    <S.Header>
      <Logo />
      <LanguageSelector />
    </S.Header>
  );
}

export default Header;
