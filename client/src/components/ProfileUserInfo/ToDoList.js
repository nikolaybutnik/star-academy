/* eslint-disable no-unused-vars */
import { useUser } from '../../utils/UserContext'
import React, { useRef, useState } from 'react'
import ListItem from './ListItems'
import updateUser from '../../utils/updateUser'

const ToDoList = () => {
  const inputRef = useRef()
  const { user, setUser } = useUser()
  const tasks = user.tasks

  const handleNewTask = (event) => {
    event.preventDefault()
    if (inputRef) {
      const newTask = { task: inputRef.current.value, checked: false }
      const newTasks = [...tasks, newTask]
      const updatedUser = { ...user, tasks: newTasks }
      updateUser(updatedUser)
      setUser(updatedUser)
      inputRef.current.value = ''
    }
  }

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
        <form onSubmit={(event) => handleNewTask(event)}>
          <input
            ref={inputRef}
            type="text"
            id="myInput"
            placeholder="Title..."
            style={{ padding: '9px' }}
          />
          <button>Add</button>
        </form>
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
