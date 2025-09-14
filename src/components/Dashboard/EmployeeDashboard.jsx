import React from 'react'
import { Header } from '../other/Header'
import { Tasklists } from '../other/Tasklists'
import { Tasks } from '../other/Tasks'

export const EmployeeDashboard = (props) => {
  return (
    <div className='p- w-screen h-screen p-8 bg-[#242424]'>
        <Header changeUser={props.changeUser} data={props.data}/>
        <Tasklists data={props.data}/>
        <Tasks data={props.data}/>
    </div>
  )
}
