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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-bottom: 25px;
  justify-content: center;
  align-items: center;
`;

export const SearchFinder = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

export const UsersInput = styled.input`
  background-color: var(--page-bg);
  border: 1px solid var(--text-color);
  border-radius: 6px;
  height: 40px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const UserSearchBtn = styled.button`
  height: 40px;
  width: 90px;
  background-color: var(--purple);
  border-radius: 6px;
  padding: 10px;
  color: ${(props) => (props.disabled ? '#bbb' : '#fff')};
  &: hover {
    background-color: #282d93;
    color: white;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

export const SearchWarning = styled.p`
  color: #e71919;
  font-size: 1rem;
`;

export const Loader = styled.img`
  width: 50px;
  margin-bottom: 30px;
`;

export const SortBlock = styled(SearchBlock)`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
`;

export const SortText = styled.div``;

export const SortTextResults = styled.div`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

export const SortStart = styled(UserSearchBtn)`
  width: 150px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  position: relative;
`;

export const Tooltip = styled.span`
  visibility: hidden;
  width: 120px;
  height: 0;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;

  ${SortStart}:hover & {
    visibility: visible;
    height: auto;
  }
`;

export const UsersList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  padding-bottom: 50px;
`;

export const UsersItem = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 170px;
  background-color: var(--bg-card);
  padding: 8px;
  border: 2px solid #eee;
  border-radius: 6px;
  cursor: pointer;
`;

export const UserImg = styled.img`
  width: 150px;
`;

export const UserTextBlock = styled.div`
  font-size: 1rem;
  font-size: 1rem;
  word-break: break-word;
  color: var(--text-color);
  padding-top: 20px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const UserItemText = styled.p``;

