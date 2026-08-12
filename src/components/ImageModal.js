import Image from "next/image";
import React from "react";
import left from "../assets/images/left-arrow.png";
import { Button, Modal } from "react-bootstrap";

const ImageModal = ({
  show,
  onHide,
  images,
  selectedImageIndex,
  setSelectedImageIndex,
  ...props
}) => {
  const handlePrev = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  return (
    <Modal
      {...props}
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="model-body-main">
        {images.map((image, index) => (
          <div key={index}>
            {index === selectedImageIndex ? (
              <Image
                src={image}
                alt={`Image ${index}`}
                className="model-img"
                priority
              />
            ) : null}
          </div>
        ))}
        <div className="nav-button">
          {selectedImageIndex > 0 ? (
            <Button className="modal-btn modal-btn-left" onClick={handlePrev}>
              <Image src={left} alt="" priority />
            </Button>
          ) : null}

          {selectedImageIndex !== images.length - 1 ? (
            <Button className="modal-btn modal-btn-right" onClick={handleNext}>
              <Image src={left} alt="" priority />
            </Button>
          ) : null}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;
