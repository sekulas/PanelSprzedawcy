import { createContext } from 'react';
import pl from './available-languages/pl.json';
import en from './available-languages/en.json';

export const dictionaryList = { en, pl };

export const languageOptions = {  pl: 'PL',  en: 'EN' };

const LanguageContext = createContext({ 
  language: 'pl', 
  dictionary: dictionaryList.pl,
  userLanguageChange: () => {},
});

export default LanguageContext;