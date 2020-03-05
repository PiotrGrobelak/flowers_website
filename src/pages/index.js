import React from "react"
import { graphql } from "gatsby"
import PropTypes from 'prop-types'
import { Main, Header, Title, Heading, Paragraph, GalleryLink, ProposeWrapper, ProposeImage, ContactLink, HeroImage, AdditionalImage } from "./index.styled";
import SEO from "../components/seo";


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