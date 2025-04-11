import React, { useState } from 'react'
import AddTodo from './AddTodo'
import List from './List'

const Todo = () => {

    const [todos,setTodos] = useState([])

    const handleAdd = (item) => {
       setTodos([...todos, item]) // add the new item to the array using spread operator

    }
  return (
    <div>
        <AddTodo retrieveItem={handleAdd}/>
        <List todoList={todos}/>
    </div>
  )
}

export default Todo