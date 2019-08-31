import React, { useState } from 'react';
import './App.css';
import Todo from './pages/Todo';
import styled from 'styled-components';

function App() {

  // 第１変数がstate, 第２変数がstateを変化させる関数
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [finishedList, setFinishedList] = useState([]);

  const addTodo = () => {
    if (!!input) {
      setTodoList([...todoList, input]);
      setInput('');
    }
  }

  const deleteTodo = (index) => {
    setTodoList(todoList.filter((_, idx) => idx !== index))
  }

  const deleteFinishTodo = (index) => {
    setFinishedList(finishedList.filter((_, idx) => idx !== index))
  }

  const finishTodo = (index) => {
    deleteTodo(index)
    setFinishedList([...finishedList,todoList.find((_, idx) => idx === index)])
  }

  const reopenTodo = (index) => {
    deleteFinishTodo(index)
    setTodoList([...todoList,finishedList.find((_, idx) => idx === index)])
  }

  return (
    <div className="App">
      <Title>Todoリスト</Title>
      <input onChange={(e) => setInput(e.target.value)} value={input}/>
      <button onClick={() => addTodo()}>追加</button>
      <TodoContainer>
      {/* todoListという変数とdeleteTodoという関数をpropsとしてTodoコンポーネントに渡している*/}
        <SubContainer>
          <SubTitle>未完了</SubTitle>
          <Todo todoList={todoList} deleteTodo={deleteTodo} changeTodoStatus={finishTodo} type="todo"/>
        </SubContainer>
        <SubContainer>
          <SubTitle>完了済み</SubTitle>
          <Todo todoList={finishedList} deleteTodo={deleteFinishTodo} changeTodoStatus={reopenTodo} type="done"/>
        </SubContainer>
      </TodoContainer>
    </div>
  );
};

export default App;

const Title = styled.p`
  font-size: 26px;
  color: #0097a7;
  letter-spacing: 2.8px;
  font-weight: 200;
`;

const SubTitle = styled.p`
  font-size: 22px;
  color: #5c5c5c;
`;

const SubContainer = styled.div`
  width: 400px;
`;

const TodoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
`;