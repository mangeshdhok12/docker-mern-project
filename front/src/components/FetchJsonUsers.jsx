import React, { useEffect, useState } from 'react'



const FetchJsonUsers = () => {
    const [users, setUsers]= useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/users')
    .then(response=>response.json())
    .then(data=>setUsers(data))
    .catch(err=>console.log(err))
  },[])
  return (
    <div>
      <h1>Get Json Users List</h1>
      <table>
        <thead>
          <tr>
            <th> Name</th>
          <th>Email</th>
          <th> Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index)=>(
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FetchJsonUsers




      