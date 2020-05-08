import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Slider from 'react-slick';
import { BoxShadow, SecondaryBoxShadow } from 'src/theme/Mixins';
import styled from 'styled-components';
import Heading from 'src/components/atoms/Heading/Heading';
import Paragraph from 'src/components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.section`
 margin-top: 6rem;
`;

const StyledFigure = styled.figure`
 margin: 2rem 0 0;
 display: flex !important;
 flex-direction: column;
 justify-content: flex-start;
 align-items: center;
 min-height: 350px;
 @media (min-width: ${({ theme }) => theme.responsive.xs}) {
  padding: 0 5rem;
 }
 @media (min-width: ${({ theme }) => theme.responsive.sm}) {
  padding: 0 10rem;
 }
 @media (min-width: ${({ theme }) => theme.responsive.sm}) {
  padding: 0 15rem;
 }
 @media (min-width: ${({ theme }) => theme.responsive.lg}) {
  padding: 0 20rem;
  min-height: 300px;
 }
`;

const StyledImage = styled.img`
 margin-top: -6rem;
 margin-bottom: 1rem;
 width: 100px;
 height: 100px;
 border-radius: 50px;
 background-color: ${({ theme }) => theme.colors.primaryWhite};
 border: 2px solid ${({ theme }) => theme.colors.secondaryViolet};
 ${BoxShadow};
`;

const StyledQuote = styled(Paragraph)`
 padding: 1.5rem 1.5rem 6rem;
 min-height: 120px;
 border-radius: 25px 0 25px 0;
 border-top: 2px solid ${({ theme }) => theme.colors.secondaryViolet};
 background-color: ${({ theme }) => theme.colors.secondaryWhite};
 ${SecondaryBoxShadow};
 quotes: '“' '”' '‘' '’';
 ::before {
  content: open-quote;
 }
 ::after {
  content: close-quote;
 }
`;

const settings = {
 dots: true,
 infinite: true,
 speed: 700,
 autoplaySpeed: 4000,
 autoplay: true,
 pauseOnHover: false,
 adaptiveHeight: true,
 slidesToShow: 1,
 slidesToScroll: 1,
 fade: true,
 focusOnSelect: false,
};

const Opinions = () => {
 const { allDatoCmsOpinion: nodes } = useStaticQuery(graphql`
  {
   allDatoCmsOpinion {
    nodes {
     index
     author
     quote
     avatar {
      alt
      fluid {
       ...GatsbyDatoCmsFluid_tracedSVG
      }
     }
    }
   }
  }
 `);
 const convertNodesToArray = Object.entries(nodes);

 return (
  <StyledWrapper>
   <Heading secondary center>
    What our clients say?
   </Heading>
   <Slider {...settings}>
    {convertNodesToArray.map(([key, value]) => {
     return value.map(person => {
      return (
       <StyledFigure key={person.index}>
        <StyledQuote as="blockquote">{person.quote}</StyledQuote>
        <StyledImage src={person.avatar.fluid.src} alt={person.avatar.alt} />
        <Heading as="figcaption" secondary normal>
         {person.author}
        </Heading>
       </StyledFigure>
      );
     });
    })}
   </Slider>
  </StyledWrapper>
 );
};

export default Opinions;
