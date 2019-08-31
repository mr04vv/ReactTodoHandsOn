import React from 'react';

// todoListという変数とdeleteTodoという関数をpropsとして受け取る
const Todo = ({todoList, deleteTodo, changeTodoStatus}) => (
  <div>
    {/*受け取ったtodoListを使って表示する*/}
    {todoList.map((todo, idx) => (
      <div>
        {todo}
        <button onClick={() => deleteTodo(idx)}>削除</button>
        <button onClick={() => changeTodoStatus(idx)}></button>
      </div>
    ))}
  </div>
)

export default Todo;