import React from 'react';
import styled from 'styled-components';
import Heading from 'src/components/atoms/Heading/Heading';
import Paragraph from 'src/components/atoms/Paragraph/Paragraph';
import AboutItem from 'src/components/molecules/AboutItem/AboutItem';
import LinksWrapper from 'src/components/molecules/LinksWrapper/LinksWrapper';

const StyledHeading = styled(Heading)`
 margin-bottom: 5rem;
`;

const LinksData = {
 title: 'So, are you not convinced yet?',
 links: {
  first: 'Check out our gallery',
  second: 'Order flowers online',
 },
};

const AboutContent = ({ datoCmsAbout }) => {
 const { aboutcontent, title, paragraph } = datoCmsAbout;
 return (
  <>
   <StyledHeading center>{title}</StyledHeading>
   <Paragraph bold center medium>
    {paragraph}
   </Paragraph>
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
   <LinksWrapper
    title={LinksData.title}
    firstLink={LinksData.links.first}
    secondLink={LinksData.links.second}
   />
  </>
 );
};

export default AboutContent;
