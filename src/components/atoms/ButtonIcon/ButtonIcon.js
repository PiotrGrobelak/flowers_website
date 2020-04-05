import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: none;
  color: ${({ theme }) => theme.colors.primaryWhite};
`;

export default ButtonIcon;
