import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get('https://localhost:7077/api/Dashboard/Profile/28930dac-2e21-46bf-a25c-dd102a0ef3bf')
      .then((response) => {
        setUser(response.data); 
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []); 

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <p><strong>First Name:</strong> {user.firstName}</p>
        <p><strong>Last Name:</strong> {user.lastName}</p>
        <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
        <p><strong>Date of Birth:</strong> {user.dateOfBirth}</p>
        <p><strong>Address:</strong> {user.address}</p>
        <p><strong>Full Name:</strong> {user.fullName}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
}

export default Profile;
