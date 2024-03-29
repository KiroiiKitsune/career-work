import { Link } from 'react-router-dom';
import * as S from '../pages.styled';

export const Home = () => {
  return (
    <>
      <S.Section>
        <S.Container>
          <S.ContentList>
            <S.ContentListItem>
              <S.Title2>Поиск пользователей GitHub</S.Title2>
              <S.Paragraph>Мы найдем всех пользователь которые вас интересуют!</S.Paragraph>
            </S.ContentListItem>
            <S.ToSurfer>
              <Link to='/surfer'>К поиску</Link>
            </S.ToSurfer>
          </S.ContentList>
        </S.Container>
      </S.Section>
    </>
  );
};
