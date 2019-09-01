import React from 'react';
import Modal from '@material-ui/core/Modal';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const DeleteModal = ({isOpenNumber, setIsOpen, deleteTodo, todoList}) => (
  <Modal
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    open={!!isOpenNumber}
    onClose={() => setIsOpen(false)}
  >
    <ModalContentCard>
      <ModalContent>
        <Title>削除してもよろしいですか？</Title>
        <Task>{todoList[isOpenNumber-1]}</Task>
        <AddButton 
          variant="contained"
          color="secondary"
          onClick={() => {
            deleteTodo(isOpenNumber-1);
            setIsOpen(false);
          }}
        >
          削除する
        </AddButton>
      </ModalContent>
    </ModalContentCard>
  </Modal>
)

export default DeleteModal;

const ModalContentCard = styled.div`
  display: flex;
  height: 30vh;
  margin-top: 10vh;
  outline: none;
`;

const ModalContent = styled.div`
  outline: none;
  width: 80vw;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #fbf9f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.p`
  text-align: center;
  margin: 10px auto;
  font-size: 18px;
  color: #0097a7;
  letter-spacing: 1.8px;
`;

const Task = styled.p`
  text-align: center;
  margin: 0 auto;
  letter-spacing: 1.8px;
`;

const AddButton = styled(Button)`
  width: 50vw;
  margin: 10px auto;
`;