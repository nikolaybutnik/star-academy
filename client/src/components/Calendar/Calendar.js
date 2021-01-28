import React from 'react'
// import { DateTime } from 'luxon'

const Calendar = () => {
  return (
    <div className="calendar">
      <div className="outer">
        <table>
          <thead>
            <tr>
              <th>SUN</th>
              <th>MON</th>
              <th>TUE</th>
              <th>WED</th>
              <th>THUR</th>
              <th className="secondary">FRI</th>
              <th className="secondary">SAT</th>
            </tr>
          </thead>
        </table>

        <div className="wrap">
          <table>
            <tbody>
              <tr>
                <td style={{ backgroundColor: 'green' }}></td>
                <td></td>
                <td></td>
                <td></td>
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
