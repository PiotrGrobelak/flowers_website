import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0.4rem;
  background-color: ${({ theme }) => theme.colors.primaryViolet};
  box-shadow: 0px 3px 10px 3px rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.colors.primaryWhite};
  font-weight: 600;
`;

export const FooterList = styled.ul`
  display: flex;
  list-style: none;
`;

export const FooterItem = styled.li`
  padding: 0.4rem;
  font-size: 1.4rem;
`;

export const FooterSocialLink = styled.a`
  margin: 0.2rem;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    margin: 0.2rem;
  }

  a {
    font-size: 0.8rem;
    padding: 0.4rem;
    transition: color 0.3s ease-in-out;
    :hover {
      color: ${({ theme }) => theme.colors.thirdaryViolet};
    }
  }
`;
