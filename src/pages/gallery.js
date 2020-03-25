import React, { useState, useCallback } from "react"
import { Link } from "gatsby";
import styled from 'styled-components';
import { FlexColumn, BoxProperty, SecondaryFont } from "../assets/styles/Mixins";
import { Button } from "../components/Button/Button";
import Image from 'gatsby-image'
import Carousel, { Modal, ModalGateway } from 'react-images';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import backgroundImage from "../assets/images/layout_image_2.png";
import secondLayoutImage from "../assets/images/layout_image_3.png";



const Main = styled.main`
margin: 0 auto;
margin-bottom: 8rem;
max-width: 1200px;
${FlexColumn};
justify-content: center;
align-items: center;
color: ${({ theme }) => theme.colors.thirdaryViolet};
@media (min-width: ${({ theme }) => theme.responsive.lg}) {
    position: relative;
    overflow: hidden;
    ::before{
        content: "";
        position: absolute;
        top: 40%;
        right: -50%;
        height: 100%;
        width: 100%;
        background-image: url(${secondLayoutImage});
        background-repeat: no-repeat;
        background-size: 50%;
        opacity: 0.4;
        z-index: -1;
    }
}
`;

const GalleryHeader = styled.header`
margin: 2rem;
h1{
    font-size: 2.6rem;
    ${SecondaryFont};
    color: ${({ theme }) => theme.colors.secondaryViolet};
}
p {
    font-size: 1.2rem;
    font-weight: 600;
    @media (min-width: ${({ theme }) => theme.responsive.lg}) {
    max-width: 60%;
}
}
`;

const GalleryWrapper = styled.div`
border-top: 2px solid ${({ theme }) => theme.colors.primaryViolet};
h3{
        margin-bottom: 2rem;
        font-size: 1.6rem;
        text-align: center;
    }
`;

const GalleryList = styled.ul`
display: grid;
grid-template-columns: repeat(1, 300px);
grid-gap: 2rem;
margin-bottom: 4rem;
@media (min-width: ${({ theme }) => theme.responsive.lg}) {
    grid-template-columns: repeat(3, 300px);
    position: relative;
    ::before{
        content: "";
        position: absolute;
        top: 0;
        left: -20%;
        height: 100%;
        width: 100%;
        background-image: url(${secondLayoutImage});
        background-repeat: no-repeat;
        background-size: 80%;
        opacity: 0.4;
        z-index: -1;
    }
}
    li{
        height: 250px;
        ${BoxProperty}
        overflow: hidden;
    }
`;

const GalleryImage = styled(Image)`
height: 100%;
width: 100%;
object-fit: contain;
border-radius: 20px;
@media (min-width: ${({ theme }) => theme.responsive.lg}) {
transition: .5s ease-in-out;
        :hover{
        z-index: 10;
        transform: scale(1.1);
        }
}
`;

const ContactLink = styled(Link)`
${Button}
@media (min-width: ${({ theme }) => theme.responsive.lg}) {
}
`;

const AdditionalImage = styled.div`
position: absolute;
bottom: 1%;
left: -5%;
height: 120px;
width: 120px;
transform: rotate(160deg);
background-image: url(${backgroundImage});
background-repeat: no-repeat;
background-size: 100%;
@media (min-width: ${({ theme }) => theme.responsive.lg}) {
    left: -2%;
    bottom: 2%;
    height: 240px;
    width: 240px;
}
`;


const GalleryPage = ({ data }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [selectedGalleryIndex, setSelectefGalleryIndex] = useState(0);
    const { content, gallery: { nodes } } = data;
    const { galleryassets } = nodes[selectedGalleryIndex];

    const handleToggleModal = useCallback((imageIndex, galleryIndex) => {
        setModalIsOpen(true)
        setSelectedImageIndex(imageIndex)
        setSelectefGalleryIndex(galleryIndex)
    }, []);

    const closeLightbox = () => {
        setModalIsOpen(false)
        setSelectedImageIndex(0)
    }
    return (
        <>
            <Main>
                <GalleryHeader>
                    <h1>{content.title}</h1>
                    <p>{content.description}</p>
                </GalleryHeader>
                <GalleryWrapper>
                    {nodes.map(({ title, galleryassets }, galleryIndex) => {
                        return (
                            <div key={galleryIndex}>
                                <h3>{title}</h3>
                                <GalleryList >
                                    {galleryassets.map(({ alt, fluid, url }, imageIndex) => {
                                        return (
                                            <li key={imageIndex}>
                                                <a
                                                    href={url}
                                                    onClick={e => {
                                                        e.preventDefault();
                                                        handleToggleModal(imageIndex, galleryIndex)
                                                    }}
                                                >
                                                    <GalleryImage alt={alt} fluid={fluid} />
                                                </a>
                                            </li>
                                        )
                                    })}
                                </GalleryList>
                            </div>
                        )
                    })}
                    <ModalGateway >
                        {modalIsOpen ? (
                            <Modal onClose={closeLightbox}>
                                <Carousel
                                    // styles={customStyles}
                                    currentIndex={selectedImageIndex}
                                    views={
                                        galleryassets.map(images => ({
                                            ...images,
                                            source: images.url,
                                            caption: images.basename
                                        }))}
                                />
                            </Modal>
                        ) : null}
                    </ModalGateway>
                </GalleryWrapper>
                <ContactLink to="/contact">Contact Us</ContactLink>
            </Main>
            <AdditionalImage />
        </>
    )
}

GalleryPage.propTypes = {
    data: PropTypes.shape({
        content: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        }),
        gallery: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({
                title: PropTypes.string.isRequired,
                galleryassets: PropTypes.arrayOf(PropTypes.shape({
                    alt: PropTypes.string.isRequired,
                    url: PropTypes.string.isRequired,
                    basename: PropTypes.string.isRequired,
                    fluid: PropTypes.object.isRequired
                }))
            }))
        })
    })
}

export default GalleryPage;

export const query = graphql`
{
    content: datoCmsGallery {
        title
        description
    }
    gallery: allDatoCmsGallerycontainer {
        nodes {
            title
            galleryassets {
                alt
                url
                basename
                fluid(maxWidth: 600, maxHeight: 500, imgixParams: {q: 100} ) {
                    ...GatsbyDatoCmsFluid_tracedSVG
                }
            }
        }
    }
}
`;


