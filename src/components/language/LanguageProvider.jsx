import React, { useState } from 'react';
import { dictionaryList } from '../../context/LanguageContext';
import LanguageContext from '../../context/LanguageContext';

export const LanguageProvider = ({ children }) => {
  const defaultLanguage = window.localStorage.getItem('rcml-lang') || 'pl';
  const [userLanguage, setUserLanguage] = useState(defaultLanguage);

  const userLanguageChange = (newLanguage) => {
    setUserLanguage(newLanguage);
    window.localStorage.setItem('rcml-lang', newLanguage);
  };

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange,
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;