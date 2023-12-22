import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import Todos from './components/Todos';
import Nhanviens from './components/Nhanviens';
import {CountDown, NewCountdown} from './components/Countdown';
import DetailNhanvien from './components/DetailNhanvien';
import NhomQds from './components/NhomQds';
import DetailNhomQd from './components/DetailNhomQd';

import {
  Routes,
  Route,
} from "react-router-dom";
import AddNewNhomQd from './components/AddNewNhomQd';

const App = () => {
  const [address, setAddress] = useState('')
  let [name, setName] = useState('Phương Văn')
  const [todos, setTodos] = useState([
    {id: 'todo1', title: 'Watching Hoi dan IT chanel', type: 'Phuong'},
    {id: 'todo2', title: 'Doing homework', type: 'Phuong'},
    {id: 'todo3', title: 'Playing game', type: 'Eric'},
    {id: 'todo4', title: 'Reding books', type: 'Eric'}
  ])

  useEffect(() => {
    // console.log('run useEffect address')
  }, [address])

  useEffect(() => {
    // console.log('run useEffect todos')
  }, [todos])

  const handleEventClick = (event) => {
    if (!address) {
      alert ("empty input")
      return;
    }
    // Hook not merge state
    //...Spread syntax array js
    let newTodo = {'id': Math.floor(Math.random() * 1000 + 1), title: address, type: 'Phuong'}
    setTodos([...todos, newTodo])   
    setAddress('')
  }

  const handleOnchangeInput = (event) => {
    setAddress(event.target.value)   
  }

  const deleteDataTodo = (id) => {
    let currentTodos = todos
    currentTodos = currentTodos.filter(item => item.id !== id)
    setTodos(currentTodos)
  }

  const onTimesup = () => {
    alert("Hết giờ")
  }

  return (   
    <div className="App">     
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" /> 

        {/* <CountDown onTimesup={onTimesup} />
        <span> ................... </span>
        <NewCountdown onTimesup={onTimesup}/>
        <h1> Hello {name} ! </h1>    

        <Nhanviens /> */}
        
        {/* <Todos 
          todos = {todos}
          title = {'All Todos'}
          deleteDataTodo = {deleteDataTodo}
        />   
        <Todos 
          todos = {todos.filter(item => item.type === 'Phuong')}
          title = {`Phuong todos`}
          deleteDataTodo = {deleteDataTodo}
        />  
        <input type='text' value={address} onChange={(event) => handleOnchangeInput(event)} />
        <button type='button' onClick={(event) => handleEventClick(event)}> Click me !</button> */}

      </header>

      <Routes>
        <Route path='/' element={<Nhanviens />} />   
        <Route path='/nhanviens' element={<Nhanviens />} />        
        <Route path='/nhanviens/:manhanvien' element={<DetailNhanvien />} />
        <Route path='/nhomqds' element={<NhomQds />} />
        <Route path='/nhomqds/:id' element={<DetailNhomQd />} />
        <Route path='/add-new-nhomqd' element={<AddNewNhomQd />} />
        <Route path='/todos'
            element={
              <>
                <Todos
                  todos = {todos}
                  title = {'All Todos'}
                  deleteDataTodo = {deleteDataTodo}
                />
                <input type='text' value={address} onChange={(event) => handleOnchangeInput(event)} />
                <button type='button' onClick={(event) => handleEventClick(event)}> Click me !</button>
              </>
        } />    
        <Route path='/timer' element={
          <>
            <CountDown onTimesup={onTimesup} />
            <span> ................... </span>
            <NewCountdown onTimesup={onTimesup}/>
          </>            
        } />        
      </Routes>    
      
    </div>   
  );
}

export default App;
