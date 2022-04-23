import React from 'react';
import arrowDown from '../../../assets/arrow-down-circle.svg';

import { useLocales } from '../../../context/Locales';

function ArrowDown() {
  const { t } = useLocales();

  return (
    <img src={arrowDown} alt={t('alt_arrow_down')} />
  );
}

export default ArrowDown;
