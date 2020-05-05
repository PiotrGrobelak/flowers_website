import React from 'react';
import styled, { css } from 'styled-components';
import { AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { FlexColumn, FlexRow } from 'src/theme/Mixins';
import ButtonIcon from 'src/components/atoms/ButtonIcon/ButtonIcon';
import OutputLink from 'src/components/atoms/OutputLink/OutputLink';
import Paragraph from 'src/components/atoms/Paragraph/Paragraph';

const StyledFooter = styled.footer`
 display: flex;
 flex-direction: column;
 align-items: center;
 padding-bottom: 0.4rem;
 background-color: ${({ theme }) => theme.colors.secondaryViolet};
 box-shadow: 0px 3px 10px 3px rgba(0, 0, 0, 0.25);
 color: ${({ theme }) => theme.colors.primaryWhite};
 font-weight: 600;
`;

const StyledWrapper = styled.div`
 ${FlexColumn}
 align-items: center;
 ${({ row }) =>
  row &&
  css`
   ${FlexRow}
  `}
`;

const Footer = () => (
 <StyledFooter>
  <StyledWrapper row>
   <ButtonIcon
    as="a"
    href="/"
    target=""
    rel="noopener noreferrer"
    aria-current="page"
   >
    <AiFillFacebook size={'2.2rem'} />
   </ButtonIcon>
   <ButtonIcon
    as="a"
    href="/"
    target=""
    rel="noopener noreferrer"
    aria-current="page"
   >
    <AiOutlineInstagram size={'2.2rem'} />
   </ButtonIcon>
  </StyledWrapper>
  <StyledWrapper>
   <Paragraph white bold>
    2020 © Flowers. Gatsby + DatoCms
   </Paragraph>
   <OutputLink
    hover
    href="https://github.com/PiotrGrobelak?tab=repositories"
    target="_blank"
    rel="noopener noreferrer"
   >
    Project by Piotr Grobelak
   </OutputLink>
  </StyledWrapper>
 </StyledFooter>
);

export default Footer;
