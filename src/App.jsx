import { useEffect, useState } from 'react'
import './App.css'
import "./SideRight/perfil.css"
import SideBar from './navigate/SideBar'
import TimeLine from './timeLine/TimeLine'
import PerfilUserLoged from './sideRight/PerfilUserLoged'
import PerfilUser from './sideRight/PerfilUser'
import getRandomUsers from './services/getRandomUsers'
import Explorar from './navigate/Explorar/Explorar'

function App() {  
  const [userLoged, setUserLoged] = useState([]);  
  const [suggestionsUsers, setSuggestionsUsers] = useState([]);  
  const [historyUsers, setHistoryUsers] = useState([]);  
  const [publicationsUsers, setPublicationsUsers] = useState([]);  
  const [sectionSelected, setSectionSelected] = useState("Inicio");

  const getUsers = async ()=>{
    const newUsers = await getRandomUsers();
    setUserLoged(newUsers.slice(0,1));
    setHistoryUsers(newUsers.slice(1,11));
    setPublicationsUsers(newUsers.slice(17,27));
    setSuggestionsUsers(newUsers.slice(11,17));        
  }

  useEffect(()=>{
    getUsers();    
  }, [])

  return (
    <div className='app'>  
      <SideBar setSectionSelected={setSectionSelected} userLoged={userLoged}/>        
      {sectionSelected === "Inicio" && 
        <>
          <TimeLine userLoged={userLoged} historyUsers={historyUsers} publicationsUsers={publicationsUsers}/>  
          <div className="SideRight">
            <PerfilUserLoged userLoged={userLoged}/>
            <div className="SideRight_sub">
              <div className="title">Suggestions for you</div>
              <button>See all</button>
            </div>
            <div className="perfilUsers">
              {suggestionsUsers.map((user)=>(
                <PerfilUser key={user.login.uuid} url={user.picture.medium} username={user.login.username} following={true} />
              ))}
            </div>
          </div>      
        </>
      }

      {sectionSelected === "Explorar" &&         
        <Explorar/>
      }
    </div>
  )
}

export default App
