import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import { MdLocalShipping, MdAttachMoney, MdLocalFlorist, MdTextsms } from "react-icons/md";
import { FlexRow, FlexColumn, ThirdaryFont, SecondaryBoxShadow } from "../../assets/styles/Mixins";


const StyledPayment = styled.section`
position: relative;
margin: 6rem auto 0;
width: 100%;
h3{
    margin-bottom: 2rem;
    ${ThirdaryFont};
    text-align: center;
}
`;

const StyledList = styled.ul`
${FlexColumn};
`;

const StyledItem = styled.li`
${FlexRow}
align-items: center;
p{
padding: 0.2rem;
width: 100%;
line-height: 1.4rem;
letter-spacing: 1px;
background-color: ${({ theme }) => theme.colors.secondaryWhite};
}
`;

const StyledIcon = styled.div`
${FlexRow};
align-items: center;
justify-content: center;
margin-right: 0.6rem;
padding: 0.6rem;
border-radius: 5px 20px 5px;
color: ${({ theme }) => theme.colors.primaryWhite};
background-color: ${({ theme }) => theme.colors.primaryViolet};
${SecondaryBoxShadow};
`;

const StyledBackgroundImage = styled(Image)`
position: absolute !important;
top: 40%;
left: 0;
height:auto;
width: 100%;
object-fit: cover;
z-index: -1;
opacity: 0.7;
transform: rotate(-55deg) scale(1.3);
`;

const Payment = () => {
    const { file } = useStaticQuery(graphql`{
    file(name: {eq: "layout_image_5"}){
        childImageSharp{
        fluid( quality: 100){
            ...GatsbyImageSharpFluid_tracedSVG
            }
            }
        }
    }`)
    console.log(file);

    return (
        <StyledPayment>
            <h3>Payment</h3>
            <StyledList>
                <StyledItem>
                    <StyledIcon>
                        <MdLocalShipping size={`2.2rem`} />
                    </StyledIcon>
                    <p>
                        The minimum delivery time is 1 hour
                        or at your appointed time.
                        We deliver personally!
                    </p>
                </StyledItem>
                <StyledItem>
                    <StyledIcon>
                        <MdLocalFlorist size={`2.2rem`} />
                    </StyledIcon>
                    <p>
                        Guarantee quality of the bouquet! Our
                        bouquets are always fresh, all flowers are
                        beautiful and without damage.
                    </p>
                </StyledItem>
                <StyledItem>
                    <StyledIcon>
                        <MdAttachMoney size={`2.2rem`} />
                    </StyledIcon>
                    <p>
                        Payment by cash or card!
                        You have the opportunity to pay
                        in any way convenient for you.
                    </p>
                </StyledItem>
                <StyledItem>
                    <StyledIcon>
                        <MdTextsms size={`2.2rem`} />
                    </StyledIcon>
                    <p>
                        After completing the order, we send an SMS notification
                        about the delivery of the bouquet to the recipient.
                    </p>
                </StyledItem>
            </StyledList>
            <StyledBackgroundImage fluid={file.childImageSharp.fluid} />
        </StyledPayment>
    )
}

export default Payment;