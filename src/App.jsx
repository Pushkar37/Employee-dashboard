import { setLocalStorage } from "../utils/LocalStorage"
import { Login } from "./components/Auth/Login"
import { AdminDashboard } from "./components/Dashboard/AdminDashboard"
import { EmployeeDashboard } from "./components/Dashboard/EmployeeDashboard"
import  { useContext, useState ,useEffect} from 'react'
import { Authcontext } from "./context/AuthProvider"





function App() {
  useEffect(() => {
    setLocalStorage()
  
  })
  const data=useContext(Authcontext)
  
  
  useEffect(() => {
    if(data){
     const loggedIn= localStorage.getItem("loggedIn");
     if(loggedIn){
      const userData=JSON.parse(loggedIn)
     setLoggedInData(userData.data);
     setUser(userData.role);}
    }
  
    
  }, [data])
  
  const [user, setUser] = useState(null);
  const [loggedInData, setLoggedInData] = useState(null);
  const handleLogin=(email,password)=>{
    if(data&&  (data.admin.find((e)=>e.email==email&&e.password==password))){
      const admin=data.admin.find((e)=>e.email==email&&e.password==password)
      if(admin){
      setLoggedInData(admin)
      setUser("admin")
      localStorage.setItem("loggedIn",JSON.stringify({role:"admin",data:admin}));
      }
    }
    else if(data)
      { 
        const employee=data.employees.find((e)=>e.email==email &&e.password==password)
        if(employee){
     
      setUser("employee")
      setLoggedInData(employee)
      localStorage.setItem("loggedIn",JSON.stringify({role:"employee",data:employee}));
      
    }}
    else{
      alert("Invalid Credentials");
    }
  }
  console.log(data)
  

  return (
    <>
     {!user?<Login handleLogin={handleLogin}/>:""}
    
    {user=="admin"? <AdminDashboard changeUser={setUser} data={loggedInData}/>:  user == "employee"?<EmployeeDashboard  changeUser={setUser} data={loggedInData}/>:null }
    </>
  )
}

export default App
