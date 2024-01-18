import "./App.css";
import React from 'react';
import { useState } from "react";
import { IoMdPerson } from "react-icons/io";
import { AiFillEye } from "react-icons/ai";
import loginImage from "./assets/img/car.jpg";
import loginImagel from "./assets/img/carl.jpg";


function App() {
  const [loginImg, setLoginImg] = useState < boolean >(true);
  const [revealPass, setRevealPass] = useState < boolean >(false);
  const [myImgs, setMyImgs] = useState<Blob[]>([loginImage, loginImagel]);

  const handleCheck = () => {
    console.log("Password is remembered!");
  }

  return (
    <>
      <div className="bg-[#0a0a1a] pattern-topography-stone-700/100 
        pattern-topography-scale-[1] flex flex-col space-y-5 w-full h-screen items-center">
        <div className="w-1/2 mt-2 mb-2 h-1/6 flex justify-center items-center rounded-3xl relative">
            <div className="w-3/4 h-2/3 ">          
            <span className="font-serif font-bold text-[2rem] ">
            <div className="italic font-sans flex flex-col font-bold text-[2.5rem] rounded-xl "><span className="flex items-center justify-center space-x-4 "><p className="text-[#d68556]">Greek</p><p className="text-[#d1a35f]">Market</p></span><p className="text-[#ffe3bf] text-center">Registration</p></div></span>
            </div>
        </div>
        <div
          onMouseEnter={()=>{setLoginImg(!loginImg)}} 
          onMouseLeave={()=>{setLoginImg(!loginImg)}} 
          style={{
          backgroundImage: `url('${loginImg ? myImgs[0] : myImgs[1]}')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          }}
          className="w-1/2 h-2/3 flex flex-col items-center rounded-3xl">
          <div className="relative w-full h-2/5 flex justify-center py-20 -rotate-12 font-sans font-medium text-[4rem]">
            <div className="absolute inset-0 opacity-10 z-10"></div>
            <span className="text-[#f8914d]">GM</span><span className="text-[#bee4eb]">R</span>   
          </div>
          <div className="w-full h-3/5 flex flex-col">
            <div className="relative">
              <form className="absolute inset-7 opacity-100 z-10 flex flex-col space-y-5 items-center" action="submit">
                <div className="relative">      
                  <input className="py-2 px-2 rounded-xl " type="text" placeholder="Username" />
                  <span className="text-[#1f1a68f8]  text-[1.2rem] absolute top-1/2 right-5 -mt-2"><IoMdPerson /></span>
                </div>  
                <div className="relative">            
                  <input className="py-2 px-2 rounded-xl" type={ revealPass ? "text" : "password"} placeholder="Password" />
                  <span onClick={() => {setRevealPass(!revealPass)}} className="text-[#1f1a68f8] text-[1.25rem] absolute top-1/2 right-5 -mt-2 hover:cursor-pointer hover:text-[#41a0ee]"><AiFillEye /></span>
                </div>
                <div className="px-4">
                  <input onChange={handleCheck} className="w-5 h-5" type="checkbox" name="remember" />
                  <label className="text-white font-mono font-semibold text-[1.1rem] ml-3">Remember me?</label>
                </div>                 
                <input className="bg-[#ffffff] py-1 px-10 font-semibold font-sans rounded-xl hover:cursor-pointer text-[#1f1a68f8] hover:text-[#41a0ee]" type="submit" value="Sign In"/>
              </form>
            </div>
            <div className="mx-auto mt-60 text-white font-mono font-semibold text-[1.1rem] italic opacity-80 underline"><a href="https://www.google.gr">Forgot password?</a></div>
          </div>
          <div className="text-[#fa883d] font-semibold font-mono text-[1.2rem] opacity-75 italic mb-3">Powered by SGAAS</div>
        </div>
      </div>
    </>
)}

export default App;
