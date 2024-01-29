import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as S from './styles';

export const UserDetails = ({ users }) => {
  const { id } = useParams();
  const user = users[parseInt(id) - 1];
  return (
    <S.Section>
      <S.Container>
        {user && (
          <S.UserCard>
            <S.UserCardTitle>
              Подробная информация о пользователе <span>{user.login}</span>
            </S.UserCardTitle>
            <S.UserImg src={user.avatar_url} alt={user.login} />
            <S.UserItemText>Логин: {user.login}</S.UserItemText>
            <S.UserItemText>Репозиториев: {user.reposCount}</S.UserItemText>
            <S.UserItemLink href={user.html_url} target='_blank'>
              {'Перейти в аккаунт'}
            </S.UserItemLink>
            <S.UserListLink >
              <Link to='/surfer'> {'Обратно к пользователям'}</Link>
            </S.UserListLink>
          </S.UserCard>
        )}
      </S.Container>
    </S.Section>
  );
};
