/* eslint-disable no-unused-vars */
import React from 'react'
import { useUser } from '../../utils/UserContext'
import randomstring from 'randomstring'
import {
  startOfWeek,
  lastDayOfWeek,
  eachDayOfInterval,
  getDate,
  isToday,
} from 'date-fns'

const Calendar = () => {
  const { user } = useUser()

  // getDate, getDay (0,1,2,3,4,5,6 - 0 is sunday)
  const firstDay = startOfWeek(new Date(), { weekStartsOn: 1 })
  const lastDay = lastDayOfWeek(new Date(), { weekStartsOn: 1 })
  const currentWeek = eachDayOfInterval({
    start: firstDay,
    end: lastDay,
  })

  // combine with currentWeek array to combine style data for each day of the week.
  const calendar = user.calendar

  const updatedCalendar = currentWeek.map((day, i) => {
    return { day, ...calendar[i] }
  })
  console.log(updatedCalendar)

  return (
    <div className="calendar">
      <h6 className="weekly-streak-title" style={{ paddingTop: '5px' }}>
        Weekly Streak
      </h6>
      <div className="outer">
        <table>
          <thead>
            <tr>
              <th>MON</th>
              <th>TUE</th>
              <th>WED</th>
              <th>THU</th>
              <th>FRI</th>
              <th>SAT</th>
              <th>SUN</th>
            </tr>
          </thead>
        </table>

        <div>
          <table>
            <tbody>
              <tr>
                {updatedCalendar.map((day) => {
                  if (isToday(day.day)) {
                    return (
                      <td
                        key={randomstring.generate(10)}
                        style={{
                          backgroundColor: '#fdffb8',
                          fontWeight: 'bold',
                        }}
                      >
                        {getDate(day.day)}
                      </td>
                    )
                  } else {
                    return (
                      <td key={randomstring.generate(10)} style={day.style}>
                        {getDate(day.day)}
                      </td>
                    )
                  }
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Calendar
