import { css } from 'styled-components'

export const StyledLink = css`
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

export const FlexColumn = css`
display: flex;
flex-direction: column;
`;

export const FlexRow = css`
display: flex;
flex-direction: row;
`;

export const SecondaryBoxShadow = css`
box-shadow: 2px 1px 15px -2px ${({ theme }) => theme.colors.secondaryViolet};
`;

export const BoxShadow = css`
box-shadow: 0px 3px 10px 3px rgba(0, 0, 0, 0.30);
`;

export const BoxProperty = css`
border: 3px solid ${({ theme }) => theme.colors.primaryViolet};
border-radius: 25px;
box-shadow: 0px 3px 10px 3px rgba(0, 0, 0, 0.25);
`;