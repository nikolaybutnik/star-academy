import React from 'react'

const Calendar = () => {
  // Show current day in the middle
  // Highlight days when user has logged in.
  // Need to advance a day every 24 hrs. Utilize some kind of calendar api?
  // In middle cell always render Date.now()?
  // Could possibly use local storage to hold an array of last 3 days? But that won't help if user
  // logs in from elsewhere. Utilize database or the user object somehow?
  const today = new Date()

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
                <td style={{ backgroundColor: 'green' }}></td>
                <td></td>
                <td>{console.log(today)}</td>
                <th>{today.getDate()}</th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Calendar
