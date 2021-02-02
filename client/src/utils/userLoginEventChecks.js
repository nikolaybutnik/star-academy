import { differenceInMinutes, isToday, isYesterday, parseJSON } from 'date-fns'

const userLoginEventChecks = (user, updateUser, setUser) => {
  fetch(`/getlog/${user._id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      // If there have been two login events or more...
      if (data.data.length >= 2) {
        // Check if user's energy needs a top up since last log in
        if (user.energy.value < user.maxEnergy) {
          console.log('energy update block triggered')
          const now = new Date()
          const timestamp = parseJSON(user.energy.timestamp)
          const difference = differenceInMinutes(now, timestamp)
          console.log(difference)
          if (difference >= 1 && difference < 2) {
            user = {
              ...user,
              energy: { value: user.energy.value + 1, timestamp: new Date() },
            }
          } else if (difference >= 2 && difference < 3) {
            user = {
              ...user,
              energy: { value: user.energy.value + 2, timestamp: new Date() },
            }
          } else if (difference >= 3) {
            user = {
              ...user,
              energy: { value: user.energy.value + 3, timestamp: new Date() },
            }
          }
          if (user.energy.value > user.maxEnergy) {
            user = {
              ...user,
              energy: { value: user.maxEnergy, timestamp: new Date() },
            }
          }
        }

        // Check if the user logged in yesterday. If so, add 1 to streak.
        const lastActivity = parseJSON(data.data[data.data.length - 2].log)
        const currentLogin = parseJSON(data.data[data.data.length - 1].log)
        if (isYesterday(lastActivity) && isToday(currentLogin)) {
          user = { ...user, streak: user.streak + 1 }
          console.log('Streaks block triggered')
        } else if (
          !isYesterday(lastActivity) &&
          !isToday(lastActivity) &&
          isToday(currentLogin)
        ) {
          user = { ...user, streak: 1 }
        }

        // console.log(
        //   parseJSON(data.data[data.data.length - 3].log),
        //   isToday(parseJSON(data.data[data.data.length - 3].log))
        // )
        // console.log(
        //   parseJSON(data.data[data.data.length - 2].log),
        //   isToday(parseJSON(data.data[data.data.length - 2].log)),
        //   'last activity'
        // )
        // console.log(
        //   parseJSON(data.data[data.data.length - 1].log),
        //   isToday(parseJSON(data.data[data.data.length - 1].log)),
        //   'current login'
        // )

        if (!isToday(lastActivity)) {
          const resetTasks = user.tasks.map((task) => {
            return {
              task: task.task,
              checked: false,
            }
          })
          user = { ...user, tasks: resetTasks }
          console.log('Personal goals block triggered')
        }

        updateUser(user)
        setUser(user)
        console.log('user data updated')
      }
    })
}

export default userLoginEventChecks
