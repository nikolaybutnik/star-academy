import { isToday, parseJSON } from 'date-fns'
const dailyResetPersonalGoals = (user, updateUser, setUser) => {
  fetch(`/getlog/${user._id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.data.length >= 2) {
        const lastActivity = parseJSON(data.data[data.data.length - 2].log)
        if (!isToday(lastActivity)) {
          const resetTasks = user.tasks.map((task) => {
            return {
              task: task.task,
              checked: false,
            }
          })
          user = { ...user, tasks: resetTasks }
          updateUser(user)
          setUser(user)
        }
      }
    })
}

export default dailyResetPersonalGoals
