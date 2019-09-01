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

function App() {

  const state = useTodo();

  return (
    <div className="App">
      <AddModal
        isOpen={state.isOpenAddModal}
        setIsOpen={state.setIsOpenAddModal}
        input={state.input}
        setInput={state.setInput}
        addTodo={state.addTodo}
      />
      <Title>Todoリスト</Title>
      {state.isLoading ? 
        <Loading>loading</Loading>
      :
        <TodoContainer>
        {/* todoListという変数とdeleteTodoという関数をpropsとしてTodoコンポーネントに渡している*/}
          <SubContainer>
            <SubTitle>未完了</SubTitle>
            <Todo todoList={state.todoList} deleteTodo={state.deleteTodo} changeTodoStatus={state.finishTodo} type="todo"/>
          </SubContainer>
          <SubContainer>
            <SubTitle>完了済み</SubTitle>
            <Todo todoList={state.finishedList} deleteTodo={state.deleteFinishTodo} changeTodoStatus={state.reopenTodo} type="done"/>
          </SubContainer>
        </TodoContainer>
      }
      <SimpleBottomNavigation/>
      <AddButton color="primary" aria-label="add" onClick={() => state.setIsOpenAddModal(true)}>
        <AddIcon />
      </AddButton>
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

const Loading = styled.div`
  margin: 40px auto;
`;

const AddButton = styled(Fab)`
  position: absolute;
  bottom: 14vh;
  right: 6vh;
`;