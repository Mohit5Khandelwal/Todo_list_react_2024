import { useState } from 'react';
import React, { useRef, useEffect } from 'react'
import todo_icon from '../assets/todo_icon.png';
import TodoItems from './TodoItems';

const Todo = () => {

  const inputRef = useRef();
  const [todoList, setTodoList] = useState(localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []);


  // Add function when user click on add button 
  const add = () => {

    const inputText = inputRef.current.value.trim();

    // When input text is empty 
    if( inputText === "" )
    {
      alert("Please enter some text");
      return null;
    }
    
    // creating an todo object that is stored in todo
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false
    };

    setTodoList([...todoList, newTodo]);
    inputRef.current.value = '';

    }

    // Delete the list items 
    const deleteTodo = (id) => {
      const updatedTodoList = todoList.filter( (todo) => todo.id !== id );
      setTodoList(updatedTodoList);
    }

    // Toogle list items 
    const toggle = (id) => {
      const updatedTodoList = todoList.map( (todo) => {
        if( todo.id === id )
        {
          return {
            ...todo,
            isComplete: !todo.isComplete
          }
        }
        return todo;
      } );
      setTodoList(updatedTodoList);
    }

    useEffect( () => {
      localStorage.setItem('todo', JSON.stringify(todoList));

    }, [todoList])
    
    

  

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-2xl'>
      

      {/* ---------- Title -------------------- */}

      <div className='flex items-center mt-7 gap-2'>
        <img className='w-8' src={todo_icon} alt=''/>
        <h1 className='text-3xl font-semibold'> To-DO List </h1>
      </div>

      {/* --------- input box --------------------- */}
      
      <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 p-4 pr-2 placeholder:text-slate-600'  type='text' placeholder='Add your task' />
        <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer font-bold'> Add +</button>

      </div>

      {/* --------------- To-do List items ------------------ */}

      <div>
        
        {
          todoList.map( (todo, index) => (
            <TodoItems text={todo.text} key={index} id={todo.id} isComplete={todo.isComplete} deleteTodo={deleteTodo} toggle={toggle} />
          ) )
        }

      </div>



    </div>
  )
}

export default Todo