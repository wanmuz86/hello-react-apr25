import React, { useState } from 'react'
import AddTodo from './AddTodo'
import List from './List'

const Todo = () => {

    const [todos,setTodos] = useState([])

    const handleAdd = (item) => {
       setTodos([...todos, item]) // add the new item to the array using spread operator

    }
     const handleDelete = (item) => {

        const newTodos = todos.filter(val=> val !== item)
        setTodos(newTodos) // update the state with the new array
     }

  return (
    <div>
        <AddTodo retrieveItem={handleAdd}/>{
            todos.length > 0 ?  <List todoList={todos} deleteItem={handleDelete}/>
            : <p style={{fontStyle:'italic'}}>To do List is empty</p>
        }
       
    </div>
  )
}

export default Todo