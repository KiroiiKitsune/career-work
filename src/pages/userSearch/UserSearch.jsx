import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../../api/apiGetUsers';
import { getSortedUsers } from '../../api/apiGetSortedUsers';
import loader from '../loader.gif';
import * as S from './userSearch.styled.js';

export const UserSearch = ({ users, setUsers }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const [sortOrder, setSortOrder] = useState('desc');

  const handleSearch = async () => {
    inputRef.current.value = '';
    setIsLoading(true);
    const { dataUsers, error } = await getUsers(query);
    if (dataUsers) {
      setUsers(dataUsers.items);
      setError(null);
      setTotalCount(dataUsers.total_count);
    } else {
      if (error.response) {
        setError('Неизвестная ошибка');
      } else {
        setUsers([]);
        setError(error);
      }
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

  const handleSort = async () => {
    inputRef.current.value = '';
    setIsLoading(true);
    const newSortOrder = sortOrder === 'desc' ? 'asc' : 'desc';
    const dataUsers = await getSortedUsers({
      query,
      sortOrder: newSortOrder,
    });

    setUsers(dataUsers.items);
    setSortOrder(newSortOrder);
    setIsLoading(false);
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
              type='search'
              value={query}
              ref={inputRef}
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
        {users.length === 0 && !isLoading && !error && (
          <S.UserItemText>Пока нет данных</S.UserItemText>
        )}
        {users.length > 0 && (
          <>
            <S.SortTextResults>
              Новых результатов: {totalCount}
            </S.SortTextResults>
            <S.SortBlock>
              <S.SortText>Сортировать по кол-ву репозиториев:</S.SortText>
              <S.SortStart onClick={handleSort} disabled={!query}>
                {sortOrder === 'asc' ? 'По убыванию' : 'По возрастанию'}
                <S.Tooltip>{!query && 'Сделайте новый запрос'}</S.Tooltip>
              </S.SortStart>
            </S.SortBlock>
            {error && <S.UserItemText>Error: {error.message}</S.UserItemText>}

            <S.UsersList>
              {users.map((user, index) => (
                <S.UsersItem key={index}>
                  <Link to={`/user/${index + 1}`}>
                    <S.UserImg src={user.avatar_url} alt={user.login} />
                    <S.UserTextBlock>
                      <S.UserItemText>Логин: {user.login}</S.UserItemText>
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
