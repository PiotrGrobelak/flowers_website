import React from 'react';
import styled from 'styled-components';
import Heading from 'src/components/atoms/Heading/Heading';
import AboutItem from 'src/components/molecules/AboutItem/AboutItem';

const StyledHeading = styled(Heading)`
 margin-bottom: 10rem;
`;

const AboutContent = ({ datoCmsAbout }) => {
 const { aboutcontent, title } = datoCmsAbout;
 return (
  <>
   <StyledHeading center>{title}</StyledHeading>
   {aboutcontent.map(({ image: { originalId, fluid, alt }, paragraph }) => {
    return (
     <AboutItem
      key={originalId}
      fluid={fluid}
      alt={alt}
      paragraph={paragraph}
     />
    );
   })}
  </>
 );
};

export default AboutContent;
