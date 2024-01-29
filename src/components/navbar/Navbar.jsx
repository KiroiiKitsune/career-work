import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BtnMode } from '../btnMode/BtnMode';
import settingsIcon from './settings.png';
import logo from './logo.png';
import * as S from './styles';

export const Navbar = ({ transcription, setTranscription }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [settingsVisible, setSettingsVisible] = useState(false);
  const menuShow = () => {
    setMenuVisible(!menuVisible);
    setSettingsVisible(false);
  };
  const settingsShow = () => {
    setSettingsVisible(!settingsVisible);
    setMenuVisible(false);
  };
  const toggleTranscription = () => {
    setTranscription(!transcription);
  };

  const closerAllModals = () => {
    setSettingsVisible(false);
    setMenuVisible(false);
  };
  return (
    <S.Nav>
      <S.Container>
        <S.NavRow>
          <NavLink to='/'>
            <S.Logo>
              <S.LogoImg src={logo}/>
              <strong>GitHub-Search</strong>
            </S.Logo>
          </NavLink>

          <S.NavList>
            <S.SettingsApp>
              <S.SettingsButton>
                <S.Settings
                  src={settingsIcon}
                  alt='Настройки'
                  onClick={settingsShow}
                />
              </S.SettingsButton>
              <S.SettingsBlock $settingsVisible={settingsVisible}>
                <S.ForBtn>
                  <S.ThemeText>Сменить тему:</S.ThemeText>
                  <BtnMode />
                </S.ForBtn>
                <S.Closer onClick={settingsShow}>Закрыть</S.Closer>
              </S.SettingsBlock>
            </S.SettingsApp>
            <S.ButtonLink onClick={closerAllModals}>
              <S.MenuLink to='/' $activeClassName="active">Home</S.MenuLink>
            </S.ButtonLink>
            <S.ButtonLink onClick={closerAllModals}>
              <S.MenuLink to='/surfer' $activeClassName="active">Search</S.MenuLink>
            </S.ButtonLink>
          </S.NavList>
          <S.NavListMob>
            <S.SettingsApp>
              <S.SettingsButton>
                <S.Settings
                  src={settingsIcon}
                  alt='Настройки'
                  onClick={settingsShow}
                />
              </S.SettingsButton>
              <S.SettingsBlock $settingsVisible={settingsVisible}>
                <S.ForBtn>
                  <S.ThemeText>Сменить тему:</S.ThemeText>
                  <BtnMode />
                </S.ForBtn>
                <S.ButtonTranscription onClick={toggleTranscription}>
                  {transcription
                    ? 'Убрать транскрипцию'
                    : 'Показать транскрипцию'}
                </S.ButtonTranscription>
                <S.Closer onClick={settingsShow}>Закрыть</S.Closer>
              </S.SettingsBlock>
            </S.SettingsApp>
            <S.BurgerBlock onClick={menuShow}>
              <S.BurgerMenu />
              <S.BurgerMenu />
              <S.BurgerMenu />
            </S.BurgerBlock>
            <S.MenuBlock $menuVisible={menuVisible}>
              <S.ButtonLink onClick={closerAllModals}>
                <S.MenuLink to='/' $activeClassName="active">Home</S.MenuLink>
              </S.ButtonLink>
              <S.ButtonLink onClick={closerAllModals}>
                <S.MenuLink to='/surfer' $activeClassName="active">Surfer</S.MenuLink>
              </S.ButtonLink>
              <S.Closer onClick={closerAllModals}>Закрыть</S.Closer>
            </S.MenuBlock>
          </S.NavListMob>
        </S.NavRow>
      </S.Container>
    </S.Nav>
  );
};
