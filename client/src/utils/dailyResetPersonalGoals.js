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
        console.log(
          parseJSON(data.data[data.data.length - 5].log),
          isToday(parseJSON(data.data[data.data.length - 5].log))
        )
        console.log(
          parseJSON(data.data[data.data.length - 4].log),
          isToday(parseJSON(data.data[data.data.length - 4].log))
        )
        console.log(
          parseJSON(data.data[data.data.length - 3].log),
          isToday(parseJSON(data.data[data.data.length - 3].log))
        )
        console.log(
          parseJSON(data.data[data.data.length - 2].log),
          isToday(parseJSON(data.data[data.data.length - 2].log)),
          'last activity'
        )
        console.log(
          parseJSON(data.data[data.data.length - 1].log),
          isToday(parseJSON(data.data[data.data.length - 1].log))
        )

        // console.log(!isToday(lastActivity))
        if (!isToday(lastActivity)) {
          console.log('block reached')
          const resetTasks = user.tasks.map((task) => {
            return {
              task: task.task,
              checked: false,
            }
          })
          user = { ...user, tasks: resetTasks }
          updateUser(user)
          setUser(user)
          console.log('user set')
        }
      }
    })
}

export default dailyResetPersonalGoals
