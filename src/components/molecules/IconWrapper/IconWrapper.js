import React from 'react';
import styled from 'styled-components';
import { FlexRow, BoxShadow } from 'src/theme/Mixins';

const StyledWrapper = styled.span`
  ${FlexRow};
  align-items: center;
  justify-content: center;
  margin-right: 0.8rem;
  padding: 10px;
  border-radius: 5px 20px 5px;
  color: ${({ theme }) => theme.colors.primaryWhite};
  background-color: ${({ theme }) => theme.colors.primaryViolet};
  ${BoxShadow};
`;

const IconWrapper = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

export default IconWrapper;
