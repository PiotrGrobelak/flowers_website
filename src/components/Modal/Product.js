import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby'
import Image from 'gatsby-image';
import { FlexColumn } from '../../assets/styles/Mixins';
import { graphql } from 'gatsby';

const StyledContainer = styled.div`
font-size: 2rem;
`;

const StyledWrapeer = styled.div`
${FlexColumn};
align-items: center;
justify-content: center;
`;

const StyledPrice = styled.span``;

const StyledName = styled.h3``;

const StyledButton = styled.button``;

const StyledParagraph = styled.p``;


const StyledImage = styled(Image)`
height: 100%;
width: 150px;
`;

const Product = ({ data }) => {
    console.log(data)
    const {
        productname,
        productimage,
        productprice,
        productdescription,
    } = data.datoCmsProduct;
    return (
        <>
            <StyledContainer>
                <StyledWrapeer>
                    <StyledName>{productname}</StyledName>
                    <StyledImage fluid={productimage.fluid} />
                    <StyledButton>Buy</StyledButton>
                </StyledWrapeer>
                <StyledParagraph>{productdescription}</StyledParagraph>
                <StyledPrice>{productprice}</StyledPrice>
                <Link
                    to="/offer"
                    state={{
                        noScroll: true
                    }}
                >
                    Close
                    </Link>
            </StyledContainer>

        </>
    )
}

export default Product;


export const query = graphql`
query querySingleProduct($id: String!)  {
    datoCmsProduct(id: {eq: $id}) {
        productname
        productprice
        productdescription
        productimage {
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
  }
`;