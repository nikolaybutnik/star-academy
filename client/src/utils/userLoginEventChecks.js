/* eslint-disable no-unused-vars */
import {
  differenceInMinutes,
  isToday,
  isYesterday,
  parseJSON,
  getDay,
} from 'date-fns'
import registerLoginEvent from './registerLoginEvent'

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
      // Perform check of whether to log the current login event.
      const retrievedData = data.data
      // If user logs in for the first time, log the event.
      // Keep two logs per day
      if (retrievedData.length === 0) {
        registerLoginEvent(user)
        registerLoginEvent(user)
        console.log('event 1')
      } else {
        // If user logged in before, check if the day changed and log the event.
        // Keep two logs per day
        const lastActivity = parseJSON(
          retrievedData[retrievedData.length - 1].log
        )
        const currentActivity = new Date()
        // console.log(lastActivity)
        // console.log(currentActivity)
        // console.log(isToday(lastActivity) === false)
        if (!isToday(lastActivity) && isToday(currentActivity)) {
          registerLoginEvent(user)
          console.log('event 2')
        }
        if (
          retrievedData.length >= 3 &&
          !isToday(retrievedData[retrievedData.length - 2]) &&
          isToday(lastActivity) &&
          isToday(currentActivity)
        ) {
          registerLoginEvent(user)
          console.log('event 3')
        }
      }

      // If there have been two login events or more...
      if (retrievedData.length >= 2) {
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
        const lastActivity = parseJSON(
          retrievedData[retrievedData.length - 2].log
        )
        const currentLogin = parseJSON(
          retrievedData[retrievedData.length - 1].log
        )
        if (isYesterday(lastActivity) && isToday(currentLogin)) {
          // On day change, add + 1 to streak if conditions are met.
          // also write to calendar object to highlight today's day.
          console.log(lastActivity)
          console.log(currentLogin)
          console.log(getDay(currentLogin))
          // const calendar = [
          //   { weekDay: 1, style: '' },
          //   { weekDay: 2, style: '' },
          //   { weekDay: 3, style: '' },
          //   { weekDay: 4, style: '' },
          //   { weekDay: 5, style: '' },
          //   { weekDay: 6, style: '' },
          //   { weekDay: 0, style: '' },
          // ]
          user = { ...user, streak: user.streak + 1 }
          console.log('Streaks block triggered')
        } else if (
          // Or reset streak to 1.
          !isYesterday(lastActivity) &&
          !isToday(lastActivity) &&
          isToday(currentLogin)
        ) {
          console.log('resetting streak to 1')
          user = { ...user, streak: 1 }
        }

        // console.log(
        //   parseJSON(retrievedData[retrievedData.length - 3].log),
        //   isToday(parseJSON(retrievedData[retrievedData.length - 3].log))
        // )
        // console.log(
        //   parseJSON(retrievedData[retrievedData.length - 2].log),
        //   isToday(parseJSON(retrievedData[retrievedData.length - 2].log)),
        //   'last activity'
        // )
        // console.log(
        //   parseJSON(retrievedData[retrievedData.length - 1].log),
        //   isToday(parseJSON(retrievedData[retrievedData.length - 1].log)),
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
      }
      updateUser(user)
      setUser(user)
      console.log('user data updated')
    })
}

export default userLoginEventChecks
