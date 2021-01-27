import React, { useContext } from 'react'
import { UserProvider, useUser } from '../../utils/UserContext'
import { PieChart } from 'react-minimal-pie-chart'

const ProfileUserInfo = () => {
  // Currently logged in user
  const user = useUser()

  return (
    // check if user id exists in context. if not, get id from local storage and fetch.
    // if none exists, redirect to login page.
    <div
      className="row col-md-12"
      style={{ flexWrap: 'nowrap', marginTop: '70px' }}
    >
      <div className="col-md-6">
        <PieChart
          // label={({ dataEntry }) => "WINS"}
          data={[
            { title: 'One', value: 80, color: '#E38627' },
            { title: 'Two', value: 20, color: '#C13C37' },
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
