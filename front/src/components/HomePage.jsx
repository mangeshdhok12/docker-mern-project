import React from 'react'
import FetchJsonUsers from './FetchJsonUsers'
import AddUser from './AddUser'
import FindUserByMail from './FindUserByMail'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/users-page')
    }

//TASK 7: React Routing: Set up React Router in an application to navigate between a Home page and a Users page.
    return (
        <div>
            <h2> Home Page</h2>
            <h3>This is the home page</h3>
            <FetchJsonUsers />
            <hr />
            <AddUser />
            <hr />
            <FindUserByMail />
            <hr />
            <div>
             <button onClick={handleClick}><h3>Users Page</h3></button>
            </div>
        </div>
    )
}

export default HomePage
