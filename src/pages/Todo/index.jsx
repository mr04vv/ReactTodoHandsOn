import React from 'react';

const Todo = ({todoList, deleteTodo, changeTodoStatus}) => (
  <div>
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