import styled from 'styled-components';
import backgroundImage from '../assets/images/layout_image_1.png';

export const MainWrapper = styled.main`
  margin: 1rem;
  margin-bottom: 0;
  margin-top: 4rem;
  height: 100%;
`;

export const BodyImage = styled.div`
  position: absolute;
  top: 0;
  left: -20%;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: 40%;
  z-index: -1;
  height: 300px;
  width: 100%;
  transform: rotate(9deg);
  @media (min-width: ${({ theme }) => theme.responsive.lg}) {
    height: 500px;
    top: 2%;
    left: -5%;
    background-position: top left;
    background-size: 18%;
  }
  @media (min-width: ${({ theme }) => theme.responsive.xl}) {
    background-size: 20%;
  }
`;
