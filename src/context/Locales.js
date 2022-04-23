import React, {
  useContext,
  createContext,
  useState,
} from 'react';

import PropTypes from 'prop-types';

import en from '../locales/en.json';
import pt from '../locales/pt.json';

const LocalesContext = createContext();

export default function LocalesProvider({ children }) {
  const [current, setCurrent] = useState('en');
  const availableLanguages = {
    en,
    pt,
  };

  const changeLanguage = (language) => setCurrent(language);

  const t = (str) => availableLanguages[current][str] || str;

  return (
    <LocalesContext.Provider
      value={{
        t,
        availableLanguages,
        changeLanguage,
      }}
    >
      {children}
    </LocalesContext.Provider>
  );
}

export function useLocales() {
  const { t, availableLanguages, changeLanguage } = useContext(LocalesContext);
  return { t, availableLanguages, changeLanguage };
}

LocalesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
