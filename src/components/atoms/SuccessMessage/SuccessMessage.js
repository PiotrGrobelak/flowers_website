import styled from 'styled-components';

const SuccessMessage = styled.span`
 padding-left: 2rem;
 height: 20px;
 color: ${({ theme }) => theme.colors.primaryGreen};
`;

export default SuccessMessage;
