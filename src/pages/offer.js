import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image'
import slugify from 'slugify';
import { FlexColumn, BoxShadow, SecondaryBoxShadow, SecondaryFont, Button, Price } from "../assets/styles/Mixins"


const Main = styled.main`
	margin: 0 auto ;
	max-width: 1200px;
    /* height: 100%; */
`;

const StyledHeader = styled.header`
    margin-top: 5rem;
    padding: 1rem;
    text-align: right;
    color: ${({ theme }) => theme.colors.secondaryViolet};
h1{
    font-size: 2.6rem;
    margin-bottom: 3rem;
}
p{
    font-size: 1.2rem;
}
`;

const ProductList = styled.div`
${FlexColumn};
justify-content: center;
@media (min-width: ${({ theme }) => theme.responsive.lg}) {
display: grid;
grid-template-columns: repeat(4, 250px);
grid-gap: 0.2rem;
margin: 3rem 0;
padding: 4rem 0;
}
`;

const Product = styled.li`
position: relative;
${FlexColumn};
align-items: center;
margin: 1rem;
padding:  1rem;
border-radius: 25px;
${BoxShadow};

background-color: ${({ theme }) => theme.colors.primaryWhite};
@media (min-width: ${({ theme }) => theme.responsive.lg}) {
    margin: 0;
    /* ${BoxShadow}; */
    box-shadow: none;
    width: 100%;
    border: 1px solid transparent;
    transition: border .5s ease-in-out, box-shadow 1s ease-in-out;
    :hover{
    border: 1px solid ${({ theme }) => theme.colors.secondaryViolet};
    ${SecondaryBoxShadow};
    }

}
h3{
    position:absolute;
    top: 0;
    left: 10%;
    ${SecondaryFont};
    font-size: 1.6rem;
}
span{
    position:absolute;
    top: 10%;
    right: 10%;
    ${Price};
}
`;

const StyledImage = styled(Image)`
position:absolute;
bottom: 0;
left: 0;
height: 100%;
width: 150px;
@media (min-width: ${({ theme }) => theme.responsive.lg}) {
width: 120px;
}
`;

const StyledButton = styled(Link)`
position:absolute;
bottom: 5%;
left: calc(100 / 25);
${Button};
`;


const OfferPage = ({ data }) => {
    const { allDatoCmsProduct: { nodes } } = data;

    return (
        <Main>
            <StyledHeader>
                <h1>Our Offer</h1>
                <p>Perfect bouquets for every occasion created by best florists in Your city.</p>
            </StyledHeader>
            <ProductList>
                {nodes.map(({ id, productname, productimage, productprice }) => {
                    const slugifiedTitle = slugify(productname, { lower: true });
                    return (
                        <Product
                            key={id}
                        >
                            <StyledImage
                                fluid={productimage.fluid}
                            />
                            <h3>{productname}</h3>
                            <span>{productprice}</span>
                            <StyledButton
                                to={`/offer/${slugifiedTitle}`}
                                state={{
                                    modal: true,
                                }}
                            >
                                More
                            </StyledButton>

                        </Product>
                    )
                })}
            </ProductList>
        </Main>
    )
};


export const query = graphql`
	{
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
