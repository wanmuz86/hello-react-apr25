import React from 'react'

const ListItem = ({item, deleteItem}) => {
    const handleDelete = () => {
        // Call the function passed from the parent component
        deleteItem(item)
    }
  return (
    <div>
        <p> {item}
            <button onClick={handleDelete}>Delete</button>
            </p>
    </div>
  )
}

export default ListItem