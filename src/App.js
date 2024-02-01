import React from 'react'
import Home from './page/Home'
import Cart from './page/Cart'
import {Routes, Route } from "react-router-dom";
import NavBar from './component/NavBar';
import Counter from './page/Counter';
import TodoList from './page/TodoList';


const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="/cart" element={<Cart/>} />
      <Route  path="/counter" element={<Counter/>} />
      <Route  path="/todolist" element={<TodoList/>} />


      </Routes>
    </div>
  )
}

export default App
