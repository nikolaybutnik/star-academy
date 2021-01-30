/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useUser } from '../../utils/UserContext'
// import { DateTime } from 'luxon'
import { formatDistance, subDays } from 'date-fns'

const Calendar = () => {
  const { user } = useUser()

  const [userLogs, setUserLogs] = useState([])

  useEffect(() => {
    // STREAKS
    // On page render, fetch an array of all user login instances.
    // fetch(`/getlog/${user._id}`, {
    //   method: 'GET',
    //   headers: {
    //     Accept: 'application/json, text/plain, */*',
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => setUserLogs(data.data))
  }, [])

  // // Make a new array of objects with time of log in
  // const logsArr = userLogs.map((log) => {
  //   return {
  //     day: new Date(Date.parse(log.log)).getDay(),
  //     month: new Date(Date.parse(log.log)).getMonth(),
  //     date: new Date(Date.parse(log.log)).getDate(),
  //     year: new Date(Date.parse(log.log)).getYear(),
  //   }
  // })
  // // Remove all duplicates from the above arr. leaving only uniquw dates.
  // const uniqueEntries = Array.from(new Set(logsArr.map((a) => a.id))).map(
  //   (id) => {
  //     return logsArr.find((a) => a.id === id)
  //   }
  // )
  // console.log(logsArr)
  // console.log(uniqueEntries)

  const today = new Date()
  const oneDayAgo = new Date()
  const twoDaysAgo = new Date()
  const threeDaysAgo = new Date()
  const oneDayFuture = new Date()
  const twoDaysFuture = new Date()
  const threeDaysFuture = new Date()
  let days = []
  switch (today.getDay()) {
    case 1:
      days = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU']
      break
    case 2:
      days = ['SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI']
      break
    case 3:
      days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
      break
    case 4:
      days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
      break
    case 5:
      days = ['TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN', 'MON']
      break
    case 6:
      days = ['WED', 'THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE']
      break
    case 7:
      days = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED']
      break
    default:
      break
  }

  return (
    <div className="calendar">
      <div className="outer">
        <table>
          <thead>
            <tr>
              <th>{days[0]}</th>
              <th>{days[1]}</th>
              <th>{days[2]}</th>
              <th>{days[3]}</th>
              <th>{days[4]}</th>
              <th className="secondary">{days[5]}</th>
              <th className="secondary">{days[6]}</th>
            </tr>
          </thead>
        </table>

        <div className="wrap">
          <table>
            <tbody>
              <tr>
                <td className="calendar-date">
                  {new Date(
                    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3)
                  ).getDate()}
                </td>
                <td>
                  {new Date(
                    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2)
                  ).getDate()}
                </td>
                <td>
                  {new Date(
                    oneDayAgo.setDate(oneDayAgo.getDate() - 1)
                  ).getDate()}
                </td>
                <th>{today.getDate()}</th>
                <td>
                  {new Date(
                    oneDayFuture.setDate(oneDayFuture.getDate() + 1)
                  ).getDate()}
                </td>
                <td>
                  {new Date(
                    twoDaysFuture.setDate(twoDaysFuture.getDate() + 2)
                  ).getDate()}
                </td>
                <td>
                  {new Date(
                    threeDaysFuture.setDate(threeDaysFuture.getDate() + 3)
                  ).getDate()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Calendar
