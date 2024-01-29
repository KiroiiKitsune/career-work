import * as S from './styles';

export const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <S.Footer>
      <S.FooterContainer>
        <S.FooterWrapper>
          <S.Copyright>© {currentDate} Kovalenko Mikhail</S.Copyright>
        </S.FooterWrapper>
      </S.FooterContainer>
    </S.Footer>
  );
};
