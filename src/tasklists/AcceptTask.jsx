import React, { useContext } from 'react'


export const AcceptTask = (props) => {
  const employees=JSON.parse(localStorage.getItem("employees"))
  const admin=JSON.parse(localStorage.getItem("admin"))
  const idx=props.id
  const onComplete=()=>{
    console.log(employees)
    console.log(idx)
    employees.forEach((e)=>{
      
      if(e.id==idx){
        e.tasks.map((e)=>{
          if(e.task_title==props.data.task_title && e.date==props.data.date){
            e.active=false;
            e.completed=true;
        }
        })
          
          e.task_count.active-=1;
          e.task_count.completed+=1;
         
      }
     
      
      localStorage.setItem("employees",JSON.stringify(employees));
      
    })
    
   
        
  }

  return (
    <div className='scrollbar flex-shrink-0 bg-blue-500 h-[90%] w-[35%] p-5 rounded-lg overflow-auto' >
    <span className='font-semibold bg-red-800 px-2 rounded-md py-1'>{props.data.category}</span>
    <span className='ml-64 text-sm font-semibold'>{props.data.date}</span>
    <h2 className='font-semibold text-4xl text-center m-2'>{props.data.task_title}</h2>
    <div  className=' text-center m-5'>
      {props.data.task_description}
    </div>
    <div className='text-center mt-10' >
        <button className='mt-10 mr-2 text-sm bg-yellow-500 p-1.5 text-center' onClick={onComplete}>Mark as completed</button>
        <button className='mt-10 mr-2 text-sm bg-red-500 p-1.5 text-center'>Mark as failed</button>
    </div>
  </div>
  )
}
