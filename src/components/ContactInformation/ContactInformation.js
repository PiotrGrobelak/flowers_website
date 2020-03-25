import React from "react";
import { SecondaryFont } from "../../assets/styles/Mixins";
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const StyledContainer = styled.header`
    padding: 1rem;

    h3{
        margin: 0.5rem;
        ${SecondaryFont};
        font-size: 2rem;
        text-align: center;
}

`;

const StyledWrapper = styled.div`

span{
    display: block;
    margin: 0.4rem 0;
    font-size: 0.8rem;
}
`;

const ContactInformation = () => {
    const { datoCmsContact } = useStaticQuery(graphql`
    {
        datoCmsContact{
            title
            information{
            name
            adress
            city
            transfername
            transfernumber
            }
        }
    }`)
    return (
        <StyledContainer>
            <h3>{datoCmsContact.title}</h3>
            {
                datoCmsContact.information.map(({ name, adress, city, transfername, transfernumber }) => {
                    return (
                        <StyledWrapper>
                            <span>{name}</span>
                            <span>{adress}</span>
                            <span>{city}</span>
                            <span>{transfername}:</span>
                            <span>{transfernumber}</span>
                        </StyledWrapper>
                    )
                })
            }
        </StyledContainer>
    )
}

export default ContactInformation;