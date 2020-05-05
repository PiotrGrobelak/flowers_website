import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { FlexColumn } from 'src/theme/Mixins';
import Heading from 'src/components/atoms/Heading/Heading';
import Paragraph from 'src/components/atoms/Paragraph/Paragraph';
import Button from 'src/components/atoms/Button/Button';
import GalleryContent from 'src/components/organisms/GalleryContent/GalleryContent';
import backgroundImage from 'src/assets/images/layout_image_2.png';
import secondBackgroundImage from 'src/assets/images/layout_image_3.png';

const Main = styled.main`
 margin: 0 auto;
 margin-bottom: 8rem;
 max-width: 1200px;
 ${FlexColumn};
 justify-content: center;
 align-items: center;
 color: ${({ theme }) => theme.colors.thirdaryViolet};
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  position: relative;
  overflow: hidden;
  ::before {
   content: '';
   position: absolute;
   top: 40%;
   right: -50%;
   height: 100%;
   width: 100%;
   background-image: url(${secondBackgroundImage});
   background-repeat: no-repeat;
   background-size: 50%;
   opacity: 0.4;
   z-index: -1;
  }
 }
`;

const StyledHeader = styled.header`
 margin: 4rem 2rem;
 text-align: center;
 @media (min-width: ${({ theme }) => theme.responsive.sm}) {
  margin-top: 14rem;
 }
 @media (min-width: ${({ theme }) => theme.responsive.md}) {
  /* margin-left: 14rem; */

  text-align: center;
 }
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  margin: 4rem 2rem;
  padding-left: 2rem;
  text-align: left;
 }
`;

const StyledParagraph = styled(Paragraph)`
 @media (min-width: ${({ theme }) => theme.responsive.md}) {
  padding-left: 16rem;
  max-width: 80%;
 }
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  padding-left: 0;
 }
`;

const AdditionalImage = styled.div`
 position: absolute;
 bottom: 2%;
 left: -5%;
 height: 120px;
 width: 120px;
 transform: rotate(160deg);
 background-image: url(${backgroundImage});
 background-repeat: no-repeat;
 background-size: 100%;
 @media (min-width: ${({ theme }) => theme.responsive.sm}) {
  left: -3%;
 }
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  left: -2%;
  bottom: 2%;
  height: 240px;
  width: 240px;
 }
`;

const GalleryPage = ({ data }) => {
 const {
  content,
  gallery: { nodes },
 } = data;
 return (
  <>
   <Main>
    <StyledHeader>
     <Heading>{content.title}</Heading>
     <StyledParagraph medium bold>
      {content.description}
     </StyledParagraph>
    </StyledHeader>
    <GalleryContent nodes={nodes} />
    <Button as={Link} to="/contact">
     Contact Us
    </Button>
   </Main>
   <AdditionalImage />
  </>
 );
};

GalleryPage.propTypes = {
 data: PropTypes.shape({
  content: PropTypes.shape({
   title: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
  }),
  gallery: PropTypes.shape({
   nodes: PropTypes.arrayOf(
    PropTypes.shape({
     title: PropTypes.string.isRequired,
     galleryassets: PropTypes.arrayOf(
      PropTypes.shape({
       alt: PropTypes.string.isRequired,
       url: PropTypes.string.isRequired,
       basename: PropTypes.string.isRequired,
       fluid: PropTypes.object.isRequired,
      }),
     ),
    }),
   ),
  }),
 }),
};

export default GalleryPage;

export const query = graphql`
 {
  content: datoCmsGallery {
   title
   description
  }
  gallery: allDatoCmsGallerycontainer {
   nodes {
    title
    galleryassets {
     alt
     url
     basename
     fluid(maxWidth: 400, maxHeight: 300, imgixParams: { q: 100 }) {
      ...GatsbyDatoCmsFluid_tracedSVG
     }
    }
   }
  }
 }
`;
