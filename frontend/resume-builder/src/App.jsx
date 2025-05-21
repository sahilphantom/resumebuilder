import React from 'react'
import {browserRouter as Router, Route, Routes} from 'react-router-dom';
import {Toast} from 'react-hot-toast';
import LandingPage from './pages/LandingPage';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Dashboard from './pages/Home/Dashboard';

const App = () => {
  return (
   <div>
    <Router>
      <Routes>
        {/* default route */}
        <Route path="/" element={<LandingPage/>} />
        {/* auth routes */}
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />

       <Route path="/dashboard" element={<Dashboard/>} />
        {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
        {/* <Route path="/resume/:id" element={<Resume/>} /> */}
        <Route path="/resume/:resumeId" element={<EditResume/>} />
        {/* <Route path="/resume/:id/preview" element={<PreviewResume/>} /> */}
        {/* <Route path="/resume/:id/download" element={<DownloadResume/>} /> */}



        </Routes>
    </Router>
   </div>
  )
}

export default App
