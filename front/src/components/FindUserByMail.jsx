

import React, { useState } from 'react';
import axios from 'axios';


//TASK 5: Express.js + MongoDB: Create an Express.js route to fetch a user by their email from the MongoDB database.

const FindUserByMail = () => {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null); 
  const [error, setError] = useState(''); 
  const handleSearch = async (e) => {
    e.preventDefault();
    setError(''); 

    try {
      const response = await axios.get(`http://localhost:3000/user/${email}`);
      setUser(response.data); 
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('User not found');
      } else {
        setError('An error occurred while fetching the user');
      }
      setUser(null);
    }
  };

  return (
    <div>
      <h2>Search User by Email</h2>

     
      <form onSubmit={handleSearch}>
        <label>
          Enter email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Search</button>
      </form>

      
      {user && (
        <div>
          <h3>User Details:</h3>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Age:</strong> {user.age}</p>
        </div>
      )}

     
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default FindUserByMail;
