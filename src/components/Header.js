import React from 'react';

const header = (props) => (
    <header>
        <button onClick={props.onLoadTodos}>To-Do list</button> | {'  '} <button onClick={props.onLoadAuth}> Auth </button>
    </header>
)

export default header;