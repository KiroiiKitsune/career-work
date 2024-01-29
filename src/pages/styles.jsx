import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.main`
  height: auto;
  background-color: var(--page-bg);
  color: var(--text-color);
  opacity: 0.9;
  margin-top: 100px;
  border-radius: 20px;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  border-radius: 20px;
  margin-top: 100px;
  @media screen and (max-width: 768px) {
    padding-bottom: 0;
  }
`;

export const Title1 = styled.h1`
  margin-top: 60px;
  margin-bottom: 60px;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--title-1);
  text-align: center;
  @media screen and (max-width: 768px) {
    margin-top: 100px;
    margin-bottom: 30px;
  }
`;

export const ContentList = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
  min-height: 400px;
  text-align: center;
  @media screen and (max-width: 620px) {
    row-gap: 20px;
  }
`;

export const ContentListItem = styled.li`
  font-size: 18px;
  line-height: 1.5;
  @media screen and (max-width: 620px) {
    font-size: 16px;
  }
`;

export const Title2 = styled.h2`
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;
`;

export const Paragraph = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 30px;
`;

export const Contacts = styled.a`
  color: var(--text-color);
  &:hover {
    color: var(--accent);
  }
`;

export const StyledLink = styled(Link)`
  color: var(--text-color);
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
  border: 1px solid var(--text-color);
  padding: 15px 20px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    color: var(--accent);
  }
`;

export const ToSurfer = styled.div`
  height: 100%;
  width: 90px;
  background-color: var(--purple);
  border-radius: 6px;
  padding: 10px;
  a {
    color: #ddd;
  }
  &: hover {
    background-color: #282d93;
    color: white;
  }
`;
