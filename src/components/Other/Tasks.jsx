import React from 'react'
import { AcceptTask } from '../../tasklist/AcceptTask'
import { NewTask } from '../../tasklist/NewTask'
import { FailedTask } from '../../tasklist/FailedTask'
import { CompletedTask } from '../../tasklist/CompletedTask'

export const Tasks = (props) => {
  return (
    <div id="task" className=' m-2 flex justify-start items-center   h-[50%] overflow-auto gap-5 '>
       {props.data.tasks.map((e,idx)=>{
        if(e.active){
         return ( <AcceptTask  data={e} id={props.data.id}  key={idx}/>)
        }
         if(e.new_task){
          return( <NewTask data={e} key={idx}/>)
        }
        if(e.failed){
          return (<FailedTask data={e}  key={idx}/>)
        }
        if(e.completed){
          return (<CompletedTask data={e}  key={idx}/>)
        }
       })}
     </div>
  )
}
