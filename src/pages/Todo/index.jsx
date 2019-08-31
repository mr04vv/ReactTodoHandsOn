import React from 'react';
import styled from 'styled-components';

// todoListという変数とdeleteTodoという関数をpropsとして受け取る
const Todo = ({todoList, deleteTodo, changeTodoStatus, type}) => (
  <div>
    {/*受け取ったtodoListを使って表示する*/}
    {todoList.map((todo, idx) => (
      <Container key={todo}>
        {todo}
        <button onClick={() => deleteTodo(idx)}>削除</button>
        <button onClick={() => changeTodoStatus(idx)}>{type === "todo" ? "完了済みにする" : "戻す"}</button>
      </Container>
    ))}
  </div>
);

export default Todo;

const Container = styled.div`
  color: #5c5c5c;
  letter-spacing: 1.8px;
`;