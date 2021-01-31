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

  return (
    <li onClick={(ev) => ev.target.classList.toggle('checked')}>
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
