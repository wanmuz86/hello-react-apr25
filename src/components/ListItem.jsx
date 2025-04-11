import React from 'react'

const ListItem = ({item, deleteItem, markAsComplete}) => {
    const handleDelete = () => {
        // Call the function passed from the parent component
        deleteItem(item)
    }
  return (
    <div>
        <p style={{textDecoration: item.completed ? 'line-through':'none'}}> {item.name}
        <button onClick={()=>markAsComplete(item)}> Mark as complete</button>
        <button onClick={handleDelete}>Delete</button>
        </p>
    </div>
  )
}

export default ListItem