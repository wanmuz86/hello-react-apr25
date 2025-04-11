import React from 'react'
import ListItem from './ListItem'

const List = ({todoList}) => {
  return (
    <div>
        {
            todoList.map((item,index) => <ListItem key={index}></ListItem>)}
    </div>
  )
}

export default List