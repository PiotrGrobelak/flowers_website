import React from "react"
import { graphql } from "gatsby"
import PropTypes from 'prop-types'
import SEO from "../components/seo";
import styled from "styled-components"
import { Link } from 'gatsby'
import { Button, FlexColumn, BoxShadowPink, secondaryFont } from '../assets/styles/Mixins';
import backgroundImage from "../assets/images/layout_image_1.png"
import Image from "gatsby-image";




const Main = styled.main`
margin: 0 auto;
margin-bottom: 8rem;
max-width: 1400px;
`;

const Header = styled.header`
  ${FlexColumn}
  margin-top: 7rem;
  max-width: 90%;
  color: ${({ theme }) => theme.colors.thirdaryViolet};
  text-align: right;
  @media (min-width: ${({ theme }) => theme.responsive.desktop}) {
  width: 70%;
}
`;

const Title = styled.h1`
  font-size: 2.6rem;
  ${secondaryFont};
  letter-spacing: 10px;
  @media (min-width: ${({ theme }) => theme.responsive.desktop}) {
  font-size: 4rem;
}
`;

const Heading = styled.p`
margin-left: 2rem;
font-size: 1.2rem;
font-weight: 600;
@media (min-width: ${({ theme }) => theme.responsive.desktop}) {
  font-size: 1.4rem;
}
`;

const Paragraph = styled.p`
margin: 2rem -1rem 2rem 1rem;
font-weight: 600;
letter-spacing: 1px;
text-align: center;
@media (min-width: ${({ theme }) => theme.responsive.desktop}) {
  width: 90%;
  font-size: 1.2rem;
  text-align: right;
}
`;

const GalleryLink = styled(Link)`
  ${Button}
  align-self: flex-end;
  margin-top: 2rem;
  @media (min-width: ${({ theme }) => theme.responsive.desktop}) {
  margin-right: 2rem;
}
`;

const HeroImage = styled(Image)`
position: absolute !important;
top: 0;
right: 0;
width: 100%;
height: 50%;
object-fit: cover;
opacity: 0.2;
z-index: -1;
@media (min-width: ${({ theme }) => theme.responsive.desktop}) {
  right: -20%;
  width: 60%;
  opacity: 0.7;
  height: 100%;
  object-fit: cover;
}
`;

const AdditionalImage = styled.div`
position: absolute;
bottom: 5%;
right: -6%;
height: 120px;
width: 120px;
transform: rotate(-120deg);
background-image: url(${backgroundImage});
background-repeat: no-repeat;
background-size: 100%;
@media (min-width: ${({ theme }) => theme.responsive.desktop}) {
  left: -2%;
  bottom: 3%;
  height: 240px;
  width: 240px;
  transform: rotate(-20deg);
}
`;

const ProposeWrapper = styled.ul`
${FlexColumn}
color: ${({ theme }) => theme.colors.secondaryViolet};
letter-spacing: 1px;
@media (min-width: ${({ theme }) => theme.responsive.desktop}) {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 500px);
  grid-template-rows:  1fr;
  grid-gap: 4rem;
  margin-top: 6rem;
}
li{
  margin-top: 4rem;
  margin-bottom: 2rem;
  padding: 0.4rem 0;
  border-radius: 25px;
  ${BoxShadowPink}
  :nth-child(2){
    margin-top: 2rem;
  }
  @media (min-width: ${({ theme }) => theme.responsive.desktop}) {
  margin: 1rem;
  /* margin-top:-2rem; */
  :nth-child(1){
    margin-bottom: 10rem;
  }
  :nth-child(2){
      margin-top: 12rem;
    }
  }
}
h2{
  padding-left: 1rem;
  font-size: 1.6rem;
  @media (min-width: ${({ theme }) => theme.responsive.desktop}) {
  font-size: 1.8rem;
  }
}
p{
  margin: 0;
  padding: 0.8rem;
  font-weight: 600;
  @media (min-width: ${({ theme }) => theme.responsive.desktop}) {
  padding: 1rem;
  font-size: 1.2rem;
  }
}
`;

const ProposeImage = styled(Image)`
margin: 0.4rem auto;
border-top: 1px solid ${({ theme }) => theme.colors.primaryPink};
border-bottom: 1px solid ${({ theme }) => theme.colors.primaryPink};
@media (min-width: ${({ theme }) => theme.responsive.desktop}) {
  max-height: 60%;
}
`;

const ContactLink = styled(Link)`
${Button}
align-self: center;
margin-top: 1rem;
margin-bottom: -2rem;
@media (min-width: ${({ theme }) => theme.responsive.desktop}) {
  position: absolute;
  left: 15%;
  bottom: 15%;
}
`;

const IndexPage = ({ data }) => {
  const { allDatoCmsMainpage: { nodes } } = data;
  return (
    <>
      <Main>
        <SEO title="Home" />
        {
          nodes.map(({
            id,
            maintitle,
            mainheading,
            mainparagraph,
            mainimage,
            mainpropose }) => {
            return (
              <div key={id}>
                <Header>
                  <Title>{maintitle}</Title>
                  <Heading>{mainheading}</Heading>
                  <Paragraph>{mainparagraph}</Paragraph>
                  <GalleryLink to="/gallery">Check our Gallery</GalleryLink>
                </Header>
                <ProposeWrapper>
                  {
                    mainpropose.map(({
                      heading,
                      description,
                      proposeimage
                    }, index) => {
                      return (
                        <li key={index}>
                          <h2>{heading}</h2>
                          <ProposeImage fluid={proposeimage.fluid} alt={proposeimage.alt} />
                          <p>{description}</p>
                        </li>
                      )
                    })
                  }
                  <ContactLink to="/contact">Cantact Us</ContactLink>
                </ProposeWrapper>
                <HeroImage fluid={mainimage.fluid} alt={mainimage.alt} />
              </div>
            )
          })
        }
        <AdditionalImage />
      </Main>
    </>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allDatoCmsMainpage: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.shape({
        maintitle: PropTypes.string.isRequired,
        mainheading: PropTypes.string.isRequired,
        mainparagraph: PropTypes.string.isRequired,
        mainimage: PropTypes.shape({
          title: PropTypes.string.isRequired,
          alt: PropTypes.string.isRequired,
          fluid: PropTypes.object.isRequired,
        }).isRequired,
        mainpropose: PropTypes.arrayOf(PropTypes.shape({
          heading: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          proposeimage: PropTypes.shape({
            title: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
            fluid: PropTypes.object.isRequired,
          }).isRequired,
        }).isRequired,
        )
      }).isRequired,
      )
    }),
  }),
}

export default IndexPage

export const query = graphql`
{
  allDatoCmsMainpage {
    nodes {
      maintitle
      mainheading
      mainparagraph
      mainimage {
        title
        alt
        fluid(maxHeight: 800, maxWidth: 800) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      mainpropose {
        heading
        description
        proposeimage {
          title
          alt
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
}
`;

