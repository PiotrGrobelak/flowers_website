
import styled from "styled-components";
import backgroundImage from '../assets/images/layout_image_1.png'

export const MainWrapper = styled.main`
margin: 1rem;
margin-top: 4rem;
height: 100%;
`;

export const BodyImage = styled.div`
position: absolute;
top: 0;
left: -20%;
background-image: url(${backgroundImage});
background-repeat: no-repeat;
background-size: 35%;
z-index: -1;
height: 500px;
width: 100%;
transform: rotate(9deg);
@media (min-width: ${({ theme }) => theme.responsive.desktop}) {
    top: 2%;
    left: -2%;
    background-position: top left ;
    background-size: 20%;
}
`;