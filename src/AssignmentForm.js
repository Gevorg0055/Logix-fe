import React, { Component } from 'react';

class AssignCoursesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      courses: [],
      selectedUser: '',
      selectedCourses: [],
    };
  }

  componentDidMount() {
    // axios.get('https://api.example.com/users')
    //   .then((response) => {
    //     this.setState({ users: response.data });
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching users:', error);
    //   });
  }

  handleUserChange = (event) => {
    this.setState({ selectedUser: event.target.value });
  }

  handleCourseChange = (event) => {
    const selectedCourses = Array.from(event.target.selectedOptions, (option) => option.value);
    this.setState({ selectedCourses });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Selected User:', this.state.selectedUser);
    console.log('Selected Courses:', this.state.selectedCourses);
  }

  render() {
    const { users, courses, selectedUser, selectedCourses } = this.state;

    return (
      <div>
        <h2>Assign Courses</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Select User:</label>
            <select value={selectedUser} onChange={this.handleUserChange}>
              <option value="">Select a user</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Select Courses:</label>
            <select multiple value={selectedCourses} onChange={this.handleCourseChange}>
              {courses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Assign Courses</button>
        </form>
      </div>
    );
  }
}

export default AssignCoursesForm;
