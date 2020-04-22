import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import GalleryGrid from 'src/components/molecules/GalleryGrid/GalleryGrid';
import GalleryModal from 'src/components/molecules/GalleryModal/GalleryModal';

const GalleryContent = ({ nodes }) => {
 const [modalIsOpen, setModalIsOpen] = useState(false);
 const [selectedImageIndex, setSelectedImageIndex] = useState(0);
 const [selectedGalleryIndex, setSelectefGalleryIndex] = useState(0);

 const { galleryassets } = nodes[selectedGalleryIndex];

 const handleToggleModal = useCallback((imageIndex, galleryIndex) => {
  setModalIsOpen(true);
  setSelectedImageIndex(imageIndex);
  setSelectefGalleryIndex(galleryIndex);
 }, []);

 const closeModal = () => {
  setModalIsOpen(false);
  setSelectedImageIndex(0);
 };
 return (
  <>
   <GalleryGrid nodes={nodes} handleToggleModal={handleToggleModal} />
   <GalleryModal
    galleryassets={galleryassets}
    closeModal={closeModal}
    selectedImageIndex={selectedImageIndex}
    modalIsOpen={modalIsOpen}
   />
  </>
 );
};

GalleryContent.propTypes = {
 nodes: PropTypes.arrayOf(
  PropTypes.shape({
   title: PropTypes.string.isRequired,
   galleryassets: PropTypes.arrayOf(
    PropTypes.shape({
     alt: PropTypes.string.isRequired,
     url: PropTypes.string.isRequired,
     basename: PropTypes.string.isRequired,
     fluid: PropTypes.object.isRequired,
    }),
   ),
  }),
 ),
};

export default GalleryContent;
