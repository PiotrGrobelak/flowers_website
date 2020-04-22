import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Heading from 'src/components/atoms/Heading/Heading';
import Paragraph from 'src/components/atoms/Paragraph/Paragraph';
import ProductGrid from 'src/components/molecules/ProductGrid/ProductGrid';
import Newsletter from 'src/components/molecules/Newsletter/Newsletter';
import firstLayoutImage from 'src/assets/images/layout_image_3.png';

const Main = styled.main`
 margin: 0 auto;
 max-width: 1200px;
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  ::before {
   content: '';
   position: absolute;
   top: 40%;
   left: -25%;
   height: 30%;
   width: 60%;
   background-image: url(${firstLayoutImage});
   background-repeat: no-repeat;
   background-size: 60%;
   background-position: bottom center;
   transform: rotate(-90deg);
   z-index: -1;
  }
  ::after {
   content: '';
   position: absolute;
   top: 0;
   right: -55%;
   height: 100%;
   width: 100%;
   background-image: url(${({ image }) => image});
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center bottom;
   opacity: 0.8;
   z-index: -1;
  }
 }
`;

const StyledHeader = styled.header`
 margin-top: 5rem;
 padding: 1rem;
 text-align: right;
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  width: 80%;
 }
`;

const StyledParagraph = styled(Paragraph)`
 padding: 1rem;
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  margin-left: 20rem;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.secondaryWhite};
 }
`;

const OfferPage = ({ data }) => {
 const {
  allDatoCmsProduct: { nodes },
  file,
 } = data;
 return (
  <Main image={file.childImageSharp.fluid.src}>
   <StyledHeader>
    <Heading>Our Offer</Heading>
    <StyledParagraph medium bold>
     Perfect bouquets for every occasion created by best florists in Your city.
    </StyledParagraph>
   </StyledHeader>
   <ProductGrid nodes={nodes} />
   <Newsletter />
  </Main>
 );
};

OfferPage.propTypes = {
 data: PropTypes.shape({
  file: PropTypes.object.isRequired,
  allDatoCmsProduct: PropTypes.shape({
   nodes: PropTypes.arrayOf(
    PropTypes.shape({
     id: PropTypes.string.isRequired,
     productname: PropTypes.string.isRequired,
     productprice: PropTypes.string.isRequired,
     productimage: PropTypes.shape({
      fluid: PropTypes.object.isRequired,
     }),
    }),
   ),
  }),
 }),
};

export const query = graphql`
 {
  file(name: { eq: "layout_image_4" }) {
   childImageSharp {
    fluid(maxWidth: 2000, maxHeight: 1200, quality: 100) {
     src
    }
   }
  }
  allDatoCmsProduct {
   nodes {
    id
    productname
    productprice
    productimage {
     fluid(maxWidth: 200, maxHeight: 400) {
      ...GatsbyDatoCmsFluid_tracedSVG
     }
    }
   }
  }
 }
`;

export default OfferPage;
