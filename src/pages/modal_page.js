// import Modal from "react-modal";

import React, { useState } from "react";
import CustomModal from "./../components/CustomModal";

export default function Modal_Page() {
  //   const { setVisible, bindings } = useModal();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Open Modal</button>

      <CustomModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal 2"
        title="Modal 2 Title"
      >
        <p>ModalKOIO 2 content goes here...</p>
        {/* Add more content inside the Modal as needed */}
      </CustomModal>
    </>
  );
}
