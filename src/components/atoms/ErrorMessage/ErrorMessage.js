import styled from 'styled-components';

const ErrorMessage = styled.span`
 padding: 0.2rem;
 height: 1rem;
 font-size: ${({ theme }) => theme.fontSizes.xxs};
 font-weight: 600;
 color: ${({ theme }) => theme.colors.red};
`;

export default ErrorMessage;
