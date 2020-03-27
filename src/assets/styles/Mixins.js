import { css } from 'styled-components'

export const Button = css`
padding: 0.3rem 0.8rem;
min-width: 100px;
border-radius: 15px;
background: ${({ theme }) => theme.colors.secondaryViolet};
color: ${({ theme }) => theme.colors.primaryWhite};
letter-spacing: 1px;
text-align: center;
font-weight: 600;
line-height: 25px;
background-image: -webkit-gradient(linear, left top, left bottom, from(${({ theme }) => theme.colors.secondaryViolet}), to(${({ theme }) => theme.colors.thirdaryViolet}));
box-shadow: 0px 3px 8px #aaa, inset 0px 2px 3px #fff;
@media (min-width: ${({ theme }) => theme.responsive.lg}) {
    transition: background .3s ease-in-out;
    :hover{
    background: ${({ theme }) => theme.colors.primaryPink};
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

export const SecondaryFont = css`
font-family: ${({ theme }) => theme.fonts.secondaryFont};
font-style: italic;
letter-spacing: 4px;
color: ${({ theme }) => theme.colors.secondaryViolet};
text-shadow: 0.2rem 0.1rem 0 rgba(0, 0, 0, 0.1);
`;

export const ThirdaryFont = css`
font-family: ${({ theme }) => theme.fonts.thirdaryFont};
font-size: 2rem;
color: ${({ theme }) => theme.colors.thirdaryViolet};
letter-spacing: 0.1rem;
display: block;
text-shadow: 0.1rem 0.1rem 0 rgba(0, 0, 0, 0.1);
::before, ::after {
    content: "§";
    display: inline-block;
    margin: 0 0.8rem;
    font-size: 0.9rem;
    transform: rotate(75deg);
    opacity: 0.4;
}
`;

export const Price = css`
padding: 0.5rem;
width: 54px;
font-size: 1rem;
color: ${({ theme }) => theme.colors.primaryWhite};
text-align: center;
border-radius: 25px;
background-color: ${({ theme }) => theme.colors.secondaryViolet};
box-shadow: 0px 2px 15px -1px rgba(0, 0, 0, 0.25);
`;

export const BoxShadow = css`
box-shadow: 0px 3px 10px 3px rgba(0, 0, 0, 0.30);
`;

export const SecondaryBoxShadow = css`
box-shadow: 2px 1px 15px -3px ${({ theme }) => theme.colors.secondaryViolet};
`;

export const BoxProperty = css`
border: 3px solid ${({ theme }) => theme.colors.primaryViolet};
border-radius: 25px;
box-shadow: 0px 3px 10px 3px rgba(0, 0, 0, 0.25);
`;