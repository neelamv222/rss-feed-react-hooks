// eslint-disable-next-line 
import React, { useState } from "react"; 

const useModal = () => {
  const [modalVisibility, setModalVisibility] = useState(false);

  function showModal() {
    setModalVisibility(true);
  }

  function hideModal() {
    setModalVisibility(false);
  }

  return {modalVisibility, showModal, hideModal};
 }

 export default useModal;