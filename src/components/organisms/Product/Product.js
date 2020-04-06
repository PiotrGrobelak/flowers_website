import React from 'react';
import styled from 'styled-components';
import { graphql, navigate } from 'gatsby';
import PropTypes from 'prop-types';
import slugify from 'slugify';
import './modal.css';
import { FlexColumn, BoxShadow } from 'src/theme/Mixins';
import ProductModal from 'src/components/molecules/ProductModal/ProductModal';

const StyledModal = styled.div`
 position: relative;
 ${FlexColumn};
 height: 100vh;
`;

const StyledContainer = styled.div`
position: absolute;
top: 10%;
left: 6%;
right: 6%;
bottom: 5%;
padding: 1rem;
border-radius: 25px;
${BoxShadow}
background-color: ${({ theme }) => theme.colors.primaryWhite};
overflow-y: scroll;
@media (min-width: ${({ theme }) => theme.responsive.lg}) {
    top: 20%;
    left: 20%;
    right:20%;
    padding: 1.5rem;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr) repeat(2, 150px);
    grid-template-rows: repeat(2, 1fr);
}
@media (min-width: ${({ theme }) => theme.responsive.xl}) {
    top: 15%;
    left: 30%;
    right: 30%;
    bottom: 10%;
    padding: 2rem;
}
`;

const Product = ({ data }) => {
 const products = data.allDatoCmsProduct.nodes;

 const findCurrentIndex = () => {
  let index;
  index = products.findIndex(product => {
   return product.originalId === data.datoCmsProduct.originalId;
  });
  return index;
 };

 const nextProduct = e => {
  if (e) {
   e.stopPropagation();
  }
  const currentIndex = findCurrentIndex();
  if (currentIndex || currentIndex === 0) {
   let nextProduct;
   if (currentIndex + 1 === products.length) {
    nextProduct = products[0];
   } else {
    nextProduct = products[currentIndex + 1];
   }
   const slugifiedPath = slugify(nextProduct.productname, { lower: true });
   navigate(`/offer/${slugifiedPath}/`, { state: { modal: true } });
  }
 };

 const previousProduct = e => {
  if (e) {
   e.stopPropagation();
  }
  const currentIndex = findCurrentIndex();
  if (currentIndex || currentIndex === 0) {
   let previousProduct;
   if (currentIndex === 0) {
    previousProduct = products.slice(-1)[0];
   } else {
    previousProduct = products[currentIndex - 1];
   }
   const slugifiedPath = slugify(previousProduct.productname, {
    lower: true,
   });
   navigate(`/offer/${slugifiedPath}/`, { state: { modal: true } });
  }
 };
 return (
  <StyledModal onClick={() => navigate(`/offer`, { state: { noScroll: true } })}>
   <StyledContainer onClick={e => e.stopPropagation()}>
    <ProductModal
     data={data.datoCmsProduct}
     previousProduct={previousProduct}
     nextProduct={nextProduct}
    />
   </StyledContainer>
  </StyledModal>
 );
};

export default Product;

Product.propTypes = {
 data: PropTypes.shape({
  datoCmsProduct: PropTypes.shape({
   productname: PropTypes.string.isRequired,
   productimage: PropTypes.shape({
    fluid: PropTypes.object.isRequired,
   }),
   productprice: PropTypes.string.isRequired,
   productdescription: PropTypes.string.isRequired,
  }),
  allDatoCmsProduct: PropTypes.shape({
   nodes: PropTypes.arrayOf(
    PropTypes.shape({
     originalId: PropTypes.string.isRequired,
     productname: PropTypes.string.isRequired,
    }),
   ),
  }),
 }),
};

export const query = graphql`
 query querySingleProduct($id: String!) {
  datoCmsProduct(id: { eq: $id }) {
   productname
   productprice
   productdescription
   originalId
   productimage {
    fluid(maxWidth: 200, maxHeight: 200) {
     ...GatsbyDatoCmsFluid_tracedSVG
    }
   }
  }
  allDatoCmsProduct {
   nodes {
    originalId
    productname
   }
  }
 }
`;
