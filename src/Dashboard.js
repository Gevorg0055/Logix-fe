import React, { Component } from 'react';
import axios from 'axios'; 

class UserTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios.get('https://localhost:7077/api/Dashboard/Index') 
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }

  handleEditClick = (userId) => {
    console.log(`Edit user with ID ${userId}`);
  }

  handleDeleteClick = (userId) => {
    console.log(`Delete user with ID ${userId}`);
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        <h2>User Dashboard</h2>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Date of Birth</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.dateOfBirth}</td>
                <td>{user.phoneNumber}</td>
                <td>
                  <button onClick={() => this.handleEditClick(user.id)}>Edit</button>
                  <button onClick={() => this.handleDeleteClick(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserTable;
