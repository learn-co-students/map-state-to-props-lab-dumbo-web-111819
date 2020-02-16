import React, { Component } from 'react';
// add any needed imports here
import {connect} from 'react-redux'

class Users extends Component {

  render() {
    // console.log(this.state)
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */ this.props.numberOfUsers}
          {/* In addition, display the total number of users curently in the store */ users}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
  console.log(state)
  return {
    users: state.users,
    numberOfUsers: state.users.length
  };
};

// connect this component to Redux
export default connect(mapStateToProps)(Users)
