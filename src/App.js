import React, { useState } from 'react';
import './App.css';
import Todo from './pages/Todo';

function App() {
  // 第１変数がstate, 第２変数がstateを変化させる関数
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    setTodoList([...todoList, input]);
    setInput('');
  }

  const deleteTodo = (index) => {
    setTodoList(todoList.filter((_, idx) => idx !== index))
  }

  return (
    <div className="App">
      <input onChange={(e) => setInput(e.target.value)} value={input}/>
      <button onClick={() => addTodo()}>追加</button>
      {/* todoListという変数とdeleteTodoという関数をpropsとしてTodoコンポーネントに渡している*/}
      <Todo todoList={todoList} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
