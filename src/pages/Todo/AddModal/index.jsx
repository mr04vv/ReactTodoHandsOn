import React from 'react';
import Modal from '@material-ui/core/Modal';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const AddModal = ({isOpen, setIsOpen, input, setInput, addTodo}) => (
  <Modal
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    open={isOpen}
    onClose={() => setIsOpen(false)}
  >
    <ModalContentCard>
      <ModalContent>
        <Title>Todoを追加する</Title>
        <TodoInput variant="outlined" value={input} onChange={(e) => setInput(e.target.value)}/>
        <AddButton variant="contained" color="primary" onClick={() => addTodo(input)}>
          追加
        </AddButton>
      </ModalContent>
    </ModalContentCard>
  </Modal>
)

export default AddModal;

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
  margin: 0 auto;
  width: 50vw;
  font-size: 20px;
  color: #0097a7;
  letter-spacing: 2.8px;
  font-weight: 200;
`;

const TodoInput = styled(TextField)`
  margin: 20px auto;
  width: 50vw;
`;

const AddButton = styled(Button)`
  width: 50vw;
  margin: 10px auto;
`;