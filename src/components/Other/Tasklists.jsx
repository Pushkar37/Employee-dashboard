import React from 'react'

export const Tasklists = ({data}) => {
  return (
    <div className='flex gap-5 mt-10  h-1/4 '>
         <div className='rounded-xl bg-red-600 p-10 w-[45%]'>

            <h2 className='text-3xl font-semibold text-center'> <span className='font-semibold'>{data.task_count.new_task}</span> <br /> New Task</h2>
         </div>
         <div className=' rounded-xl bg-blue-600 p-10 w-[45%]'>
           
           <h2 className='text-3xl font-semibold text-center'><span className='font-semibold'>{data.task_count.completed}</span> <br />Completed task</h2>
         </div>
         <div className='rounded-xl bg-green-600 p-10 w-[45%]'>
            <h2 className='text-3xl font-semibold text-center'><span className='font-semibold mb-2'>{data.task_count.failed}</span> <br />Failed Task</h2>
         </div>
         <div className='rounded-xl bg-yellow-500 p-10 w-[45%]'>
            <h2 className='text-3xl font-semibold text-center'><span className='font-semibold'>{data.task_count.active}</span> <br />Active task</h2>
         </div>
    </div>
  )
}
