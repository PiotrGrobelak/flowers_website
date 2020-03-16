import React, { useState, useCallback } from "react"
import styled from 'styled-components';
import Image from 'gatsby-image'
import Carousel, { Modal, ModalGateway } from 'react-images';
import PropTypes from 'prop-types'


const Main = styled.main`
margin: 0 auto;
margin-bottom: 8rem;
max-width: 1400px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const GalleryList = styled.ul`
display: grid;
grid-template-columns: repeat(3, 300px);
grid-gap: 1rem;
    li{
        transition: .5s ease-in-out;
        :hover{
        z-index: 10;
        transform: scale(1.1)
    }
}
`;

const GalleryImage = styled(Image)`
height: 300px;
width: 100%;
object-fit: contain;

`;


const GalleryPage = ({ data }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)
    const [selectedGalleryIndex, setSelectefGalleryIndex] = useState(0);
    const { content, gallery: { nodes } } = data;
    const { galleryassets } = nodes[selectedGalleryIndex];

    const handleToggleModal = useCallback((imageIndex, galleryIndex) => {
        setModalIsOpen(true)
        setSelectedImageIndex(imageIndex)
        setSelectefGalleryIndex(galleryIndex)
    }, [])

    const closeLightbox = () => {
        setModalIsOpen(false)
        setSelectedImageIndex(0)
    }
    console.log(nodes)
    return (
        <>
            <Main>
                <header>
                    <h1>{content.title}</h1>
                    <p>{content.description}</p>
                </header>
                <div>
                    {nodes.map(({ title, galleryassets }, galleryIndex) => {
                        return (
                            <div key={title}>
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
                </div>
            </Main>
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


