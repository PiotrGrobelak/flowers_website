import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FlexColumn } from 'src/theme/Mixins';
import Heading from 'src/components/atoms/Heading/Heading';
import Paragraph from 'src/components/atoms/Paragraph/Paragraph';
import Button from 'src/components/atoms/Button/Button';

const StyledHeader = styled.header`
  ${FlexColumn}
  margin-top: 7rem;
  max-width: 90%;
  color: ${({ theme }) => theme.colors.thirdaryViolet};
  text-align: right;
  @media (min-width: ${({ theme }) => theme.responsive.lg}) {
    width: 70%;
  }
`;

const StyledSubHeading = styled(Paragraph)`
  margin-left: 2rem;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 2rem -1rem 2rem 1rem;
  letter-spacing: 1px;
  text-align: center;
  @media (min-width: ${({ theme }) => theme.responsive.lg}) {
    width: 90%;
    text-align: right;
  }
`;

const StyledButton = styled(Button)`
  align-self: flex-end;
  margin-top: 2rem;
  @media (min-width: ${({ theme }) => theme.responsive.lg}) {
    margin-right: 2rem;
  }
`;

const MainHeader = ({ maintitle, mainheading, mainparagraph }) => (
  <StyledHeader>
    <Heading>{maintitle}</Heading>
    <StyledSubHeading medium bold>
      {mainheading}
    </StyledSubHeading>
    <StyledParagraph>{mainparagraph}</StyledParagraph>
    <StyledButton as={Link} to="/gallery">
      Check our Gallery
    </StyledButton>
  </StyledHeader>
);

export default MainHeader;
