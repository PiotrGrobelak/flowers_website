import styled from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme, big }) => (big ? theme.fontSizes.xl : theme.fontSizes.lg)};
  font-weight: ${({ theme }) => theme.bold};
`;

export default Heading;
