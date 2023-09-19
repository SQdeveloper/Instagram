import { useState } from 'react'
import './App.css'
import SideBar from './navigate/SideBar'
import TimeLine from './timeLine/timeLine'

function App() {  

  return (
    <div className='app'>  
      <SideBar/>        
      <TimeLine/>
    </div>
  )
}

export default App
