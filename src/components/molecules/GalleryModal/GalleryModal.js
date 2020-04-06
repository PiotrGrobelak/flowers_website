import React from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

const GalleryModal = ({ modalIsOpen, closeModal, selectedImageIndex, galleryassets }) => {
  return (
    <ModalGateway>
      {modalIsOpen ? (
        <Modal onClose={closeModal}>
          <Carousel
            currentIndex={selectedImageIndex}
            views={galleryassets.map(images => ({
              ...images,
              source: images.url,
              caption: images.basename,
            }))}
          />
        </Modal>
      ) : null}
    </ModalGateway>
  );
};

export default GalleryModal;
