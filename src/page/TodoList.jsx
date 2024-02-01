import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { addTodos, removeTodos } from '../store/todoSlice';

// 

const TodoList = () => {
    const dispatch = useDispatch()
    const todoItems = useSelector((state) => state.todo.ToDo)

  // how to use multiple slice in the app 

  const ListItems = useSelector((state)=>state.todo.ToDo)
 console.log("ListItems", ListItems)



    const [addTodo, setAddTodo] = useState('')

    const addToDoList = () => {
        dispatch(addTodos({ text: addTodo }));
        setAddTodo("");
    }
    const handleRemoveTodo = (id) => {
        dispatch(removeTodos({ id }));
    };

   

    // How I can write the text

    return (
        <div>
            <h1>ToDo List</h1>
            {
                <ul>
                    {todoItems.map((todo,item)=>{
                        return(
                        <>
                        <li key ={todo.id}>
                        {todo.text}
                        <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                        </li>
                        </>
                        )
                    })}
                </ul>
            }


            {/* {
                <ul>
                
                    {todoItems.map(todo => (
                        <li key={todo.id}>
                            {todo.text}
                            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                            <button onClick={uniqueid}>clear single item</button>
                        </li>
                    ))}
                </ul>

            } */}



            <TextField id="outlined-basic" label="Outlined" variant="outlined" value={addTodo} onChange={(e) => setAddTodo(e.target.value)} />
            <Button variant="contained" onClick={addToDoList} >Add ToDo</Button>
        </div>
    )
}

export default TodoList

// 80*10=10


