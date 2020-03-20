import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby'
import Image from 'gatsby-image';
import { FlexColumn, FlexRow, Button, BoxShadowPink, secondaryFont } from '../../assets/styles/Mixins';
import { graphql, navigate } from 'gatsby';
import slugify from "slugify";
import { MdClose } from "react-icons/md"


const StyledModal = styled.div`
position: relative;
${FlexColumn};
height: 100%;
`;

const StyledContainer = styled.div`
margin: 4rem 2rem 1rem;
padding: 1rem;
border-radius: 25px;
${BoxShadowPink}
background-color: ${({ theme }) => theme.colors.primaryWhite};
overflow-y: scroll;
`;

const StyledWrapeer = styled.div`
position: relative;
${FlexColumn};
align-items: center;
justify-content: center;
`;

const StyledImage = styled(Image)`
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 140px;
`;

const StyledName = styled.h3`
position: absolute;
top: 0;
left: 5%;
margin: 0;
${secondaryFont};
font-size: 1.4rem;
color: ${({ theme }) => theme.colors.secondaryViolet};
`;
const StyledPrice = styled.span`
position: absolute;
bottom: 30%;
left: 10%;
padding: 0.5rem 0.5rem;
font-size: 1.4rem;
color: ${({ theme }) => theme.colors.primaryWhite};
border-radius: 25px;
background-color: ${({ theme }) => theme.colors.secondaryViolet};
box-shadow: 0px 2px 15px -1px rgba(0, 0, 0, 0.25);

`;

const StyledClose = styled(MdClose)`
position: absolute;
top: 0;
right: 5%;
font-size: 2rem;
color: ${({ theme }) => theme.colors.secondaryViolet};
`;

const StyledBuy = styled.button`
position: absolute;
right: 15%;
bottom: 10%;
${Button}
padding: 0.3rem 0.8rem;
font-size: 0.8rem;
`;

const StyledButtonsWrapper = styled.div`
${FlexRow};
justify-content: space-around;
`;


const StyledParagraph = styled.p`
margin: 0;
letter-spacing: 1px;
min-height: 320px;
`;

const StyledButton = styled.button`
${Button}
padding: 0.3rem 0.8rem;
margin: 0.2rem;
width: 100%;
font-size: 0.8rem;
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
        <StyledModal
            onClick={() => navigate(`/offer`, { state: { noScroll: true } })}
        >
            <StyledContainer
                onClick={e => e.stopPropagation()}
            >
                <StyledWrapeer>
                    <StyledImage fluid={productimage.fluid} />
                    <StyledName>{productname}</StyledName>
                    <StyledPrice>{productprice}</StyledPrice>
                    <StyledBuy>Buy</StyledBuy>
                    <Link
                        to="/offer"
                        state={{
                            noScroll: true,
                        }}
                    >
                        <StyledClose />
                    </Link>
                </StyledWrapeer>
                <StyledParagraph>{productdescription}</StyledParagraph>
                <StyledButtonsWrapper>
                    <StyledButton
                        onClick={(e => previousProduct(e))}
                    >
                        Previous
                    </StyledButton>
                    <StyledButton
                        onClick={(e => nextProduct(e))}
                    >
                        Next
                    </StyledButton>
                </StyledButtonsWrapper>
            </StyledContainer>
        </StyledModal>
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

