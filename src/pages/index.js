import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Image from 'gatsby-image';
import MainHeader from 'src/components/molecules/MainHeader/MainHeader';
import MainPropositions from 'src/components/molecules/MainPropositions/MainPropositions';
import backgroundImage from 'src/assets/images/layout_image_1.png';

const Main = styled.main`
 margin: 0 auto;
 margin-bottom: 8rem;
 max-width: 1200px;
`;

const HeroImage = styled(Image)`
 position: absolute !important;
 top: 5%;
 right: 0;
 width: 100%;
 height: 40%;
 object-fit: contain;
 opacity: 0.6;
 z-index: -1;
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  top: 0;
  right: -55%;
  width: 100%;
  opacity: 0.7;
  height: 100%;
  object-fit: cover;
 }
 @media (min-width: ${({ theme }) => theme.responsive.xl}) {
  right: -20%;
  width: 60%;
 }
`;

const AdditionalImage = styled.div`
 position: absolute;
 bottom: 2%;
 left: -6%;
 height: 120px;
 width: 120px;
 transform: rotate(40deg);
 background-image: url(${backgroundImage});
 background-repeat: no-repeat;
 background-size: 100%;
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  left: -2%;
  bottom: 3%;
  height: 230px;
  width: 230px;
  transform: rotate(-20deg);
 }
`;

const IndexPage = ({ data }) => {
 const {
  allDatoCmsMainpage: { nodes },
 } = data;
 return (
  <>
   <Main>
    {nodes.map(
     (
      { maintitle, mainheading, mainparagraph, mainimage, mainpropose },
      index,
     ) => {
      return (
       <div key={index}>
        <MainHeader
         maintitle={maintitle}
         mainheading={mainheading}
         mainparagraph={mainparagraph}
        />
        <MainPropositions mainpropose={mainpropose} />
        <HeroImage fluid={mainimage.fluid} alt={mainimage.alt} />
       </div>
      );
     },
    )}
    <AdditionalImage />
   </Main>
  </>
 );
};

IndexPage.propTypes = {
 data: PropTypes.shape({
  allDatoCmsMainpage: PropTypes.shape({
   nodes: PropTypes.arrayOf(
    PropTypes.shape({
     maintitle: PropTypes.string.isRequired,
     mainheading: PropTypes.string.isRequired,
     mainparagraph: PropTypes.string.isRequired,
     mainimage: PropTypes.shape({
      alt: PropTypes.string.isRequired,
      fluid: PropTypes.object.isRequired,
     }).isRequired,
     mainpropose: PropTypes.arrayOf(
      PropTypes.shape({
       heading: PropTypes.string.isRequired,
       description: PropTypes.string.isRequired,
       proposeimage: PropTypes.shape({
        alt: PropTypes.string.isRequired,
        fluid: PropTypes.object.isRequired,
       }).isRequired,
      }).isRequired,
     ),
    }).isRequired,
   ),
  }),
 }),
};

export default IndexPage;

export const query = graphql`
 {
  allDatoCmsMainpage {
   nodes {
    maintitle
    mainheading
    mainparagraph
    mainimage {
     title
     alt
     fluid(maxHeight: 800, maxWidth: 800) {
      ...GatsbyDatoCmsFluid_tracedSVG
     }
    }
    mainpropose {
     heading
     description
     proposeimage {
      title
      alt
      fluid(maxWidth: 200, maxHeight: 200) {
       ...GatsbyDatoCmsFluid_tracedSVG
      }
     }
    }
   }
  }
 }
`;
