import styled, { css } from 'styled-components';

const OutputLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  padding: 1rem;
  ${({ hover }) =>
    hover &&
    css`
      color: ${({ theme }) => theme.colors.primaryWhite};
      transition: color 0.3s ease-in-out;
      :hover {
        color: ${({ theme }) => theme.colors.thirdaryViolet};
      }
    `}
`;

export default OutputLink;
