import react from 'react';
/*import TodoCounter from "../"; */
//import './App.css';
import TodoCounter from './TodoCounter';
import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import CreateTodoButtom  from './CreateTodoButton';

const defaultTodos = [
  {text:'Cortar cebolla', completed: true, id:"fdsf"},
  {text:'tomar el curso de intro a React', completed: false, id:"dsad" },
  {text:'llorar con la llorona', completed: false, id:"dknc"}
];

function App() {
  const [searchValue,setSearchValue] = react.useState('');
  const [todos, setTodos] = react.useState(defaultTodos);
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1){
     searchedTodos = todos; 
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase(); 
      const searchText = searchValue.toLowerCase();
      console.log(todoText.includes(searchText));
      return todoText.includes(searchText); 
    })
  }

const completeTodos = (text) => {
  const todoIndex = todos.findIndex(todo => todo.text == text);
  const newTodos = [...todos];
  newTodos[todoIndex].completed = true;
  setTodos(newTodos);
  }



  return (
    <>
      <TodoCounter 
      total = {totalTodos}
      completed = {completedTodos} />
      <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
       />
      <CreateTodoButtom/>
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem props={todo} key={todo.text} onComplete = {() => completeTodos(todo.text)}/>
        ))}
        
      </TodoList>
      
    </>
  );
}

export default App;
