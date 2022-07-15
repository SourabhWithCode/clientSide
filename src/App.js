import React from 'react'
import { Routes, Route } from "react-router-dom";
import Chat from './component/chat/Chat';
import Join from "./component/join/Join"



const App = () => {

 
  return (
    <div>
       <Routes>
        <Route exact path="/" element={<Join/>} />
        <Route exact path="/chat" element={<Chat/>}  />
      </Routes>
    </div>
  )
}

export default App
