// CustomModal.js
import React from "react";
import Modal from "react-modal";

const CustomModal = ({
  isOpen,
  onRequestClose,
  contentLabel,
  title,
  children,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      style={{
        Modal: {
          backgroundColor: "#002b4d",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#002b4d",
          border: "none",
          textAlign: "center",
        },
      }}
    >
      <h2>{title}</h2>
      {children}
      <button onClick={onRequestClose}>Close Modal</button>
    </Modal>
  );
};

export default CustomModal;
