import { css } from 'styled-components'

export const Button = css`
padding: 0.3rem 0.8rem;
min-width: 100px;
border-radius: 15px;
background-color: ${({ theme }) => theme.colors.secondaryViolet};
box-shadow: 0px 2px 15px -1px rgba(0, 0, 0, 0.25);
color: ${({ theme }) => theme.colors.primaryWhite};
letter-spacing: 1px;
text-align: center;
font-weight: 600;
@media (min-width: ${({ theme }) => theme.responsive.lg}) {
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

export const BoxShadowPink = css`
box-shadow: 0px 3px 11px -3px ${({ theme }) => theme.colors.primaryPink};
`;

export const SecondaryFont = css`
font-family: ${({ theme }) => theme.fonts.secondaryFont};
font-style: italic;
letter-spacing: 2px;
color: ${({ theme }) => theme.colors.secondaryViolet};
`;

export const Price = css`
padding: 0.5rem;
width: 64px;
font-size: 1.4rem;
color: ${({ theme }) => theme.colors.primaryWhite};
text-align: center;
border-radius: 25px;
background-color: ${({ theme }) => theme.colors.secondaryViolet};
box-shadow: 0px 2px 15px -1px rgba(0, 0, 0, 0.25);
`;