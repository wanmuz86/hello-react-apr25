import React from 'react'
import ListItem from './ListItem'


const List = ({todoList, deleteItem, markAsComplete}) => {
    const handleDelete = (item)=> {
        // pass the item to parent, so the state can be updated
        deleteItem(item)

    }
  return (
    <div>
        {
            todoList.map(item => <ListItem 
            key={item.id} 
            item={item}
            deleteItem={handleDelete}
            markAsComplete={(item)=>markAsComplete(item)}
            ></ListItem>)}
    </div>
  )
}

export default List