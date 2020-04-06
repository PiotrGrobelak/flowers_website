import styled from 'styled-components';
import { SecondaryBoxShadow } from 'src/theme/Mixins';

const Input = styled.input`
 display: block;
 padding: 0.6rem 0.6rem;
 width: 260px;
 border: 1px solid ${({ theme }) => theme.colors.primaryViolet};
 border-radius: 10px;
 background: none;
 height: ${({ as }) => (as ? '150px' : 'auto')};
 transition: all 0.3s ease-in-out;
 :focus {
  background-color: ${({ theme }) => theme.colors.secondaryWhite};
  ${SecondaryBoxShadow};
 }
`;

export default Input;
