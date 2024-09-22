import React, { useState } from 'react'
import axios from 'axios'

//TASK 6: React + State Management: Build a form component in React that allows users to submit their name, email, and age. On submission, send the data to the backend API and update the state to display the new user.

const AddUser = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
      });
    
      const [newUser, setNewUser] = useState(null);
      const [message, setMessage] = useState('');
    
     
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:3000/add-user', formData);
          setMessage(response.data.message);
          
          if (response.data.user) {
           
            setNewUser(response.data.user);
          }
        } catch (error) {
          setMessage('Error adding user');
          console.error('Error:', error);
        }
      };
  return (
    <div>
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <label >name:</label>
        <input type="text"
        
        name='name'
        onChange={handleChange}
        value={formData.email}
        required
        />
        <label >Email:</label>
        <input 
        type="email"
        name='email'
        onChange={handleChange}
        value={formData.email}
        required
         />
        <label >Age:</label>
        <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
         
         <button type='submit'>Add User</button>
      </form>

      {message && <p>{message}</p>}

   
      {newUser && (
        <div>
          <h3>New User Details:</h3>
          <p>Name: {newUser.name}</p>
          <p>Email: {newUser.email}</p>
          <p>Age: {newUser.age}</p>
        </div>
      )}
    </div>
  )
}

export default AddUser
