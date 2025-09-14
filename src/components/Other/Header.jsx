import React from 'react'

export const Header = (props) => {
  const loggedIn=()=>{
    localStorage.setItem("loggedIn","");
    props.changeUser("")
    // window.location.reload()
  }
  return (
    <div className='flex justify-between items-center '>
        <h1>
            <span className='text-4xl'>
                Hello
                </span>
                  <br /> <span className='font-semibold'>
                    {props.data.first_name} 👋
                    </span>
            </h1>
            <button onClick={loggedIn} className='bg-red-500 rounded-lg text-white '>Logout</button>
            </div>
  )
}
