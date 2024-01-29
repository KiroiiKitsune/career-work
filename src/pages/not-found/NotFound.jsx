import { NavLink } from 'react-router-dom';
import * as S from './styles';

export const NotFound = () => {
  return (
    <S.Block404>
      <S.Text>
        Такой страници не существует <br></br>Ошибка 404 ((
      </S.Text>
      <NavLink to='/'>
        <S.GoToMain>На главную</S.GoToMain>
      </NavLink>
    </S.Block404>
  );
};