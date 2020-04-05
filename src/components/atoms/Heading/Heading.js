import styled, { css } from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme, small }) => (small ? theme.fontSizes.sm : theme.fontSizes.xl)};
  font-family: ${({ theme }) => theme.fonts.secondaryFont};
  font-style: italic;
  letter-spacing: 0.5rem;
  color: ${({ theme }) => theme.colors.secondaryViolet};
  text-shadow: 0.2rem 0.1rem 0 rgba(0, 0, 0, 0.1);
  ${({ secondary }) =>
    secondary &&
    css`
      font-family: ${({ theme }) => theme.fonts.thirdaryFont};
      font-size: ${({ theme }) => theme.fontSizes.lg};
      color: ${({ theme }) => theme.colors.thirdaryViolet};
      letter-spacing: 0.1rem;
      display: block;
      text-shadow: 0.1rem 0.1rem 0 rgba(0, 0, 0, 0.1);
      ::before,
      ::after {
        content: '§';
        display: inline-block;
        margin: 0 0.8rem;
        font-size: 0.9rem;
        transform: rotate(75deg);
        opacity: 0.4;
      }
    `}
`;

export default Heading;
