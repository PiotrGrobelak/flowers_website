import React from "react"
import styled from 'styled-components';
import Image from 'gatsby-image'

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
/* grid-template-rows: repeat(300px); */
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
    const { content, gallery: { nodes } } = data;
    return (
        <>
            <Main>
                <header>
                    <h1>{content.title}</h1>
                    <p>{content.description}</p>
                </header>
                <div>
                    {nodes.map(({ title, galleryassets }) => {
                        return (
                            <div key={title}>
                                <h3>{title}</h3>
                                <GalleryList >
                                    {galleryassets.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <GalleryImage alt={item.alt} fluid={item.fluid} />
                                            </li>
                                        )
                                    })}
                                </GalleryList>
                            </div>
                        )
                    })}
                </div>
            </Main>
        </>


    )
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
            fluid(maxWidth: 200, maxHeight: 100) {
                ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
        }
      }
}
`;


