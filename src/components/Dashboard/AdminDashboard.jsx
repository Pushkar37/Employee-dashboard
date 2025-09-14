import React, { useContext } from 'react'
import { Header } from '../other/Header'
import { AdminForm } from '../other/AdminForm'
import { AdminTasks } from '../other/AdminTasks'
import { Authcontext } from '../../context/AuthProvider'

export const AdminDashboard = (props) => {
  const employeeData=useContext(Authcontext)
  return (
    <div className=' w-screen h-screen p-8  '>
        <Header  changeUser={props.changeUser}data={props.data}/>
        <AdminForm/>
        <AdminTasks data={employeeData}/>
    </div>
  )
}
