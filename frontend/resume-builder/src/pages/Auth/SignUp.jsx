import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/inputs/Input';
import { validateEmail } from '../../utils/helper';
import ProfilePhotoSelector from '../../components/inputs/ProfilePhotoSelector';

const SignUp = ({setCurrentPage}) => {
  const [profilePic, setProfilePic] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // handle signup form submit
  const handleSignUp = async (e) => {
    e.preventDefault();

    let profileImageUrl = '';

      if (!fullName) {
      setError("Please enter full name");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError('');

    // SignUp API Call
    try {
     
    } catch (error) {
     
    }
  };

  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center">
      <h3 className="text-lg font-semibold text-black">Create Account</h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-6">
        Please enter your details to sign up
      </p>

      <form onSubmit={handleSignUp}>

     <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

        <Input
          value={fullName}
          onChange={({ target }) => setFullName(target.value)}
          label="Full Name"
          placeholder="John Doe"
          type="text"
        />

        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email Address"
          placeholder="john@example.com"
        />

        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Password"
          placeholder="Enter your password"
          type="password"
        />

        {error && (
          <div className="text-red-500 text-xs mt-2 mb-2">{error}</div>
        )}

        <button
          type="submit"
          className="btn-primary"
        >
          Sign Up
        </button>

        <p className="text-[13px] text-slate-800 mt-3">
          Already have an account?{' '}
          <button
            className="font-medium text-[#e728d4] underline  cursor-pointer"
            onClick={() => setCurrentPage("login")}
          >
            Login
          </button>
          </p>

      </form>
    </div>
  )
}

export default SignUp
