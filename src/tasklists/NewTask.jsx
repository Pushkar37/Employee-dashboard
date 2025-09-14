import React from 'react'

export const NewTask = ({data}) => {
  return (
    <div className='scrollbar flex-shrink-0 bg-green-500 h-[90%] w-[35%] p-5 rounded-lg overflow-auto' >
    <span className='font-semibold bg-red-800 px-2 rounded-md py-1'>{data.category}</span>
    <span className='ml-64 text-sm font-semibold'>{data.date}</span>
    <h2 className='font-semibold text-4xl text-center m-2'>{data.task_title}</h2>
    <div  className=' text-center m-5'>
      {data.task_description}
    </div>
    <div className='text-center mt-10'>
    <button className='mt-10 mr-2 text-sm bg-blue-500 p-1.5 text-center'>Accept Task</button> 
    
  </div></div>
  )
}
