import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AboutContent from 'src/components/organisms/AboutContent/AboutContent/';

const Main = styled.main`
 margin: 8rem auto;
 max-width: 1200px;
 min-height: 100%;
`;

const AboutPage = ({ data: { datoCmsAbout } }) => (
 <Main>
  <AboutContent datoCmsAbout={datoCmsAbout} />
 </Main>
);

AboutPage.propTypes = {
 data: PropTypes.shape({
  datoCmsAbout: PropTypes.shape({
   title: PropTypes.string.isRequired,
   aboutcontent: PropTypes.arrayOf(
    PropTypes.shape({
     paragraph: PropTypes.string.isRequired,
     image: PropTypes.shape({
      originalId: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      fluid: PropTypes.object.isRequired,
     }).isRequired,
    }).isRequired,
   ),
  }),
 }),
};

export default AboutPage;

export const query = graphql`
 {
  datoCmsAbout {
   title
   aboutcontent {
    paragraph
    image {
     originalId
     alt
     fluid(maxWidth: 400, imgixParams: { q: 100 }) {
      ...GatsbyDatoCmsFluid_tracedSVG
     }
    }
   }
  }
 }
`;
