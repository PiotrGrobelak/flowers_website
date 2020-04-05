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
      letter-spacing: 0.2rem;
      color: ${({ theme }) => theme.colors.thirdaryViolet};
      text-shadow: 0.1rem 0.1rem 0 rgba(0, 0, 0, 0.1);
    `}
`;

export default Heading;
