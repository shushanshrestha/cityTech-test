import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preference/Preference';
import Login from './components/Login/Login'

function setToken(userToken) {
  console.log(userToken, "token")
  sessionStorage.setItem('token', userToken);
}

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   console.log(userToken, "<<<<<<<<<")
//   return userToken?.token
// }
function App() {
  // const token = getToken();
  // if (!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
    <div className="wrapper">
      <Router>
        <h1>hello</h1>
        <Routes>
          <Route path="/" element={<Dashboard />} > </Route>
          <Route path='/login' element={<Login setToken={setToken} />} />
          <Route path="/preference" element={<Preferences />} >
            {/* <Preferences /> */}
          </Route>
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>

      </Router>
    </div>

  );
}
export default App;