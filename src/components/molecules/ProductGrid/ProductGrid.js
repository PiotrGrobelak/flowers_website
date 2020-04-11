import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import slugify from 'slugify';
import { FlexColumn, BoxShadow, SecondaryBoxShadow } from 'src/theme/Mixins';
import Heading from 'src/components/atoms/Heading/Heading';
import Cost from 'src/components/atoms/Cost/Cost';
import Button from 'src/components/atoms/Button/Button';

const StyledList = styled.div`
 ${FlexColumn};
 justify-content: center;
 background-color: ${({ theme }) => theme.colors.secondaryWhite};
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  display: grid;
  grid-template-columns: repeat(3, 280px);
  grid-gap: 0.2rem;
  margin: 3rem 0 8rem;
  padding: 1rem 0;
  padding-left: 1rem;
  width: 90%;
  border-top: 3px solid ${({ theme }) => theme.colors.secondaryViolet};
  border-bottom: 3px solid ${({ theme }) => theme.colors.secondaryViolet};
  border-left: 3px solid ${({ theme }) => theme.colors.secondaryViolet};
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  box-shadow: -12px -8px 18px -6px rgba(0, 0, 0, 0.35);
 }
 @media (min-width: ${({ theme }) => theme.responsive.xl}) {
  padding-top: 4rem;
  padding-bottom: 4rem;
 }
`;

const StyledItem = styled.li`
 position: relative;
 ${FlexColumn};
 align-items: center;
 margin: 1rem 2rem;
 padding: 1rem;
 border-radius: 25px;
 ${BoxShadow};
 background-color: ${({ theme }) => theme.colors.primaryWhite};
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  position: relative;
  margin-bottom: 1rem;
  box-shadow: none;
  width: 100%;
  border: 1px solid transparent;
  transition: border 0.5s ease-in-out, box-shadow 1s ease-in-out;
  :hover {
   border: 1px solid ${({ theme }) => theme.colors.secondaryViolet};
   ${SecondaryBoxShadow};
  }
  ::before {
   content: '';
   position: absolute;
   top: -1px;
   left: 50%;
   margin: 0 auto;
   width: 80%;
   height: 100%;
   transform: translateX(-50%);
   border-top: 1px solid ${({ theme }) => theme.colors.secondaryViolet};
  }
 }
`;

const StyledHeading = styled(Heading)`
 position: absolute;
 top: 0;
 left: 10%;
`;

const StyledImage = styled(Image)`
 position: absolute;
 bottom: 0;
 left: 0;
 height: 100%;
 width: 150px;
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  width: 120px;
 }
`;

const StyledCost = styled(Cost)`
 position: absolute;
 top: 10%;
 right: 10%;
`;

const StyledButton = styled(Button)`
 position: absolute;
 bottom: 5%;
 left: calc(100 / 25);
`;

const ProductGrid = ({ nodes }) => (
 <StyledList>
  {nodes.map(({ id, productname, productimage, productprice }) => {
   const slugifiedName = slugify(productname, { lower: true });
   return (
    <StyledItem key={id}>
     <StyledImage fluid={productimage.fluid} alt={productname} />
     <StyledHeading secondary small normal>
      {productname}
     </StyledHeading>
     <StyledCost>{productprice}</StyledCost>
     <StyledButton
      as={Link}
      to={`/offer/${slugifiedName}`}
      state={{
       modal: true,
      }}
     >
      More
     </StyledButton>
    </StyledItem>
   );
  })}
 </StyledList>
);

export default ProductGrid;
