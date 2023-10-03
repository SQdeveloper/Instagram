import React, { useState } from 'react';
import "./Perfil.css"
import SliderOfPerfil from './SliderOfPerfil';
import Explorar from '../Explorar/Explorar'

function Perfil({userLoged, historyUsers}) {    
    const OPTIONS = {
        PUBLICATIONS: "PUBLICATIONS",
        REELS: "REELS",
        TAGGED: "TAGGED"
    }

    const [optionSelected, setOptionSelected] = useState(OPTIONS.PUBLICATIONS);


    const handleClickOption = (e)=>{
        const buttonOptions = document.querySelectorAll(".sectionPerfil_body-nav--option");
        buttonOptions[1].classList.remove("selected");
        buttonOptions[2].classList.remove("selected");
        buttonOptions[0].classList.remove("selected");
        e.target.classList.add("selected");        
        
        setOptionSelected(e.target.textContent);    
    }

    return (
        <div className='sectionPerfil'>
            <div className="sectionPerfil_header">
                {userLoged.map((user, index)=>(
                    <>
                    <div className='sectionPerfil_header-contImg' key={index}>
                        <img src={user.picture.large} alt="imagen de perfil" />
                    </div>
                    <div className="sectionPerfil_header-data">
                        <div className="sectionPerfil_header-data-top">
                            <span className="sectionPerfil_header-data-username">{user.login.username}</span>
                            <button className='sectionPerfil_header-data-button'>Edit Profile</button>
                            <button className='sectionPerfil_header-data-button'>View Profile </button>
                            <button><svg aria-label="Opciones" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Opciones</title><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg></button>
                        </div>
                        <div className="sectionPerfil_header-data-info">
                            <span>123 publications</span>
                            <span>1534 followers</span>
                            <span>371 followed</span>
                        </div>
                        <div className="sectionPerfil_header-data-name">{user.name.first + " " + user.name.last}</div>
                    </div>
                    </>
                ))}
            </div>
            <div className='sectionPerfil_histories'>
                <SliderOfPerfil historyUsers={historyUsers}/>
            </div>
            <div className="sectionPerfil_body">
                <div className="sectionPerfil_body-nav">
                    <button onClick={handleClickOption} className="sectionPerfil_body-nav--option selected">PUBLICATIONS</button>
                    <button onClick={handleClickOption} className="sectionPerfil_body-nav--option">REELS</button>
                    <button onClick={handleClickOption} className="sectionPerfil_body-nav--option">TAGGED</button>
                </div>

                {optionSelected === OPTIONS.PUBLICATIONS && <Explorar userLoged={userLoged} keyWord={"paisajes"} amount={18}/>}
                {optionSelected === OPTIONS.REELS && <Explorar userLoged={userLoged} keyWord={"cars"} amount={18}/>}
                {optionSelected === OPTIONS.TAGGED && <Explorar userLoged={userLoged} keyWord={"street"} amount={18}/>}
            </div>
        </div>
    );
}

export default Perfil;