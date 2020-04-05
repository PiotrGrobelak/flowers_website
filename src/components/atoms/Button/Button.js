import styled from 'styled-components';

const Button = styled.button`
 padding: 0.4rem 0.8rem;
 min-width: 100px;
 border-radius: 15px;
 background: ${({ theme }) => theme.colors.secondaryViolet};
 color: ${({ theme }) => theme.colors.primaryWhite};
 letter-spacing: 1px;
 text-align: center;
 font-weight: ${({ theme }) => theme.fontWeights.bold};
 line-height: 25px;
 white-space: nowrap;
 cursor: pointer;
 border: none;
 background-image: -webkit-gradient(
  linear,
  left top,
  left bottom,
  from(${({ theme }) => theme.colors.secondaryViolet}),
  to(${({ theme }) => theme.colors.thirdaryViolet})
 );
 box-shadow: 0px 3px 8px #aaa, inset 0px 2px 3px #fff;
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  transition: background 0.3s ease-in-out;
  :hover {
   background: ${({ theme }) => theme.colors.pink};
  }
 }
`;

export default Button;
