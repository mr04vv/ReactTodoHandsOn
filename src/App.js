import React from 'react'; // 修正
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './App.css';
import Todo from './pages/Todo';
import styled from 'styled-components';
import 'firebase/firestore'; // 追記
import useTodo from './hooks/useTodo';
import SimpleBottomNavigation from './components/BottomNavigation';
import AddModal from './pages/Todo/AddModal';
import CircularProgress from '@material-ui/core/CircularProgress';
import DeleteModal from './pages/Todo/DeleteModal';
import PCTab from './components/PCTab';

function App() {

  const state = useTodo();

  return (
    <Body className="App">
      <AddModal
        isOpen={state.isOpenAddModal}
        setIsOpen={state.setIsOpenAddModal}
        input={state.input}
        setInput={state.setInput}
        addTodo={state.addTodo}
      />
      <DeleteModal
        isOpenNumber={state.isOpenDeleteModalByNumber}
        setIsOpen={state.setIsOpenDeleteModalByNumber}
        todoList={state.deleteType === "todo" ? state.todoList : state.finishedList}
        deleteTodo={state.deleteType === "todo" ? state.deleteTodo : state.deleteFinishTodo}
      />
      <Title>Todoリスト</Title>
      <PCTab setTabIndex={state.setTabIndex} tabIndex={state.tabIndex}/>
      {state.isLoading ? 
         <LoadingCircle />
      :
        <TodoContainer>
        {/* todoListという変数とdeleteTodoという関数をpropsとしてTodoコンポーネントに渡している*/}
          <Todo 
            todoList={state.todoList}
            changeTodoStatus={state.finishTodo}
            finishedList={state.finishedList}
            changeFinishedStatus={state.reopenTodo}
            tabIndex={state.tabIndex}
            setDeleteType={state.setDeleteType}
            isOpenDeleteModal={state.setIsOpenDeleteModalByNumber}
          />
        </TodoContainer>
      }
      <SimpleBottomNavigation setTabIndex={state.setTabIndex} tabIndex={state.tabIndex}/>
      <AddButton color="primary" aria-label="add" onClick={() => state.setIsOpenAddModal(true)}>
        <AddIcon />
      </AddButton>
    </Body>
  );
};

export default App;

const Title = styled.p`
  font-size: 26px;
  color: #0097a7;
  letter-spacing: 2.8px;
  font-weight: 200;
`;

const TodoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: space-between;
`;

const AddButton = styled(Fab)`
  position: fixed;
  bottom: 14vh;
  right: 6vh;
  @media(min-width: 480px) {
    right: 20vh;
  }
`;

const Body = styled.div`
  margin-bottom: 10vh;
`;

const LoadingCircle = styled(CircularProgress)`
  margin-top: 10vh;
`;