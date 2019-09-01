import { useState, useEffect} from 'react'; // 修正
import firebase from 'firebase'; // 追記

const useTodo = () => {
  // 第１変数がstate, 第２変数がstateを変化させる関数
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [finishedList, setFinishedList] = useState([]);
  // Loadingを判定する変数
  const [isLoading, setIsLoading] = useState(true);
  // 未完了のTodoが変化したかを監視する変数
  const [isChangedTodo, setIsChangedTodo] = useState(false);
  // 完了済みのTodoが変化したかを監視する変数
  const [isChangedFinished, setIsChangedFinished] = useState(false);
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);

  const db = firebase.firestore(); // 追記

  // 追記 一番最初にfirestoreからデータを取ってきてstateに入れる
  useEffect(() => {
    (async () => {
      const resTodo = await db.collection("todoList").doc("todo").get();
      // stateに入れる
      setTodoList(resTodo.data().tasks);
      const resFinishedTodo = await db.collection("todoList").doc("finishedTodo").get();
      // stateに入れる
      setFinishedList(resFinishedTodo.data().tasks);
      // Loading終了
      setIsLoading(false);
    })()
  }, [db])

  useEffect(() => {
    if (isChangedTodo) {
      (async () => {
        // 通信をするのでLoadingをtrue
        setIsLoading(true)
        const docRef = await db.collection('todoList').doc('todo');
        docRef.update({ tasks: todoList })
        // Loading終了
        setIsLoading(false)
      })()
    }
  }, [todoList, isChangedTodo, db])

  useEffect(() => {
    if (isChangedFinished) {
      (async () => {
        // 通信をするのでLoadingをtrue
        setIsLoading(true)
        const docRef = await db.collection('todoList').doc('finishedTodo');
        docRef.update({ tasks: finishedList })
        // Loading終了
        setIsLoading(false)
      })()
    }
    setIsChangedFinished(false)
  }, [db, finishedList, isChangedFinished])

  const addTodo = async () => {
    if (!!input) {
      // 追記 Todoが変化したのでtrue
      setIsChangedTodo(true);
      setTodoList([...todoList, input]);
      setInput('');
      setIsOpenAddModal(false);
    }
  }

  const deleteTodo = (index) => {
    // 追記 Todoが変化したのでtrue
    setIsChangedTodo(true);
    setTodoList(todoList.filter((_, idx) => idx !== index))
  }

  const deleteFinishTodo = (index) => {
    // 追記 完了済みTodoが変化したのでtrue
    setIsChangedFinished(true);
    setFinishedList(finishedList.filter((_, idx) => idx !== index))
  }

  const finishTodo = (index) => {
    // 追記 Todo、完了済みTodoがともに変化したのでtrue
    setIsChangedTodo(true);
    setIsChangedFinished(true);
    deleteTodo(index)
    setFinishedList([...finishedList,todoList.find((_, idx) => idx === index)])
  }

  const reopenTodo = (index) => {
    // 追記 Todo、完了済みTodoがともに変化したのでtrue
    setIsChangedTodo(true);
    setIsChangedFinished(true);
    deleteFinishTodo(index)
    setTodoList([...todoList,finishedList.find((_, idx) => idx === index)])
  }

  return {
    isLoading,
    input,
    setInput,
    addTodo,
    deleteTodo,
    deleteFinishTodo,
    todoList,
    finishedList,
    finishTodo,
    reopenTodo,
    isOpenAddModal,
    setIsOpenAddModal,
  }
}

export default useTodo;