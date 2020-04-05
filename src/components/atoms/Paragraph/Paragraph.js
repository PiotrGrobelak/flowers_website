import styled from 'styled-components';

const Paragraph = styled.p`
  margin: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme, bold }) => (bold ? theme.fontWeights.bold : theme.fontWeights.normal)};
`;

export default Paragraph;
