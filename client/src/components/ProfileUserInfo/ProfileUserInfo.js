import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'

const ProfileUserInfo = ({ user }) => {
  return (
    <div
      className="row col-md-12"
      style={{ flexWrap: 'nowrap', marginTop: '90px' }}
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
        <form
          style={{
            height: 'auto',
            maxHeight: '250px',
            margin: '20px',
            textAlign: 'left',
          }}
        >
          <h6>Username: {user ? user.username : null}</h6>
          <h6>Email: {user ? user.email : null}</h6>
          <h6>Streak: </h6>
          <h6>Birthday: </h6>
          <h6>Joined Date: {user ? user.joined : null}</h6>
        </form>
      </div>
    </div>
  )
}

export default ProfileUserInfo
