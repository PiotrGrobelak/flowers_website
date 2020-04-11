import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AboutContent from 'src/components/organisms/AboutContent/AboutContent/';
import BackgroundImage from 'src/assets/images/layout_image_3.png';
import BackgroundImage2 from 'src/assets/images/layout_image_7.png';
import BackgroundImage3 from 'src/assets/images/layout_image_8.png';

const Main = styled.main`
 position: relative;
 margin: 0 auto;
 margin-top: 10rem;
 min-height: 100%;
 background-image: url(${BackgroundImage});
 background-repeat: no-repeat;
 background-position: center center;
 background-size: 400px;
 z-index: -2;
 overflow: hidden;
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  background-size: 600px;
  background-position: left 40%;
 }
 ::before {
  content: '';
  position: absolute;
  bottom: 23%;
  right: 0;
  height: 100%;
  width: 100%;
  background-image: url(${BackgroundImage2});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 400px;
  z-index: -1;
  transform: scaleX(-1);
  @media (min-width: ${({ theme }) => theme.responsive.lg}) {
   background-size: 600px;
   background-position: left 40%;
  }
 }
 ::after {
  content: '';
  position: absolute;
  bottom: -25%;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url(${BackgroundImage3});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 400px;
  z-index: -2;
  transform: scaleX(-1);
  @media (min-width: ${({ theme }) => theme.responsive.lg}) {
   background-size: 600px;
   background-position: left 40%;
  }
 }
`;

const AboutPage = ({ data: { datoCmsAbout } }) => (
 <Main id="top">
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
     fluid(maxWidth: 1000, imgixParams: { q: 100 }) {
      ...GatsbyDatoCmsFluid_tracedSVG
     }
    }
   }
  }
 }
`;
