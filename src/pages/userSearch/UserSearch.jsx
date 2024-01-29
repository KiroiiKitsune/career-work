import { useState } from 'react';
import { apiSearch } from '../../api/apiSearch';
import { Link } from 'react-router-dom';
import loader from './loader.gif'
import * as S from './styles';

export const UserSearch = ({ users, setUsers }) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState('По возрастанию');

  const handleSearch = async () => {
    setIsLoading(true);
    const { dataUsers, error } = await apiSearch(query);
    if (dataUsers) {
      const updatedUsers = await Promise.all(
        dataUsers.items.map(async (user) => {
          const reposResponse = await fetch(user.repos_url);
          const reposData = await reposResponse.json();
          return {
            ...user,
            reposCount: reposData.length,
          };
        }),
      );
      setUsers(updatedUsers);
      setError(null);
      setQuery('');
    } else {
      setUsers([]);
      setError(error);
    }
    setIsLoading(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && query.length > 4) {
      handleSearch();
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSort = () => {
    const sortedUsers = [...users];
    sortedUsers.sort((user1, user2) => {
      if (sortOrder === 'По возрастанию') {
        return user1.reposCount - user2.reposCount;
      } else {
        return user2.reposCount - user1.reposCount;
      }
    });
    setUsers(sortedUsers);
    setSortOrder(
      sortOrder === 'По возрастанию' ? 'По убыванию' : 'По возрастанию',
    );
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <S.Section>
      <S.Container>
        <S.SearchBlock>
          <S.SearchFinder>
            <S.UsersInput
              type='text'
              value={query}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
              placeholder='Введите логин'
            />
            <S.UserSearchBtn onClick={handleSearch} disabled={query.length < 5}>
              Поиск
            </S.UserSearchBtn>
          </S.SearchFinder>
          <S.SearchWarning>
            Имя пользователя должно содержать не мение 5 символов
          </S.SearchWarning>
        </S.SearchBlock>
        {isLoading && <S.Loader src={loader} />}
        {users.length > 0 && (
          <>
            <S.SortTextResults>Результаты поиска:</S.SortTextResults>
            <S.SortBlock>
              <S.SortText>Сортировать по кол-ву репозиториев:</S.SortText>
              <S.SortStart onClick={handleSort}>{sortOrder}</S.SortStart>
            </S.SortBlock>
            {error && <S.UserItemText>Error: {error.message}</S.UserItemText>}
            <S.UsersList>
              {users.map((user, index) => (
                <S.UsersItem key={index}>
                  <Link to={`/user/${index + 1}`}>
                    <S.UserImg src={user.avatar_url} alt={user.login} />
                    <S.UserTextBlock>
                      <S.UserItemText>Логин: {user.login}</S.UserItemText>
                      <S.UserItemText>
                        Репозиториев: {user.reposCount}
                      </S.UserItemText>
                    </S.UserTextBlock>
                  </Link>
                </S.UsersItem>
              ))}
            </S.UsersList>
          </>
        )}
      </S.Container>
    </S.Section>
  );
};
