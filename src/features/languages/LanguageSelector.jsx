import { useContext } from 'react';
import { languageOptions } from './LanguageContext';
import LanguageContext from './LanguageContext';

export const LanguageSelector = () => {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);
  const handleLanguageChange = (e) => userLanguageChange(e.target.value);

  return (
    <select onChange={handleLanguageChange} value={userLanguage}>
      {Object.entries(languageOptions).map(([id, name]) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;