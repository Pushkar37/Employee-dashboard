import React, { useState } from 'react'




export const Login = ({handleLogin}) => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const submitHandler=(event)=>{
    event.preventDefault();
    handleLogin(email,password);
    setEmail("");
    setPassword("");
  }
  
  const onPasswordChange=(event)=>{
    setPassword(event.target.value);
  }
const onEmailChange=(event)=>{
  setEmail(event.target.value)}
  return (
    <div className='flex justify-center items-center h-screen w-screen  flex-nowrap '>
      <div className='  border-2 border-emerald-500 p-6 rounded-lg h-[600px] w-[400px]'>

           <div className='text-4xl h-32'>
                    Login
            </div>
            <div>
              <img  className='h-[100px] ml-32 rounded-xl hover:scale-110 transition-all' src="./download.jpg" alt="EMs" />
            </div>
            <form  onSubmit={submitHandler} className=' mt-10' action="">
                <div className='text-2xl text-center mb-2'>
                  Enter your email:
                  <div className='border-b-2 border-emerald-600 w-1/2 ml-24  '></div>
                  </div>
             
             
              <input required value={email} onChange={onEmailChange} 
                className='  ml-20 bg-transparent border-2 border-emerald-400 outline-none p-[5px] rounded-md placeholder:text-center'type="email" placeholder='Enter your email' />
              <div className='text-2xl text-center mt-2 mb-2  '>
                  Enter your password:
                  <div className='border-b-2 border-emerald-600 w-1/2 ml-24  '></div>
                  </div>
             
              <input required value={password} onChange={onPasswordChange} className='   bg-transparent ml-20   border-2 border-emerald-400 outline-none p-[5px] rounded-md placeholder:text-center'type="password" placeholder='Password' />
             <br />
             <br />
             <input required className='ml-16'  type='checkbox'/> <span className='text-sm'>
              Agree to all terms and condition
              </span>
              <button className='mt-2 ml-[85px] bg-emerald-400 w-1/2'>Login</button>
            </form>
            
                    </div>
      </div>
  )
}
