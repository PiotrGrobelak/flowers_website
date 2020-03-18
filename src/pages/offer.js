import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Image from 'gatsby-image'

const Main = styled.main`
	margin: 0 auto;
	margin-bottom: 8rem;
	max-width: 1400px;
`;


const StyledImage = styled(Image)`
height: 100%;
width: 100px;
`;

const OfferPage = ({ data }) => {
    const { allDatoCmsProduct: { nodes } } = data;
    return (
        <Main>
            <h1>Welcome to OfferPage</h1>
            <p>Work in progress</p>
            {nodes.map(({ id, productname, productimage, productprice }) => {
                return (
                    <div
                        key={id}
                    >
                        <h3>{productname}</h3>
                        <StyledImage
                            fluid={productimage.fluid}
                        />
                        <p>{productprice}</p>
                    </div>
                )
            })}
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
