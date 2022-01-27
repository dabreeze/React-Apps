import logo from './logo.svg';
import './App.css';
import Auth from './ewa/view/auth/Auth';
import Dashboard from './ewa/view/dashboard/Dashboard';
import React, {useState} from "react";

function App() {

  let value = false
  let email = ""

  try {
    email = localStorage.getItem("userEmail")
    if(email !== "" && email !== null) {
      console.log(email)
      value = true;
    }
  }catch (error) {
    email = ""
    value = false
  }

  const [authenticated, setAuthenticated] = useState(value)

  return (
        <div className= "container">
          {authenticated ? <Dashboard /> : <Auth seAuthenticated = {setAuthenticated} />}
          <Auth/>
        </div>


  )
}

export default App
