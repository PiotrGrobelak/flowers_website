import styled from "styled-components";

const Button = styled.button`
  padding: 0.5rem 1.2rem;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.secondaryViolet};
  box-shadow: 0px 2px 15px -1px rgba(0, 0, 0, 0.25);
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primaryWhite};
  font-weight: 600;
  letter-spacing: 1px;
  @media (min-width: ${({ theme }) => theme.responsive.desktop}) {
    font-size: 1.2rem;
    transition: background-color .3s ease-in-out;
    :hover{
      background-color: ${({ theme }) => theme.colors.primaryPink};
    }
}
`;
export default Button;