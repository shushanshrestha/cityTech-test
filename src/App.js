import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preference/Preference';
import Login from './components/Login/Login'

function setToken(userToken) {
  // console.log(userToken, "token")
  sessionStorage.setItem('token', userToken);
}

function App() {

  return (
    <div className="wrapper">
      <Router>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path='/login' element={<Login setToken={setToken} />} />
          <Route path="/preference" element={<Preferences />} >
          </Route>
        </Routes>

      </Router>
    </div>

  );
}
export default App;