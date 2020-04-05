import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { BoxProperty } from 'src/theme/Mixins';
import secondLayoutImage from 'src/assets/images/layout_image_3.png';
import Heading from 'src/components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
 margin-top: 2rem;
 border-top: 2px solid ${({ theme }) => theme.colors.primaryViolet};
`;

const StyledList = styled.ul`
 display: grid;
 grid-template-columns: repeat(1, 300px);
 grid-gap: 2rem;
 margin-bottom: 4rem;
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  grid-template-columns: repeat(3, 300px);
  position: relative;
  ::before {
   content: '';
   position: absolute;
   top: 0;
   left: -20%;
   height: 100%;
   width: 100%;
   background-image: url(${secondLayoutImage});
   background-repeat: no-repeat;
   background-size: 80%;
   opacity: 0.4;
   z-index: -1;
  }
 }
`;

const StyledItem = styled.li`
 height: 250px;
 ${BoxProperty}
 overflow: hidden;
`;

const StyledImage = styled(Image)`
 height: 100%;
 width: 100%;
 object-fit: contain;
 border-radius: 20px;
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  transition: 0.5s ease-in-out;
  :hover {
   z-index: 10;
   transform: scale(1.1);
  }
 }
`;

const GalleryGrid = ({ nodes, handleToggleModal }) => {
 return (
  <>
   {nodes.map(({ title, galleryassets }, galleryIndex) => {
    return (
     <StyledWrapper key={galleryIndex}>
      <Heading secondary>{title}</Heading>
      <StyledList>
       {galleryassets.map(({ alt, fluid, url }, imageIndex) => {
        return (
         <StyledItem key={imageIndex}>
          <a
           href={url}
           onClick={e => {
            e.preventDefault();
            handleToggleModal(imageIndex, galleryIndex);
           }}
          >
           <StyledImage alt={alt} fluid={fluid} />
          </a>
         </StyledItem>
        );
       })}
      </StyledList>
     </StyledWrapper>
    );
   })}
  </>
 );
};

export default GalleryGrid;
