import { useState } from 'react';

const useTodo = () => {
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
    setFinishedList([...finishedList,todoList.find((_, idx) => idx === index)])
    deleteTodo(index)
  }

  const reopenTodo = (index) => {
    setTodoList([...todoList,finishedList.find((_, idx) => idx === index)])
    deleteFinishTodo(index)
  }

  return {
    input,
    todoList,
    finishTodo,
    addTodo,
    deleteFinishTodo,
    deleteTodo,
    reopenTodo,
    setFinishedList,
    setInput,
    setTodoList
  }
}

export default useTodo;