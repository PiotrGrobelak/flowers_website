import React from "react";
import { SecondaryFont, FlexRow } from "../../assets/styles/Mixins";
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { MdLocationOn, MdPhone, MdAccessTime, MdPayment } from "react-icons/md";

const StyledContainer = styled.section`
    padding: 1rem;
    h2{
        margin: 0.5rem;
        ${SecondaryFont};
        font-size: 2rem;
        text-align: center;
}
`;

const StyledItem = styled.li`
${FlexRow};
align-items: center;
`;

const StyledWrapper = styled.div`
margin-left: 1rem;
h3{
    margin-bottom: 0;
    font-size: 1rem;
}
p{
    margin: 0.3rem 0;
    font-size: 0.8rem
}
`;

const ContactInformation = () => {
    const { datoCmsContactinformation } = useStaticQuery(graphql`
    {
        datoCmsContactinformation {
            title
            adress
            city
            phonenumber
            email
            workingdays
            weekends
            owner
            accountname
            accountnumber
            id
        }
    }`)
    const {
        title,
        adress,
        city,
        phonenumber,
        email,
        workingdays,
        weekends,
        owner,
        accountname,
        accountnumber
    } = datoCmsContactinformation;

    return (
        <StyledContainer>
            <h2>{title}</h2>
            <ul>
                <StyledItem>
                    <MdLocationOn size={`2.4rem`} />
                    <StyledWrapper>
                        <h3>Adress</h3>
                        <p>{adress}</p>
                        <p>{city}</p>
                    </StyledWrapper>
                </StyledItem>
                <StyledItem>
                    <MdPhone size={`2.4rem`} />
                    <StyledWrapper>
                        <h3>Contact</h3>
                        <p>{phonenumber}</p>
                        <p>{email}</p>
                    </StyledWrapper>
                </StyledItem>
                <StyledItem>
                    <MdAccessTime size={`2.4rem`} />
                    <StyledWrapper>
                        <h3>Open days</h3>
                        <p>{workingdays}</p>
                        <p>{weekends}</p>
                    </StyledWrapper>
                </StyledItem>
                <StyledItem>
                    <MdPayment size={`2.4rem`} />
                    <StyledWrapper>
                        <h3>Owner</h3>
                        <p>{owner}</p>
                        <p>{accountname}</p>
                        <p>{accountnumber}</p>
                    </StyledWrapper>
                </StyledItem>
            </ul>

        </StyledContainer>
    )
}

export default ContactInformation;