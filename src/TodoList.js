import React from 'react';
import "./TodoList.css";
const TodoList = (props) => {
    return (
        <section className='container'>
            <ul>{props.children}</ul>
        </section>
    );
}

export default TodoList;