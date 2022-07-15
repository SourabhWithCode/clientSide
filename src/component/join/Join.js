import React from 'react'
import "./join.css"
import logo from "../../img/logo.png"
import { Link } from 'react-router-dom'

let user;

const Join = () => {

    const sendUser = ()=>{
        user = document.getElementById("joinInput").value;
        console.log(user)

    }

  return (
    <div className='joinPage'>
        <div className="joinContainer">
            <img src={logo} alt="img" />
            <h1>HELLO CHAT</h1>
            <input type="text" id='joinInput'  placeholder='Enter Your Name'/>
          <Link to="/chat"><button onClick={sendUser} className='joinbtn'>LogIn</button></Link>
        </div>
      
    </div>
  )
}

export default Join
export {user}