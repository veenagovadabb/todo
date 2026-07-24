import React from 'react'

const List = ({items}) => {
  return (
    <>
    <h3>My Todo List</h3>
    <ul>
    {items.map((i,k)=>{
      return <li key={k}>{i}</li>
    })}
    </ul>
    </>
  )
}
export default List