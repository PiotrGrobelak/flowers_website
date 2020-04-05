import styled from 'styled-components';

const Input = styled.input`
  display: block;
  padding: 0.2rem 0.4rem;
  border: 1px solid ${({ theme }) => theme.colors.primaryViolet};
  border-radius: 10px;
  background: none;
  font-size: 1rem;
  height: ${({ as }) => (as ? '150px' : 'auto')};
  transition: background-color 0.3s ease-in-out;
  :focus {
    background-color: ${({ theme }) => theme.colors.secondaryWhite};
    ${SecondaryBoxShadow};
  }
`;

export default Input;
