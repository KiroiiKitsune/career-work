import { useEffect, useState } from 'react';
import sun from './sun.png';
import moon from './moon.png';
import * as S from './BtnMode.styled.js';

export const BtnMode = () => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const toggleMode = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setCurrentTheme(newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const themeToSet = savedTheme === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', themeToSet);
    setCurrentTheme(themeToSet);
  }, []);

  const isDarkModeActive = currentTheme === 'dark';

  return (
    <S.DarkModeButton onClick={toggleMode} $isActive={isDarkModeActive}>
      <S.Icon src={sun} alt='Light mode' />
      <S.Icon src={moon} alt='Dark mode' />
    </S.DarkModeButton>
  );
};
