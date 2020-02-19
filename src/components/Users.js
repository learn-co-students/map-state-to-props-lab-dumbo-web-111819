import React, { Component } from 'react';
// add any needed imports here
import {connect} from 'react-redux'
class Users extends Component {

  renderUsernames = () => {
    return this.props.users.map((user, idx) => <li key={idx}>{user.username}</li>)
  }

  render() {
    return (
      <div>
        <ul>
          {/* Users! */}
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {this.renderUsernames()}
        </ul>
        {/* In addition, display the total number of users curently in the store */}
        {this.props.numberOfUsers}
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)

