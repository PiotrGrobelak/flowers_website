import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby'
import Image from 'gatsby-image';
import { FlexColumn } from '../../assets/styles/Mixins';
import { graphql, navigate } from 'gatsby';
import slugify from "slugify"


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
    const products = data.allDatoCmsProduct.nodes;

    const findCurrentIndex = () => {
        let index;
        index = products.findIndex(product => {
            return product.originalId === data.datoCmsProduct.originalId
        })
        return index
    }

    const nextProduct = (e) => {
        if (e) {
            e.stopPropagation()
        }
        const currentIndex = findCurrentIndex()
        if (currentIndex || currentIndex === 0) {
            let nextProduct
            if (currentIndex + 1 === products.length) {
                nextProduct = products[0]
            } else {
                nextProduct = products[currentIndex + 1]
            }
            const slugifiedPath = slugify(nextProduct.productname, { lower: true });
            navigate(`/offer/${slugifiedPath}/`, { state: { modal: true } })
        }
    }

    const previousProduct = (e) => {
        if (e) {
            e.stopPropagation()
        }
        const currentIndex = findCurrentIndex()
        if (currentIndex || currentIndex === 0) {
            let previousProduct
            if (currentIndex === 0) {
                previousProduct = products.slice(-1)[0]
            } else {
                previousProduct = products[currentIndex - 1]
            }
            const slugifiedPath = slugify(previousProduct.productname, { lower: true });
            navigate(`/offer/${slugifiedPath}/`, { state: { modal: true } })
        }
    }
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
            <StyledButton
                onClick={(e => nextProduct(e))}
            >
                Next
            </StyledButton>
            <StyledButton
                onClick={(e => previousProduct(e))}
            >
                Previous
            </StyledButton>
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

