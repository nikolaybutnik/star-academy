/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useUser } from '../../utils/UserContext'
import randomstring from 'randomstring'
import {
  startOfWeek,
  lastDayOfWeek,
  eachDayOfInterval,
  parseJSON,
  getDate,
  isToday,
} from 'date-fns'

const Calendar = () => {
  const { user } = useUser()

  const [userLogs, setUserLogs] = useState([])

  useEffect(() => {
    // STREAKS
    // fetch(`/getlog/${user._id}`, {
    //   method: 'GET',
    //   headers: {
    //     Accept: 'application/json, text/plain, */*',
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setUserLogs(data.data)
    //   })
  }, [])
  // console.log(userLogs)

  // getDate, getDay (0,1,2,3,4,5,6 - 0 is sunday)
  //
  const firstDay = startOfWeek(new Date(), { weekStartsOn: 1 })
  const lastDay = lastDayOfWeek(new Date(), { weekStartsOn: 1 })
  const currentWeek = eachDayOfInterval({
    start: firstDay,
    end: lastDay,
  })

  // combine with above arr to override styles if current week day is detected on login.
  // Highlight if the date is today and write array to use object?
  const arr = [
    { weekDay: 1, style: '' },
    { weekDay: 2, style: '' },
    { weekDay: 3, style: '' },
    { weekDay: 4, style: '' },
    { weekDay: 5, style: '' },
    { weekDay: 6, style: '' },
    { weekDay: 0, style: '' },
  ]

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
              <th className="secondary">SAT</th>
              <th>SUN</th>
            </tr>
          </thead>
        </table>

        <div>
          <table>
            <tbody>
              <tr>
                {currentWeek.map((day) => {
                  if (isToday(day)) {
                    return (
                      <td
                        key={randomstring.generate(10)}
                        style={{
                          backgroundColor: '#fdffb8',
                          fontWeight: 'bold',
                        }}
                      >
                        {getDate(day)}
                      </td>
                    )
                  } else {
                    return (
                      <td key={randomstring.generate(10)}>{getDate(day)}</td>
                    )
                  }
                })}
                {/* <td className="calendar-date"></td>
                <td style={{ backgroundColor: 'rgb(204 254 222)' }}></td>
                <td></td>
                <th></th>
                <td></td>
                <td></td>
                <td></td> */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Calendar
