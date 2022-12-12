import react from "react";
import "./CreateTodoButton.css";



function CreateTodoButtom(props){
    const onClickButton = (msg) => {
         alert(msg);
    }

    return(    
        <button className="CreateTodoButton"
        onClick={()=> onClickButton('modal')}
        >
        +
        </button>    
    );
}

export default CreateTodoButtom; 