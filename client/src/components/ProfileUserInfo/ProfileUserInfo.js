import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'

const ProfileUserInfo = () => {
  return (
    <div
      className="row col-md-12"
      style={{ flexWrap: 'nowrap', marginTop: '70px' }}
    >
      <div className="col-md-6">
        <PieChart
          // label={({ dataEntry }) => "WINS"}
          data={[
            { title: 'One', value: 50, color: '#E38627' },
            { title: 'Two', value: 50, color: '#C13C37' },
          ]}
          style={{ height: 'auto', maxHeight: '250px', margin: '20px' }}
        />
      </div>

      <div className="col-md-6">
        <form style={{ height: 'auto', maxHeight: '250px', margin: '20px' }}>
          <h6>Username: </h6>
          <h6>Email: </h6>
          <h6>Streak: </h6>
          <h6>Birthday: </h6>
          <h6>Joined Date: </h6>
        </form>
      </div>
    </div>
  )
}

export default ProfileUserInfo
