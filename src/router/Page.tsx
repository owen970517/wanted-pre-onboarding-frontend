import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';

const Page = () => {
  return (
    <Routes>
        <Route path='/todo' element={<Home/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>} />
    </Routes>
  )
}

export default Page