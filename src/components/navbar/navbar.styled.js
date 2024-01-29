import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  height: 65px;
  display: flex;
  align-items: center;
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
  background-color: var(--nav-bg);
  border-bottom: 1px solid var(--nav-border);
  color: var(--nav-text);
  letter-spacing: normal;
  z-index: 3;
  position: fixed;
  inset: 0;
  @media screen and (max-width: 1280px) {
    padding-left: calc(50% - 500px);
    padding-right: calc(50% - 500px);
  }
  @media screen and (max-width: 1200px) {
    padding-left: calc(50% - 450px);
    padding-right: calc(50% - 450px);
  }
  @media screen and (max-width: 1024px) {
    padding-left: calc(50% - 360px);
    padding-right: calc(50% - 360px);
  }
  @media screen and (max-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
`;

export const NavRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 30px;
  row-gap: 20px;
  flex-direction: row;
  padding-left: 25px;
  padding-right: 25px;
  justify-content: space-between;
`;

export const Logo = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 12px;
  margin-right: auto;
  color: var(--nav-text);
  font-size: 1.6rem;
  font-family: Poppins, sans-serif;
  strong {
    font-weight: 700;
  }
  @media screen and (max-width: 375px) {
    font-size: 1rem;
  }
`;

export const LogoImg = styled.img`
  height: 50px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  align-items: center;
  column-gap: 40px;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins, sans-serif;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavListMob = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    row-gap: 10px;
    align-items: center;
    column-gap: 40px;
    font-size: 16px;
    font-weight: 500;
    font-family: Poppins, sans-serif;
  }
`;

export const BurgerBlock = styled.div`
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  align-items: center;
  cursor: pointer;
  justify-content: center;
`;

export const MenuBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({ $menuVisible }) => ($menuVisible ? '100vh' : '0')};
  overflow: hidden;
  z-index: 10;
  transition: height 0.5s ease;
  position: absolute;
  top: 32px;
  left: 0;
  background-color: var(--page-bg);
  width: 100%;
  margin-top: 33px;
  align-items: center;
  color: var(--text-color);
`;

export const ButtonLink = styled.button``;

export const BurgerMenu = styled.div`
  width: 18px;
  height: 1px;
  background-color: var(--nav-text);
`;

export const MenuLink = styled(NavLink)`
  position: relative;
  color: var(--nav-text);
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: inline-block;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #5c62ec;
    transition:
      width 0.3s ease,
      left 0.3s ease;
  }
  &:hover::before,
  &:active::before,
  &.active::before {
    left: 0;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    margin-top: 20px;
    color: var(--text-color);
  }
`;

export const ForBtn = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  align-items: center;
  font-size: 1rem;
`;

export const ButtonsTop = styled.button`
  background-color: #c8102e;
  border-radius: 10px;
  color: #fff;
  height: 70px;
  width: 130px;
  @media (max-width: 768px) {
    width: 200px;
    height: 40px;
    font-size: 1rem;
  }
`;

export const ButtonTranscription = styled(ButtonsTop)`
  width: 18rem;
  background-color: var(--page-bg);
  color: var(--text-color);
  border: 1px solid var(--text-color);
  margin-top: 20px;
  @media (max-width: 768px) {
    width: 200px;
  }
  @media (max-width: 325px) {
    width: 160px;
  }
`;

export const SettingsButton = styled.button``;

export const Settings = styled.img`
  width: 24px;
  min-width: 12px;
  transition: transform 1s;
  &:hover {
    transform: rotate(180deg);
  }
`;

export const SettingsApp = styled.div``;

export const SettingsBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({ $settingsVisible }) => ($settingsVisible ? '34vh' : '0')};
  overflow: hidden;
  z-index: 10;
  transition: height 0.5s ease;
  position: absolute;
  background-color: var(--page-bg);
  width: 100%;
  margin-top: 18px;
  align-items: center;
  left: 0;
  color: var(--text-color);
`;

export const ThemeText = styled.p``;

export const Closer = styled.p`
  cursor: pointer;
  margin-top: 50px;
  padding: 20px;
  background-color: var(--page-bg);
  border-radius: 15px;
  border: 2px dotted var(--text-color);
`;
