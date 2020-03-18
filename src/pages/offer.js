import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image'
import slugify from 'slugify';
import { FlexRow, FlexColumn } from "../assets/styles/Mixins"
import "../assets/styles/modal.css";


const Main = styled.main`
	margin: 0 auto;
	margin-bottom: 8rem;
	max-width: 1400px;
    height: 100vh;
    ${FlexColumn};
    /* align-items: center; */
    justify-content: center;
`;

const ProductList = styled.div`
${FlexRow};
justify-content: space-around;
height: 500px;
width: 500px;
`;

const Product = styled.li`
${FlexColumn}
align-items: center;
`;


const StyledImage = styled(Image)`
height: 100%;
width: 150px;
`;

const OfferPage = ({ data, location }) => {
    const { allDatoCmsProduct: { nodes } } = data;
    return (

        <Main>
            <h1>Welcome to OfferPage</h1>
            <p>Work in progress</p>
            <ProductList>
                {nodes.map(({ id, productname, productimage, productprice }) => {
                    const slugifiedTitle = slugify(productname, { lower: true });
                    return (
                        <Product
                            key={id}
                        >
                            <h3>{productname}</h3>
                            <StyledImage
                                fluid={productimage.fluid}
                            />
                            <p>{productprice}</p>
                            <Link
                                to={`/offer/${slugifiedTitle}`}
                                state={{
                                    modal: true,
                                    noScroll: true
                                }}
                            >
                                More
                                        </Link>
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
