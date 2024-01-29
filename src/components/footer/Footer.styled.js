import styled from 'styled-components';

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background-color: var(--footer-bg);
  color: var(--footer-text);
  @media screen and (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

export const FooterContainer = styled.div`
  margin: 0 auto;
  padding: 0 15px;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 27px;
`;
export const Social = styled.div`
  display: flex;
  column-gap: 30px;
  align-items: center;
`;

export const Copyright = styled.div`
  font-size: 1rem;
  & p + p {
    margin-top: 0.5em;
  }
  text-align: center;
`;

export const Infolink = styled.a`
  color: var(--footer-text);
`;
