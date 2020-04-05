import styled from 'styled-components';

const Cost = styled.span`
 padding: 0.5rem;
 width: 64px;
 color: ${({ theme }) => theme.colors.primaryWhite};
 text-align: center;
 border-radius: 25px;
 background-color: ${({ theme }) => theme.colors.secondaryViolet};
 box-shadow: 0px 2px 15px -1px rgba(0, 0, 0, 0.25);
`;

export default Cost;
