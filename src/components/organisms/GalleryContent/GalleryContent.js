import React, { useState, useCallback } from 'react';
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

export default GalleryContent;
