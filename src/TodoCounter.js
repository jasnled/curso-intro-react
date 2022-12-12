import React from "react";
import "./TodoCounter.css"; 

const TodoCounter = ({completed, total}) => {
    return (
        <h2 className="TodoCounter">Has completado {completed} de {total} TODO's</h2>
    );
}

export default TodoCounter; 