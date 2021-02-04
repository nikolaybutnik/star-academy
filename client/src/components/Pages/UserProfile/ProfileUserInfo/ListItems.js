/* eslint-disable no-unused-vars */
import { useUser } from '../../../../utils/UserContext'
import updateUser from '../../../../utils/updateUser'
import checkLevelUp from '../../../../utils/checkLevelUp'

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
    // Allow item to get checked off, but prevent it from getting unchecked.
    // Checked values will be reset on user login if the day has advanced.
    if (event.target.className === '') {
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
      const updatedUser = {
        ...user,
        tasks: updatedTasksArray,
        experience: user.experience + 1,
        totalExperience: user.totalExperience + 1,
      }
      setUser(checkLevelUp(updatedUser))
      updateUser(updatedUser)
    }
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
        className="close"
      >
        <i className="fa fa-trash close"></i>
      </button>
    </li>
  )
}

export default ListItems
