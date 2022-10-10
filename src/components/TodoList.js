import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';

const TodoList = () => {
    const [todos, setTodos] = useState([]); 

    const addTodo = todo => {
        // The linebelow makes it so that if noOne types in a letter it will not show up 
        if(!todo.text || /^\s*$/.test(todo.text)) return; 
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    }; 

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) return; 

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue: item)))
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        // remove the selected todo from the list of Todos 
        setTodos(removeArr); 
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo =>  {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo; 
        });
        setTodos(updatedTodos);
    }; 

  return (
    <div>
        <h1>Whats the Plan for today</h1>
        <TodoForm onSubmit={addTodo} /> 
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} /> 
    </div>
  )
}

export default TodoList