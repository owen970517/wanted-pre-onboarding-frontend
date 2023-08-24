import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from '../components/Home';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';

const Page = () => {
  const nav = useNavigate();
  const isLogin = localStorage.getItem('token');
  useEffect(()=> {
    if (isLogin) {
      nav('/todo')
    } 
    nav('/signin')
  },[])
  return (
    <Routes>
      <Route path='/todo' element={<Home/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>} />
    </Routes>
  )
}

export default Page