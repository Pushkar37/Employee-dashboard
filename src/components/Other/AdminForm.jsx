import React, { useState } from 'react'

export const AdminForm = () => {
  const [title, setTitle] = useState("")
  const [assignTo, setAssignTo] = useState("")
  const [date, setDate] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  
  const Submit=(e)=>{
    e.preventDefault()
    console.log(title,description,category,date)
    let Newtask={task_title:title,task_description:description,active:false,new_task:true,completed:false,date:date,category:category}
    console.log(Newtask)
    const employeess=JSON.parse(localStorage.getItem("employees"))
    console.log(employeess);
    employeess.forEach((elem)=>{
      if(assignTo==elem.first_name){
        
        elem.tasks.push(Newtask)
        elem.task_count.new_task+=1;
        localStorage.setItem("employees",JSON.stringify(employeess));
      }
    })    
    setTitle("")
    setDate("")
    setCategory("")
    setDescription("")
    setAssignTo("")

  } 
  return (
    <div >
      <form onSubmit={(e)=>{Submit(e)}} className='mt-10 flex justify-between flex-wrap items-center bg-[#242424] py-4' >
      <div className='  px-4 w-1/2 '>
        <div >
            <h3 className='font-semibold'>Title name</h3>
            <input value={title} onChange={(event)=>{
              setTitle(event.target.value)
            }} className='mb-4 bg-transparent border-2 border-emerald-500 rounded-md w-[70%] text-center p-1' type="text"  placeholder='Title Name'/>
        </div>
        <div>
            <h3 className='font-semibold' >Assign to</h3>
            <input value={assignTo }  onChange={(event)=>{
              setAssignTo(event.target.value)
            }}className='mb-4 bg-transparent border-2 border-emerald-500 rounded-md w-[70%] text-center p-1' type="text" placeholder="Assign to" />
        </div>
        <div>
            <h3 className='font-semibold'>Date</h3>
            <input value={date} onChange={(event)=>{
              setDate(event.target.value)
            }} className='mb-4 bg-transparent border-2 border-emerald-500 rounded-md w-[70%] text-center p-1' type="date" placeholder="Date" />
        </div>
        <div>
            <h3 className='font-semibold'>Category</h3>
            <input value={category} onChange={(event)=>{
              setCategory(event.target.value)
            }} className='mb-4 bg-transparent border-2 border-emerald-500 rounded-md w-[70%] text-center p-1'type="text" placeholder='Art, Design,Devops etc'/>
        </div>

      </div>
      <div className='w-1/2  text-center'>
        <h3 className='font-semibold'>Description</h3>
        <textarea  value={description}onChange={(event)=>{
              setDescription(event.target.value)
            }}className='bg-transparent border-2 border-emerald-500 rounded-lg' name="" id="" rows="8" cols='60'></textarea>
        <div className='mt-2 w-full'>
            <button className='w-[60%] bg-green-400'> Create Task</button>
        </div>
      </div>
      </form>
    </div>
  )
}
