import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import LandingPage from './pages/LandingPage';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Dashboard from './pages/Home/Dashboard';
import EditResume from './pages/ResumeUpdate/EditResume';

const App = () => {
  return (
     <>
   <div>
     <Router>
      <Routes>
        {/* default route */}
        <Route path="/" element={<LandingPage/>} />
       <Route path="/dashboard" element={<Dashboard/>} />
       <Route path="/resume/:resumeId" element={<EditResume/>} />
          </Routes>
    </Router>
   </div>
    <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: '13px',
          },
        }}
      />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
   </>
  )
}

export default App
