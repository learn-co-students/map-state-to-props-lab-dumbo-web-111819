import React, { Component } from 'react';
// add any needed imports here
import {connect} from 'react-redux'
class Users extends Component {

  render() {
    // console.log(this.props)
    let users=this.props.users.map((user,i)=> (<li key={i}>  {user.username}</li>))
    // debugger
    return (
      <div>
        {<p>{this.props.userCount}</p>}
        <ul>
          {users}
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

const mapStateToProps=(state) => {
  // debugger
  return {users:state.users,
  userCount:state.users.length}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
