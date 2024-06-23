/* eslint-disable no-unused-vars */
import React from 'react'
import tick from '../assets/tick.png';
import delete_icon from '../assets/delete.png';
import not_tick from '../assets/not_tick.png';


// eslint-disable-next-line react/prop-types
const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
return (
    <div  className='flex items-center my-3 gap-2'>

        <div onClick={ () => { toggle(id) }} className='flex flex-1 items-center cursor-pointer'>

            <img src={isComplete ? tick : not_tick} alt='tick image' className='w-7'/>
            <p className= {`text-slate-700 ml-4 font-semibold text-lg decoration-slate-500 ${isComplete ? "line-through" : "" }`}> {text} </p>


        </div>

        <img onClick={ () => { deleteTodo(id) } } src={delete_icon} alt='delete icon' className='w-6 cursor-pointer'/>

    </div>
    
)
}

export default TodoItems