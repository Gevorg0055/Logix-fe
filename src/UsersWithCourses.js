import React, { Component } from 'react';

class UserCourseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    // Fetch the list of users and their assigned courses from your API
    // Update the state with the fetched data
    // Example:
    // axios.get('https://api.example.com/userCourses')
    //   .then((response) => {
    //     this.setState({ users: response.data });
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching user courses:', error);
    //   });
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        <h2>User Course List</h2>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Assigned Courses</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>
                  <ul>
                    {user.courses.map((course) => (
                      <li key={course.id}>{course.name}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserCourseList;
