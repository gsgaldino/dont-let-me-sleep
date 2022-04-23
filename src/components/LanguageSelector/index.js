import React from 'react';
import { Select } from '@chakra-ui/react';

import ArrowDown from './components/ArrowDown';

import { useLocales } from '../../context/Locales';

function LanguageSelector() {
  const { availableLanguages, changeLanguage, t } = useLocales();

  const handleSelectChange = (event) => {
    const { value } = event.target;
    changeLanguage(value);
  };

  const optionStyle = {
    color: 'var(--blue)',
  };

  return (
    <Select
      maxW="140px"
      color="var(--white)"
      onChange={handleSelectChange}
      icon={<ArrowDown />}
      value={t('language')}
    >
      <option key="foo" disabled selected hidden style={optionStyle}>
        {t('language')}
      </option>
      {Object.keys(availableLanguages).map((language) => (
        <option key={language} style={optionStyle}>{language}</option>
      ))}
    </Select>
  );
}

export default LanguageSelector;
