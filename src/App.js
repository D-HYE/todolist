import './App.css';
import React, {useState, useEffect} from 'react';
import List from './List';
import Header from './Header';

function App() {

  const [todos, setTodos] = useState([]);
  const [newTodos, setNewTodos] = useState();

  // const todoListData = (e) => {
  //   fetch(`http://localhost:4000/todo`)
  //   .then((res) => res.json())
  //   .then((json) => setTodos(json))
  // }

  useEffect(() => {
    // fetch(`http://localhost:4000/todo`)
    // .then(res => res.json())
    // .then(json => setTodos(json))
    fetchInintialData()
  }, []);

  const fetchInintialData = async() => {
    const res =  await fetch(`http://localhost:4000/todo`)
    const initData = await res.json()
    setTodos(initData)
  }

  const toggleState = (id) => {
    const updateTodos = todos.map(list => {
      if(list.id === Number(id)){
        if(list.status === "done"){
          list.status="todo"
        }else{list.status="done"}

      }

      return list
    })

    setTodos(updateTodos)
  }

  const changeData = (e) => {
    setNewTodos(e.target.value)
  }


  const addTodo = (e) => {
    e.preventDefault()
    setTodos([{id:Date.now(), title:newTodos, status:"todo"}, ...todos])
    // 그냥 넣으면 다른 값들이 사라지기 때문에 ...를 이용해 이미 있는 것을 뿌려놓고 데이터를 넣는다.
  }

  return (
    <div className="App">
      <Header todoname={todos}/>
        <form>
          <input type="text" placeholder='오늘의 할 일은?' onChange={changeData}/>
          <button onClick={addTodo}>추가하기</button>
      </form>
        <List todoname={todos} toggle={toggleState}/>
    </div>
  );
}

export default App;
