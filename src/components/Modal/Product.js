import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby'
import Image from 'gatsby-image';
import { FlexColumn, FlexRow, Button, BoxShadow, SecondaryFont } from '../../assets/styles/Mixins';
import { graphql, navigate } from 'gatsby';
import PropTypes from 'prop-types';
import slugify from "slugify";
import { MdClose } from "react-icons/md"
import "./modal.css";


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

const StyledWrapeer = styled.div`
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

const StyledName = styled.h3`
position: absolute;
top: 0;
left: 5%;
margin: 0;
${SecondaryFont};
font-size: 1.4rem;
@media (min-width: ${({ theme }) => theme.responsive.lg}) {
    font-size: 1.6rem;
}
@media (min-width: ${({ theme }) => theme.responsive.xl}) {
    font-size: 2rem;
}
`;
const StyledPrice = styled.span`
position: absolute;
bottom: 30%;
left: 10%;
padding: 0.5rem;
width: 64px;
font-size: 1.4rem;
color: ${({ theme }) => theme.colors.primaryWhite};
text-align: center;
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
@media (min-width: ${({ theme }) => theme.responsive.lg}) {
    font-size: 2.2rem;
}
`;

const StyledBuy = styled.button`
position: absolute;
right: 15%;
bottom: 10%;
${Button}
padding: 0.3rem 0.8rem;
font-size: 0.8rem;
@media (min-width: ${({ theme }) => theme.responsive.lg}) {
width: 100px;
right: 10%;
}
`;

const StyledButtonsWrapper = styled.div`
${FlexRow};
justify-content: space-around;
@media (min-width: ${({ theme }) => theme.responsive.lg}) {
    grid-column: 3/ 5;
    grid-row: 2/ 2;
    align-self: flex-end;
}
`;

const StyledButton = styled.button`
${Button}
margin: 0.2rem;
font-size: 0.8rem;
`;


const StyledParagraph = styled.p`
margin: 0;
min-height: 320px;
color: ${({ theme }) => theme.colors.thirdaryViolet};
letter-spacing: 1px;
@media (min-width: ${({ theme }) => theme.responsive.lg}) {
    min-height: 200px;
    grid-column: 1 /3;
    grid-row: 2/2;
    align-self: center;
}
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
            nodes: PropTypes.arrayOf(PropTypes.shape({
                originalId: PropTypes.string.isRequired,
                productname: PropTypes.string.isRequired,
            }))
        })
    })
}

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

