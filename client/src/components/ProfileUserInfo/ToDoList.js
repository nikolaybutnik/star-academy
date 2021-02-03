/* eslint-disable no-unused-vars */
import { useUser } from '../../utils/UserContext'
import React, { useRef, useState } from 'react'
import ListItem from './ListItems'
import updateUser from '../../utils/updateUser'
import randomstring from 'randomstring'

const ToDoList = () => {
  const inputRef = useRef()
  const { user, setUser } = useUser()
  const tasks = user.tasks

  const handleNewTask = (event) => {
    event.preventDefault()
    if (inputRef) {
      const newTask = {
        task: inputRef.current.value,
        checked: false,
      }
      const newTasks = [...tasks, newTask]
      const updatedUser = { ...user, tasks: newTasks }
      updateUser(updatedUser)
      setUser(updatedUser)
      inputRef.current.value = ''
    }
  }

  return (
    <div className="todoListCol">
      <div id="myDIV" className="header" style={{ backgroundColor: '#f6f6f6' }}>
        <h3 style={{ paddingTop: '8px' }}>Personal Goals</h3>
        <form onSubmit={(event) => handleNewTask(event)}>
          <input
            ref={inputRef}
            type="text"
            id="myInput"
            placeholder="Title..."
            style={{ padding: '9px' }}
          />
          <button className="addBtn">
            <i class="fa fa-plus"></i>
          </button>
        </form>
      </div>

      <ul id="myUL">
        {tasks.map((toDoItem) => {
          return toDoItem.checked ? (
            <ListItem
              key={randomstring.generate(10)}
              item={toDoItem}
              checked={true}
            />
          ) : (
            <ListItem
              key={randomstring.generate(10)}
              item={toDoItem}
              checked={false}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default ToDoList
