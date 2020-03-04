import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo";
import styled from "styled-components"
import Image from "gatsby-image";
import backgroundImage from "../assets/images/layout_image_1.png"


const Main = styled.main`
height:100%;
margin: 0 auto;
margin-bottom: 8rem;
max-width: 1200px;
font-weight: 600;
`;

const Header = styled.header`
  margin: 1rem;
  margin-top: 7rem;
  max-width: 85%;
  color: ${({ theme }) => theme.colors.thirdaryViolet};
  text-align: right;
`;

const Title = styled.h1`
  font-family: 'Princess Sofia';
  font-style: italic;
  font-stretch: expanded;
  font-size: 2.6rem;
  letter-spacing: 10px;
`;

const Heading = styled.p`
margin-left: 2rem;
font-size: 1.2rem;
`;

const ParapgraphWrapper = styled.div`
margin: 4rem 0;
/* background-color: ${({ theme }) => theme.colors.secondaryWhite}; */
/* box-shadow: 0px 2px 10px -1px rgba(0, 0, 0, 0.25); */
color: ${({ theme }) => theme.colors.thirdaryViolet};
font-weight: 600;
letter-spacing: 1px;

`;
const Paragraph = styled.p`
padding: 1rem`;

const MainButton = styled(Link)`
  /* margin: 2rem; */
  height: 200px;
  padding: 0.4rem 1rem;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.secondaryViolet};
  box-shadow: 0px 2px 15px -1px rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.colors.primaryWhite};
`;

const Wrapper = styled.div`
width: 100%;
height: 100%;
margin: 5rem;
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
`;

const LayoutImage = styled.div`
position: absolute;
bottom: 5%;
right: -6%;
height: 120px;
width: 120px;
transform: rotate(-120deg);
background-image: url(${backgroundImage});
background-repeat: no-repeat;
background-size: 100%;
`;

const ProposeWrapper = styled.div`
margin-top: 4rem;
margin-bottom: 2rem;
padding: 0.4rem 0;
/* border: 1px solid ${({ theme }) => theme.colors.secondaryViolet}; */
border-radius: 25px;
/* background-color: ${({ theme }) => theme.colors.primaryWhite}; */
box-shadow: 0px 3px 10px -5px ${({ theme }) => theme.colors.primaryPink};
color: ${({ theme }) => theme.colors.secondaryViolet};
letter-spacing: 1px;
h2{
  padding-left: 0.6rem;
  font-size: 1.6rem;
}
p{
  padding: 0.6rem;
}
`;

const ProposeImage = styled(Image)`
margin: 0.4rem auto;
`;

const ContactButton = styled.button`
margin: 1rem 0 0 2rem;
padding: 0.4rem 1rem;
border-radius: 15px;
background-color: ${({ theme }) => theme.colors.secondaryViolet};
box-shadow: 0px 2px 15px -1px rgba(0, 0, 0, 0.25);
font-size: 1rem;
color: ${({ theme }) => theme.colors.primaryWhite};
font-weight: 600;
letter-spacing: 1px;
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
                </Header>
                <ParapgraphWrapper>
                  <Paragraph>{mainparagraph}</Paragraph>
                </ParapgraphWrapper>
                <Wrapper>
                  <MainButton to="/gallery">Check our Gallery</MainButton>
                </Wrapper>
                <HeroImage fluid={mainimage.fluid} alt={mainimage.alt} />
                {mainpropose.map(({
                  heading,
                  description,
                  proposeimage
                }, index) => {
                  return (
                    <ProposeWrapper key={index}>
                      <h2>{heading}</h2>
                      <ProposeImage fluid={proposeimage.fluid} alt={proposeimage.alt} />
                      <p>{description}</p>
                    </ProposeWrapper>
                  )
                })}
                <ContactButton to="/contact">Cantact Us</ContactButton>
              </div>
            )
          })
        }
        <LayoutImage />
      </Main>
    </>
  )
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
        fluid(maxHeight: 200, maxWidth: 200) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      mainpropose {
        heading
        description
        proposeimage {
          filename
          alt
          title
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
}


`;