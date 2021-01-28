import { useUser } from '../../utils/UserContext'
import { PieChart } from 'react-minimal-pie-chart'

const ProfileUserInfo = () => {
  // Currently logged in user
  const { user } = useUser()

  return (
    // check if user id exists in context. if not, get id from local storage and fetch.
    // if none exists, redirect to login page.
    <div className="row col-md-12" style={{ marginTop: '70px' }}>
      <div className="col-md-5">
        <PieChart
          // label={({ dataEntry }) => "WINS"}
          data={[
            { title: 'One', value: 80, color: 'rgb(45 182 56)' },
            { title: 'Two', value: 20, color: '#ff5061' },
          ]}
          style={{ height: 'auto', maxHeight: '250px', margin: '20px' }}
        />
      </div>

      <div className="col-md-7">
        {/* <form
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
          <h6>Birthday: {user ? user.birthday : null} </h6>
          <h6>Joined Date: {user ? user.joined : null}</h6>
        </form> */}
        <div id="" style={{ overflow: 'scroll', height: '400px' }}>
          <div id="myDIV" class="header">
            <h2>My To Do List</h2>
            <input type="text" id="myInput" placeholder="Title..." />
            <span onclick="newElement()" class="addBtn">
              Add
            </span>
          </div>

          <ul id="myUL">
            <li>Hit the gym</li>
            <li class="checked">Pay bills</li>
            <li>Meet George</li>
            <li>Buy eggs</li>
            <li>Read a book</li>
            <li>Organize office</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProfileUserInfo
