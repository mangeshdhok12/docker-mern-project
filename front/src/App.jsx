import React  from 'react'
import UsersPage from './components/UsersPage'
import HomePage from './components/HomePage'
import { Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users-page" element={<UsersPage />} />
      </Routes>
    </div>
  );
}

export default App
