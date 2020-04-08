import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AboutContent from 'src/components/organisms/AboutContent/AboutContent/';

const Main = styled.main`
 min-height: 100vh;
`;

const AboutPage = ({ data }) => {
 const { datoCmsAbout } = data;

 return (
  <Main>
   <AboutContent datoCmsAbout={datoCmsAbout} />
  </Main>
 );
};

AboutPage.propTypes = {
 data: PropTypes.shape({
  datoCmsAbout: PropTypes.shape({
   title: PropTypes.string.isRequired,
   aboutcontent: PropTypes.arrayOf(
    PropTypes.shape({
     paragraph: PropTypes.string.isRequired,
     image: PropTypes.shape({
      alt: PropTypes.string.isRequired,
      fluid: PropTypes.object.isRequired,
     }),
    }),
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
     alt
     fluid(maxWidth: 600, maxHeight: 500, imgixParams: { q: 100 }) {
      ...GatsbyDatoCmsFluid_tracedSVG
     }
    }
   }
  }
 }
`;
