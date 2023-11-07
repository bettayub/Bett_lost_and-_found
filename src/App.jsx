import React, { useState } from 'react';
import { BrowserRouter, Routes, Route  , Navigate} from 'react-router-dom';
import Home from './Home';
import AddItems from './addItems';
import ReturnedItems from './ReturnedItems';
import LostItems from './lostItems';
import FoundItems from './FoundItems';
import ReceivedRewards from './receivedRewards';
import PendingClaims from './PendingClaims';
import  ApplicationForm from './foundApplication'
import ApplicationFormLost from './lostAplication';
import SignUp from './SignUp';
import AdminLogIn from './AdminLogIn'
import Redirect from "./Redirect";
import Navbar from './Navbar';
import LogIn from './LogIn'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [jwToken , setJWToken] = useState("");
  const [role , setRole] = useState("")
  const [username , setUsername] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [btnText, setBtnText] = useState("");


  return (
    <>
    <div>
    <BrowserRouter>
    <Navbar
            username={username}
            setUsername={setUsername}
            jwToken={jwToken}
            setJWToken={setJWToken}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            btnText={btnText}
            setBtnText={setBtnText}
          />
      <Routes>
        <Route path="/" element={<SignUp />}
        />
        <Route path = "/LogIn" element={
        
        <LogIn
        username={username}
        setUsername={setUsername}
        jwToken={jwToken}
        setJWToken={setJWToken}
        setIsLoggedIn={setIsLoggedIn}
        role = {role}
        setRole ={setRole}
        setBtnText={setBtnText}
        isLoggedIn={isLoggedIn}
        btnText = {btnText}
        />} /> 
        <Route path ='/adminLogIn'  element={<AdminLogIn/>}/>
        <Route path="/HomePage" element={<Home
         textbtn = {btnText}
        />}/>
        <Route path="/add" element={<AddItems/>}/>
        <Route path="/returned" element={<ReturnedItems/>}/>
        <Route path="/lost" element={<LostItems/>}/>
        <Route path="/found" element={

         role === "User" ? (
          <>
            <Navigate to="/redirect" />
          </>
        ) : (
           <FoundItems/>
        )
      }/>
      
        <Route path='/pendingclaims' element= {

role === "User" ? (
 <>
   <Navigate to="/redirect" />
 </>
) : (
  <PendingClaims/>
)
}/>
        <Route path="/received" element={<ReceivedRewards/>}/>
        <Route path="/foundApplication" element={<ApplicationForm/>}/>
        <Route path="/lostApplication" element={<ApplicationFormLost/>}/>
        <Route path="/redirect" element={<Redirect />} />
      </Routes>
    </BrowserRouter>

    </div>
    </>
  )
}

export default App
