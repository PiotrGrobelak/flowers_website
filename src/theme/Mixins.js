import { css } from 'styled-components';

export const FlexColumn = css`
 display: flex;
 flex-direction: column;
`;

export const FlexRow = css`
 display: flex;
 flex-direction: row;
`;

export const BoxShadow = css`
 box-shadow: 0px 3px 10px 3px rgba(0, 0, 0, 0.3);
`;

export const SecondaryBoxShadow = css`
 box-shadow: 2px 1px 15px -3px ${({ theme }) => theme.colors.secondaryViolet};
`;

export const BoxProperty = css`
 border: 3px solid ${({ theme }) => theme.colors.primaryViolet};
 border-radius: 25px;
 box-shadow: 0px 3px 10px 3px rgba(0, 0, 0, 0.25);
`;
