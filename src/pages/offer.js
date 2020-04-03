import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import slugify from 'slugify';
import {
  FlexColumn,
  BoxShadow,
  SecondaryBoxShadow,
  SecondaryFont,
  Price,
} from '../theme/Mixins';
import { Button } from '../components/Button/Button';
import PropTypes from 'prop-types';
import firstLayoutImage from '../assets/images/layout_image_4.png';
import secondLayoutImage from '../assets/images/layout_image_3.png';

const Main = styled.main`
  margin: 0 auto;
  max-width: 1200px;
  @media (min-width: ${({ theme }) => theme.responsive.lg}) {
    ::before {
      content: '';
      position: absolute;
      top: 40%;
      left: -25%;
      height: 30%;
      width: 60%;
      background-image: url(${secondLayoutImage});
      background-repeat: no-repeat;
      background-size: 60%;
      background-position: bottom center;
      transform: rotate(-90deg);
      z-index: -1;
    }
    ::after {
      content: '';
      position: absolute;
      top: 0;
      right: -55%;
      height: 100%;
      width: 100%;
      background-image: url(${firstLayoutImage});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center bottom;
      opacity: 0.8;
      z-index: -1;
    }
  }
`;

const StyledHeader = styled.header`
  margin-top: 5rem;
  padding: 1rem;
  text-align: right;
  @media (min-width: ${({ theme }) => theme.responsive.lg}) {
    width: 80%;
  }
  h1 {
    margin-bottom: 3rem;
    font-size: 2.6rem;
    ${SecondaryFont};
    color: ${({ theme }) => theme.colors.secondaryViolet};
  }
  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.thirdaryViolet};
    letter-spacing: 1px;
    font-weight: 600;
    @media (min-width: ${({ theme }) => theme.responsive.lg}) {
      margin-left: 20rem;
      padding: 1rem;
      border-radius: 25px;
      background-color: ${({ theme }) => theme.colors.secondaryWhite};
    }
  }
`;

const ProductList = styled.div`
  ${FlexColumn};
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondaryWhite};
  @media (min-width: ${({ theme }) => theme.responsive.lg}) {
    display: grid;
    grid-template-columns: repeat(3, 250px);
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

const Product = styled.li`
  position: relative;
  ${FlexColumn};
  align-items: center;
  margin: 1rem;
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
  h3 {
    position: absolute;
    top: 0;
    left: 10%;
    ${SecondaryFont};
    font-size: 1.6rem;
  }
  span {
    position: absolute;
    top: 10%;
    right: 10%;
    ${Price};
  }
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

const StyledButton = styled(Link)`
  position: absolute;
  bottom: 5%;
  left: calc(100 / 25);
  ${Button};
`;

const OfferPage = ({ data }) => {
  const {
    allDatoCmsProduct: { nodes },
  } = data;

  return (
    <Main>
      <StyledHeader>
        <h1>Our Offer</h1>
        <p>
          Perfect bouquets for every occasion created by best florists in Your
          city.
        </p>
      </StyledHeader>
      <ProductList>
        {nodes.map(({ id, productname, productimage, productprice }) => {
          const slugifiedTitle = slugify(productname, { lower: true });
          return (
            <Product key={id}>
              <StyledImage fluid={productimage.fluid} />
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
          );
        })}
      </ProductList>
    </Main>
  );
};

OfferPage.propTypes = {
  data: PropTypes.shape({
    allDatoCmsProduct: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          productname: PropTypes.string.isRequired,
          productprice: PropTypes.string.isRequired,
          productimage: PropTypes.shape({
            fluid: PropTypes.object.isRequired,
          }),
        }),
      ),
    }),
  }),
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
