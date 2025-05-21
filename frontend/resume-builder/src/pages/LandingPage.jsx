import React, { useState } from 'react'
import heroImg from '../assets/hero-img.webp';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
 const navigate = useNavigate(); 
const [openAuthModal, setOpenAuthModal] = useState(false); 
const [currentPage, setCurrentPage] = useState("login"); 
const handleCTA = () => {}; 
return ( 
<div className='w-full min-h-full bg-white pb-96'> 
<div className="container  mx-auto px-4 py-6 md:w-[90%]"> 
{/* Header */} 
<header className="flex justify-between items-center mb-16"> 
<div className="text-xl font-bold">RenderCV</div> 
<button className="bg-purple-100 text-sm font-semibold text-black px-7 py-3 rounded-lg hover:bg-gray-800 hover:text-white transition-colors cursor-pointer "
onClick={() => setOpenAuthModal(true)}
> 
Login / Sign Up 
</button> 
</header> 

{/* Hero Content */} 
<div className="flex flex-col md:flex-row items-center"> 
<div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0"> 
<h1 className="text-5xl font-bold mb-6 leading-tight"> 
Build Your{" "} 
<span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#7182ff_0%,_#3cff52_100%)] bg-[length:200%_200%] animate-text-shine"> 
Resume Effortlessly 
</span> 
</h1> 
<p className="text-lg text-gray-700 mb-8"> 
Craft a standout resume in minutes with our smart and intuitive resume builder. 
</p> 
<button className='bg-black text-sm font-semibold text-white px-8 py-3 rounded-lg hover:bg-gray-800 hover:transition-colors cursor-pointer'
onClick={handleCTA}>
Get Started 
</button> 
</div> 
<div className="w-full md:w-1/2"> 
<img 
src={heroImg} 
alt="Hero Image"
className='w-full  rounded-lg '
/>
</div>
</div>
</div> 
</div>
  )
}

export default LandingPage
