import React from 'react'
import './style.css'
// import { DateTime } from 'luxon'

const Calendar = () => {
  // Show current day in the middle
  // Highlight days when user has logged in.
  // Need to advance a day every 24 hrs. Utilize some kind of calendar api?
  // In middle cell always render Date.now()?
  // Could possibly use local storage to hold an array of last 3 days? But that won't help if user
  // logs in from elsewhere. Utilize database or the user object somehow?
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
