import React, {useState} from 'react';



const Todo = props => {

    const [todoName, setTodoName ] = useState('');

    const inputChangeHandler = (event) => {
        setTodoName(event.target.value);
    };

    return <React.Fragment>
        <input 
            type="text" 
            placeholder="To-Do"
            onChange={inputChangeHandler}
            value={todoName}
        />
        <button type="button">Add</button>
        <ul>

        </ul>
    </React.Fragment>
};

export default Todo;