import React from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Assignment from '@material-ui/icons/Assignment';
import Done from '@material-ui/icons/Done';

// todoListという変数とdeleteTodoという関数をpropsとして受け取る
const Todo = ({ 
  todoList,
  changeTodoStatus,
  finishedList,
  changeFinishedStatus,
  tabIndex,
  setDeleteType,
  isOpenDeleteModal,
}) => (
  <Body>
    {/*受け取ったtodoListを使って表示する*/}
    {(tabIndex === 0 || tabIndex === 1) && (
    <TodoWrapper>
      <Title>未完了リスト</Title>      
      {todoList.map((todo, idx) => (
        <Container key={todo}>
          <Task>{todo}</Task>          
          <IconButton onClick={() => {
            setDeleteType("todo")
            // 0だとfalseになるので+1
            isOpenDeleteModal(idx+1)            
          }}>
            <DeleteIcon fontSize="small" />
          </IconButton>
          <IconButton onClick={() => changeTodoStatus(idx)}>
            <Done fontSize="small" />
          </IconButton>
        </Container>
      ))}
    </TodoWrapper>
    )}
    {(tabIndex === 0 || tabIndex === 2) && (
    <TodoWrapper>
      <Title>完了済みリスト</Title>
      {finishedList.map((todo, idx) => (
        <Container key={todo}>
          <Task>{todo}</Task>
          <IconButton onClick={() => {
            setDeleteType("finished")
            // 0だとfalseになるので+1
            isOpenDeleteModal(idx+1)
          }}>
            <DeleteIcon fontSize="small" />
          </IconButton>
          <IconButton onClick={() => changeFinishedStatus(idx)}>
            <Assignment fontSize="small" />
          </IconButton>
        </Container>
      ))}
    </TodoWrapper>
    )}
  </Body>
);

export default Todo;

const Container = styled.div`
  color: #5c5c5c;
  letter-spacing: 1.8px;
  border: solid #e6d5ae;
  border-width: 0 0 0.5px 0;
`;

const Body = styled.div`
  margin: 0 auto;
  width: 100vw;
`;

const TodoWrapper = styled.div`
  letter-spacing: 1.8px;
`;

const Title = styled.p`
  text-align: center;
  margin: 20px auto 0;
  font-size: 20px;
  color: #0097a7;
  letter-spacing: 1.8px;
  font-weight: 200;
  border: solid #e6d5ae;
  border-width: 0 0 0.5px 0;
`;

const Task = styled.p`
  flex: 1;
  margin: 10px auto 0 auto;
`;