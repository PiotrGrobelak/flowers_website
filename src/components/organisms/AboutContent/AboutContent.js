import React from 'react';
import Heading from 'src/components/atoms/Heading/Heading';
import AboutItem from 'src/components/molecules/AboutItem/AboutItem';

const AboutContent = ({ datoCmsAbout }) => {
 const { aboutcontent, title } = datoCmsAbout;
 return (
  <>
   <Heading center>{title}</Heading>
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
