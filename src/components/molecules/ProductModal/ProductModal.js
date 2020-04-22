import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import { FlexColumn, FlexRow } from 'src/theme/Mixins';
import Heading from 'src/components/atoms/Heading/Heading';
import Paragraph from 'src/components/atoms/Paragraph/Paragraph';
import Cost from 'src/components/atoms/Cost/Cost';
import Button from 'src/components/atoms/Button/Button';
import ButtonIcon from 'src/components/atoms/ButtonIcon/ButtonIcon';

const StyledSection = styled.section`
 position: relative;
 ${FlexColumn};
 align-items: center;
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  grid-column: 1/ 5;
  grid-row: 1/ 1;
 }
`;

const StyledImage = styled(Image)`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 width: 140px;
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  width: 120px;
 }
 @media (min-width: ${({ theme }) => theme.responsive.xl}) {
  width: 200px;
 }
`;

const StyledHeading = styled(Heading)`
 position: absolute;
 top: 0;
 left: 5%;
 margin: 0;
`;
const StyledCost = styled(Cost)`
 position: absolute;
 bottom: 30%;
 left: 10%;
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  padding: 1rem;
  font-size: ${({ theme }) => theme.fontSizes.md};
 }
`;

const StyledHandleClose = styled(ButtonIcon)`
 position: absolute;
 top: 0;
 right: 5%;
 color: ${({ theme }) => theme.colors.secondaryViolet};
`;

const StyledHanldeBuy = styled(Button)`
 position: absolute;
 right: 5%;
 bottom: 10%;
 padding: 0.3rem 0.8rem;
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  width: 100px;
  right: 10%;
 }
`;

const StyledInnerWrapper = styled.div`
 ${FlexRow};
 justify-content: space-around;
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  grid-column: 3/ 5;
  grid-row: 2/ 2;
  align-self: flex-end;
 }
`;

const StyledParagraph = styled(Paragraph)`
 margin: 0;
 padding: 1rem;
 min-height: 220px;
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  min-height: 200px;
  grid-column: 1 /3;
  grid-row: 2/2;
  align-self: center;
 }
`;

const ProductModal = ({ data, previousProduct, nextProduct }) => {
 const { productname, productimage, productprice, productdescription } = data;
 return (
  <>
   <StyledSection>
    <StyledImage fluid={productimage.fluid} />
    <StyledHeading as="h3" secondary normal>
     {productname}
    </StyledHeading>
    <StyledCost>{productprice}</StyledCost>
    <StyledHanldeBuy>Buy</StyledHanldeBuy>
    <StyledHandleClose
     as={Link}
     to="/offer"
     state={{
      noScroll: true,
     }}
    >
     <MdClose size={'2.4rem'} />
    </StyledHandleClose>
   </StyledSection>
   <StyledParagraph>{productdescription}</StyledParagraph>
   <StyledInnerWrapper>
    <Button onClick={e => previousProduct(e)}>Previous</Button>
    <Button onClick={e => nextProduct(e)}>Next</Button>
   </StyledInnerWrapper>
  </>
 );
};

ProductModal.propTypes = {
 previousProduct: PropTypes.func.isRequired,
 nextProduct: PropTypes.func.isRequired,
 data: PropTypes.shape({
  productname: PropTypes.string.isRequired,
  productimage: PropTypes.object.isRequired,
  productprice: PropTypes.string.isRequired,
  productdescription: PropTypes.string.isRequired,
 }),
};

export default ProductModal;
