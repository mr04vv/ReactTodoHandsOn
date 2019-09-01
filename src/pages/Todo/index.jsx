import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

// todoListという変数とdeleteTodoという関数をpropsとして受け取る
const Todo = ({todoList, deleteTodo, changeTodoStatus, type}) => (
  <div>
    {/*受け取ったtodoListを使って表示する*/}
    {todoList.map((todo, idx) => (
      <Container key={todo}>
        {todo}
        <IconButton aria-label="delete">
          <DeleteIcon fontSize="small" onClick={() => deleteTodo(idx)} />
        </IconButton>
        <Button variant="outlined" color={type === "todo" ? "primary" : "secondary"} onClick={() => changeTodoStatus(idx)}>{type === "todo" ? "完了済みにする" : "戻す"}</Button>
      </Container>
    ))}
  </div>
);

export default Todo;

const Container = styled.div`
  color: #5c5c5c;
  letter-spacing: 1.8px;
`;