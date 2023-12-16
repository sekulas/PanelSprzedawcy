import React, { useState } from 'react';
import { dictionaryList } from '../../context/LanguageContext';
import LanguageContext from '../../context/LanguageContext';

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