import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Slider from 'react-slick';
import Image from 'gatsby-image';
import styled from 'styled-components';
import Heading from 'src/components/atoms/Heading/Heading';
import Paragraph from 'src/components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
 height: 500px;
 /* width: 100%; */
`;

const StyledInnerWrapper = styled.div`
 height: 300px;
 /* width: 100%; */
`;

const StyledQuote = styled.div`
 display: flex;
 flex-direction: column;
`;

const StyledImage = styled(Image)`
 width: 100px;
 height: 100px;
 border-radius: 50px;
 padding: 2rem;
 background-color: red;
 border: 2px solid red;
`;

const Opinions = () => {
 const { allDatoCmsOpinion: nodes } = useStaticQuery(graphql`
  {
   allDatoCmsOpinion {
    nodes {
     index
     author
     quote
     avatar {
      fluid {
       ...GatsbyDatoCmsFluid_tracedSVG
      }
     }
    }
   }
  }
 `);
 const convertNodesToArray = Object.entries(nodes);
 const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplaySpeed: 3000,
  fadeIn: false,
  autoplay: true,
  pauseOnHover: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
   {
    breakpoint: 1000,
    settings: {
     slidesToShow: 2,
     slidesToScroll: 1,
     infinite: true,
     dots: true,
    },
   },
   {
    breakpoint: 600,
    settings: {
     slidesToShow: 1,
     slidesToScroll: 1,
    },
   },
  ],
 };

 return (
  <StyledWrapper>
   <StyledInnerWrapper>
    <Slider {...settings}>
     {convertNodesToArray.map(([key, value]) => {
      return value.map(person => {
       return (
        <StyledQuote key={person.index}>
         <Heading>{person.author}</Heading>
         <StyledImage fluid={person.avatar.fluid} />
         <Paragraph>{person.quote}</Paragraph>
        </StyledQuote>
       );
      });
     })}
    </Slider>
   </StyledInnerWrapper>
  </StyledWrapper>
 );
};

export default Opinions;
