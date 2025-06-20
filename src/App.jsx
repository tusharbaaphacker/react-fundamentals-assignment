import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
// import UserList from './Userslice'
import {  UserList } from './Userlist'


function App() {

  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const [darkMode, setDarkMode] = useState(false);
  console.log(user)

  const HandleChange = () => {
    dispatch({
      type : "Test" ,payload :{ username: "tusharshukla", email: "Shukla724@gmail.com", password: "Shukla726"}
    })
  }


  const toggleTheme = () => {
    dispatch({
      type : "theme" , payload :"dark"
    })

  };

  const User = () =>{

  }


 
  return (
    <>
  {JSON.stringify(user)}
  <button onClick={HandleChange}>change button</button>
   <div style={{ 
      backgroundColor: darkMode ? '#333' : '#fff', 
      color: darkMode ? '#fff' : '#000', 
      height: '100vh', 
      padding: '20px' 
    }}>
      <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <button onClick={toggleTheme}>
        Theme
      </button>
    </div>

    </>
  )
}

export default App
