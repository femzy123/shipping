import React, { useState } from "react";
import styled from "styled-components";
import Modal from '../../ui/Modal';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  cursor: pointer;
`;

function modal() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  }

  return (
    <>
      <Container>
        <Button onClick={openModal}>Open Modal</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} >
          Hello
        </Modal>
      </Container>
    </>
  );
}

export default modal;
