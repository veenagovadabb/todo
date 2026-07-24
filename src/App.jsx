import * as React from 'react'
import './App.css'
import Form from './Form'
import List from './List'


export default function App() {
  const [items] = React.useState(['Thaw Steaks', 'Make Dinner'])
  return (
    <main>
      <Form />
      <List items={items} />
    </main>
  )
}
