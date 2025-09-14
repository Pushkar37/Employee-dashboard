import React from 'react'

export const AdminTasks = ({data}) => {
    
  return (
    <div  className='mt-10 flex px-4 py-4 flex-wrap gap-5 h-40 overflow-auto bg-[#242424] '>
        <div className='w-full bg-emerald-500 border-2 px-2 py-2 rounded-md flex justify-between'>
            <h2>Employee name
            </h2>
            <h3>New Task </h3>
            <h3>Active Task</h3>
            <h3>
               Completed task
            </h3>
            <h3>Failed Task</h3>
        </div>
        {data.employees.map((elem,idx)=>{
           return( <div key={idx} className='w-full bg-red-600 px-2 py-2 rounded-md flex  justify-between items-center border-2 border-emerald-500'>
            <h2>{elem.first_name}
            </h2>
            <h3 className='text-blue-700 '>
               {elem.task_count.new_task}
            </h3>
            <h3 className='text-emerald-700'> {elem.task_count.active} </h3>
            <h3> {elem.task_count.completed}</h3>
            <h3 className='text-blue-700'> {elem.task_count.failed}</h3>
        </div>)
        })}
       
        
    </div>
  )
}
