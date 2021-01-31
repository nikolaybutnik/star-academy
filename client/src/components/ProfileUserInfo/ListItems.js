/* eslint-disable no-unused-vars */
import { useUser } from '../../utils/UserContext'
import updateUser from '../../utils/updateUser'

const ListItems = (props) => {
  const { user, setUser } = useUser()

  const handleRemoveListItem = (event) => {
    const taskToDelete = event.target.parentNode.parentNode.textContent
    const tasksArray = user.tasks
    const filteredTasks = tasksArray.filter(
      (task) => task.task !== taskToDelete
    )
    const updatedUser = { ...user, tasks: filteredTasks }
    updateUser(updatedUser)
    setUser(updatedUser)
  }

  const handleCheckTask = (event) => {
    const tasksArray = user.tasks
    const updatedTasksArray = tasksArray.map((task) => {
      if (task.task === event.target.textContent) {
        return {
          task: event.target.textContent,
          checked: !task.checked,
        }
      } else {
        return task
      }
    })
    const updatedUser = { ...user, tasks: updatedTasksArray }
    updateUser(updatedUser)
    setUser(updatedUser)
  }

  /* <li onClick={(ev) => ev.target.classList.toggle('checked')}></li> */
  return (
    <li
      className={props.checked ? 'checked' : ''}
      onClick={(event) => handleCheckTask(event)}
    >
      {props.item.task}
      <button
        style={{ float: 'right' }}
        onClick={(event) => handleRemoveListItem(event)}
      >
        <i class="fa fa-trash"></i>
      </button>
    </li>
  )
}

export default ListItems
