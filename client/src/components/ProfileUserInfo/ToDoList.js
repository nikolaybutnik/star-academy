/* eslint-disable no-unused-vars */
// import { useUser } from '../../utils/UserContext'
import React, { useRef, useState } from 'react'
import ListItem from './ListItems'

const ToDoList = () => {
  const inputRef = useRef()
  const [tasks, setTasks] = useState([
    'String Names - 10mins',
    'Staff Names - 10mins',
    '5x Pull offs',
    '3x Hammer-ons',
  ])

  return (
    <div
      id=""
      style={{
        overflow: 'scroll',
        height: '300px',
        minWidth: '310px',
        marginBottom: '30px',
        boxShadow:
          '0 4px 8px 0 rgb(255 255 255 / 20%), 0 6px 20px 0 rgb(151 151 151 / 19%)',
        borderRadius: '3%',
      }}
    >
      <div id="myDIV" class="header" style={{ backgroundColor: '#f6f6f6' }}>
        <h3 style={{ paddingTop: '8px' }}>Personal Goals</h3>
        <input
          ref={inputRef}
          type="text"
          id="myInput"
          placeholder="Title..."
          style={{ padding: '9px' }}
        />
        <span
          onLoad={() => {}}
          onClick={() => {
            if (inputRef) {
              const newArray = [...tasks, inputRef.current.value]
              setTasks(newArray)
              inputRef.current.value = ''
              console.log(tasks)
            }
          }}
          class="addBtn"
        >
          Add
        </span>
      </div>

      <ul id="myUL">
        {tasks.map((toDoItem) => {
          return <ListItem item={toDoItem} />
        })}
      </ul>
    </div>
  )
}

export default ToDoList
