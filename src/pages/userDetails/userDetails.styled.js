import styled from 'styled-components';

export const Section = styled.main`
  padding: 60px 0;
  height: auto;
  background-color: var(--page-bg);
  color: var(--text-color);
  margin-top: 30px;
  width: 100%;
  opacity: 0.97;
  border-radius: 0 0 20px 20px;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 30px;
  padding-right: 30px;
  padding-left: 30px;
  @media screen and (max-width: 425px) {
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  background-color: var(--bg-card);
  padding: 15px 25px;
  border: 2px solid #eee;
  border-radius: 6px;
  cursor: pointer;
  align-items: center;
  @media screen and (max-width: 425px) {
    padding: 10px;
  }
`;

export const UserCardTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  line-height: 2.5rem;
  span {
    color: #e71919;
  }
`;

export const UserImg = styled.img`
  width: 250px;
`;

export const UserText = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  align-items: center;
`;

export const UserItemText = styled.p`
  font-size: 1rem;
`;

export const UserItemLink = styled.a`
  display: flex;
  justify-content: center;
  background-color: var(--purple);
  border-radius: 6px;
  padding: 10px;
  color: #ddd;
  width: 250px;
  font-size: 1rem;
  margin-top: 30px;
  margin-bottom: 20px;
  box-sizing: border-box;
  &: hover {
    background-color: #282d93;
    color: white;
  }
  @media screen and (max-width: 425px) {
    width: 150px;
  }
`;

export const UserListLink = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--purple);
  border-radius: 6px;
  padding: 10px;
  color: #ddd;
  width: 250px;
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 20px;
  box-sizing: border-box;
  &: hover {
    background-color: #282d93;
    color: white;
  }
  @media screen and (max-width: 425px) {
    width: 150px;
  }

  a {
    color: #ddd;
  }
`;

export const Loader = styled.img`
  width: 20px;
`;
