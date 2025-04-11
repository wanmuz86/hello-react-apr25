import React from 'react'
import ListItem from './ListItem'


const List = ({todoList, deleteItem}) => {
    const handleDelete = (item)=> {
        // pass the item to parent, so the state can be updated
        deleteItem(item)

    }
  return (
    <div>
        {
            todoList.map((item,index) => <ListItem 
            key={index} 
            item={item}
            deleteItem={handleDelete}
            ></ListItem>)}
    </div>
  )
}

export default List