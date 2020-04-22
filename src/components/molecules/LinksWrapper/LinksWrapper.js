import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FlexColumn, BoxShadow } from 'src/theme/Mixins';
import Heading from 'src/components/atoms/Heading/Heading';
import Button from 'src/components/atoms/Button/Button';

const StyledSection = styled.section`
 ${FlexColumn};
 justify-content: space-around;
 align-items: center;
 padding-bottom: 2rem;
 height: 240px;
 ${BoxShadow};
 border-top: 3px solid ${({ theme }) => theme.colors.primaryViolet};
 background-color: ${({ theme }) => theme.colors.secondaryWhite};
`;

const LinksWrapper = ({ title, firstLink, secondLink }) => (
 <StyledSection>
  <Heading secondary center>
   {title}
  </Heading>
  <Button as={Link} to="/gallery">
   {firstLink}
  </Button>
  <Button as={Link} to="/contact">
   {secondLink}
  </Button>
 </StyledSection>
);

export default LinksWrapper;
