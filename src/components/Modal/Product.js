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

const Product = ({ data, location }) => {
    // console.log(data)
    // const dataProducts = useStaticQuery(queryProducts)
    // console.log(data)
    // console.log(location)
    // console.log(products)
    const products = data.allDatoCmsProduct.nodes;
    console.log(products)
    const findCurrentIndex = () => {
        let index;
        index = products.findIndex(product => {
            return product.originalId === data.datoCmsProduct.originalId
        })
        return index
    }
    // const some = findCurrentIndex()
    // console.log(some)
    // console.log(products.length)
    const nextProduct = (e) => {
        if (e) {
            e.stopPropagation()
        }
        const currentIndex = findCurrentIndex()
        if (currentIndex || currentIndex === 0) {
            let nextPost
            // Wrap around if at end.
            if (currentIndex + 1 === products.length) {
                nextPost = products[0]
            } else {
                nextPost = products[currentIndex + 1]
            }
            const slugifiedTitle = slugify(nextPost.productname, { lower: true });
            navigate(`/offer/${slugifiedTitle}/`, { state: { modal: true } })
            console.log(slugifiedTitle)
        }
    }

    const previousProduct = (e) => {
        if (e) {
            e.stopPropagation()
        }
        const currentIndex = findCurrentIndex()
        if (currentIndex || currentIndex === 0) {
            let previousPost
            // Wrap around if at start.
            if (currentIndex === 0) {
                previousPost = products.slice(-1)[0]
            } else {
                previousPost = products[currentIndex - 1]
            }
            const slugifiedTitle = slugify(previousPost.productname, { lower: true });
            navigate(`/offer/${slugifiedTitle}/`, { state: { modal: true } })
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

