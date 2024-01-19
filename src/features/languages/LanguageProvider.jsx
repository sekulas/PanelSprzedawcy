import React, { useState } from 'react';
import { dictionaryList } from './LanguageContext';
import LanguageContext from './LanguageContext';

export const LanguageProvider = ({ children }) => {
  const [userLanguage, setUserLanguage] = useState('en');

  const userLanguageChange = (newLanguage) => {
    setUserLanguage(newLanguage);
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