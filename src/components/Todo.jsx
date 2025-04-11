import React, { useState } from 'react'
import AddTodo from './AddTodo'
import List from './List'

const Todo = () => {

    const [todos,setTodos] = useState([])

    const handleAdd = (item) => {

        // Creating an object newItem to be added to the array
        const newItem = 
        {
            id:Math.floor(Math.random()*100000), // random id from 1- 100000
            name:item,
            completed:false
        }

       setTodos([...todos, newItem]) // add the new item to the array using spread operator

    }
     const handleDelete = (item) => {

        const newTodos = todos.filter(val=> val !== item)
        setTodos(newTodos) // update the state with the new array
     }

     const handleMarkAsComplete = (item) => {
        const newTodos = todos.map(val => {
            // Go through the list, and check for the item with the "marked id"
            if (val.id === item.id){
                // if the id is the same, mark it as complete
                return {...val,completed:!val.completed}
            }
            // if not, return as it is
            return val
        })
        setTodos(newTodos) // update the state with the new array
     }

  return (
    <div>
        <AddTodo retrieveItem={handleAdd}/>{
            todos.length > 0 ?  <List todoList={todos} deleteItem={handleDelete}
            markAsComplete={handleMarkAsComplete}
            />
            : <p style={{fontStyle:'italic'}}>To do List is empty</p>
        }
       
    </div>
  )
}

export default Todo