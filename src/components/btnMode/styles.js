import styled from 'styled-components';

export const DarkModeButton = styled.button`
  order: 9;
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 51px;
  height: 26px;
  padding: 5px;
  border-radius: 50px;
  background-color: #ccc;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #fff;
    transition: left 0.2s ease-in;
    left: ${({ $isActive }) => ($isActive ? '26px' : '1px')};
  }
`;

export const Icon = styled.img`
  position: relative;
  z-index: 9;
`;