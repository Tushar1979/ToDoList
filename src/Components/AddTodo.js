import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input className='todo-input' value={userInput} type="text" onChange={handleChange} placeholder="Enter task"/>
            <button className='todo-btn'>Add Todo</button>
        </form>
    );
};

export default ToDoForm;